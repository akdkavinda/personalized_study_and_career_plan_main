import pandas as pd
import numpy as np
import pickle
import requests
import shutil
from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
import json
import random

model = pickle.load(open("role_model.dat", "rb"))

def CGPA_data(value):
    if value>9.0:
        res=1
    elif value>8.5:
        res=2
    elif value>8.0:
        res=3
    elif value>7.5:
        res=4
    elif value>7.0:
        res=5
    elif value>6.5:
        res=6
    elif value>6.0:
        res=7
    elif value>5.5:
        res=8
    elif value>5.0:
        res=9
    elif value>4.5:
        res=10
    elif value>4.0:
        res=11
    elif value>3.5:
        res=12
    elif value>3.0:
        res=13
    elif value>2.5:
        res=14
    elif value>2.0:
        res=15
    elif value>1.5:
        res=16
    elif value>1.0:
        res=17
    else:
        res=18
        
    return res

def plan_data(value):
    if value==1:
        res="Ruhuna-Physical Science"
    elif value==2:
        res="Ruhuna-Biological Science"
    elif value==3:
        res="SLIIT-IT Special"
    elif value==4:
        res="Open University-Bachelor of Science honours in Physics"
    elif value==5:
        res="SLIIT-Cyber Security"
    elif value==6:
        res="SLIIT-Humanities & Science"
    elif value==7:
        res="SLIIT-Network Engineering"
    elif value==8:
        res="Open University-Bachelor of Science Honours in Chemistry"
    elif value==9:
        res="Moratuwa-Architecture"
    elif value==10:
        res="Open University-Bachelor of Science Honours in?Botany"
    elif value==11:
        res="Moratuwa-IT"
    elif value==12:
        res="SLIIT-Software Engineering"
    elif value==13:
        res="Open University-Bachelor of Science Honours in Mathematics"
    elif value==14:
        res="SLIIT-Engineering"
    elif value==15:
        res="Ruhuna-Medicine"
    elif value==16:
        res="SLIIT-Computing"
    elif value==17:
        res="Open University-IT"
    elif value==18:
        res="Open University-Biological Science"
    elif value==19:
        res="Ruhuna-Engineering"
    else:
        res="Ruhuna-Computing"
        
    return res

app = Flask(__name__)

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response
@app.route('/plan', methods=['POST'])
def plan():

    json_data = request.get_json()

    result = model.predict([[int(CGPA_data(float(json_data['cgpa']))),int(json_data['q1']),int(json_data['q2']),int(json_data['q3']),int(json_data['q4']),int(json_data['q5']),int(json_data['q6']),int(json_data['q7']),int(json_data['q8']),int(json_data['q9']),int(json_data['q10']),int(json_data['q11']),int(json_data['q12']),int(json_data['q13']),int(json_data['q14']),int(json_data['q15']),int(json_data['q16']),int(json_data['q17']),int(json_data['q18'])]])
    print(result)


    json_d = json.dumps({"predict":str(plan_data(int(result[0]))),"success":"true"})

    return json_d

if __name__ == '__main__':
	app.run(host="127.0.0.1", port=3333)
