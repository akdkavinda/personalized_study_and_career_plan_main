import pandas as pd
import numpy as np
import pickle
import requests
import shutil
from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
import json
import random

model = pickle.load(open("campus.dat", "rb"))

def z_data(value):
    if value>2.5:
        res=1
    elif value>2.0:
        res=2
    elif value>1.5:
        res=3
    elif value>1.0:
        res=4
    elif value>0.5:
        res=5
    elif value>0.0:
        res=6
    else:
        res=7
        
    return res

def university_data(value):
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
        res="Moratuwa-Engineering"
    elif value==13:
        res="SLIIT-Software Engineering"
    elif value==14:
        res="Open University-Bachelor of Science Honours in Mathematics"
    elif value==15:
        res="SLIIT-Engineering"
    elif value==16:
        res="Ruhuna-Medicine"
    elif value==17:
        res="SLIIT-Computing"
    elif value==18:
        res="Open University-IT"
    elif value==19:
        res="Open University-Biological Science"
    elif value==20:
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
@app.route('/university', methods=['POST'])
def university():

    json_data = request.get_json()

    result = model.predict([[int(json_data['personality']),int(z_data(float(json_data['zcore']))),int(json_data['district']),int(json_data['o_l_science']),int(json_data['a_l_maths']),int(json_data['a_l_bio']),int(json_data['a_l_chemistry']),0,int(json_data['a_l_physics']),int(json_data['o_l_maths']),int(json_data['o_l_english'])]])
    print(result)

    data=str(university_data(int(result[0])))

    if((int(json_data['a_l_maths'])==1 and int(json_data['a_l_chemistry'])==1 and int(json_data['a_l_physics'])==1) and float(json_data['zcore'])<2):
        data="Z-core Error"


    json_d = json.dumps({"predict":data,"success":"true"})

    return json_d

if __name__ == '__main__':
	app.run(host="127.0.0.1", port=5555)
