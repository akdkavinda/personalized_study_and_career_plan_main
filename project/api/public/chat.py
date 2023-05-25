import pandas as pd
import numpy as np
import pickle
import requests
import shutil
from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
import json
import random

al_model = pickle.load(open("chat_result.dat", "rb"))
class_model = pickle.load(open("class.dat", "rb"))

def subject_result(value):
    if value=="A" or value=="a":
        res=1
    elif value=="B" or value=="b":
        res=2
    elif value=="C" or value=="c":
        res=3
    else:
        res=4
        
    return res

def set_result(value):
    if value<1:
        res="Maths"
    elif value<2:
        res="Bio"
    elif value<2.5:
        res="Commerce"
    else:
        res="Art"
        #Art
    return res

def Province(value):
    if value=="SP":
        res=2
    elif value=="CP":
        res=3
    elif value=="NW":
        res=4
    elif value=="UP":
        res=5
    elif value=="NP":
        res=6
    elif value=="EP":
        res=7
    elif value=="SP":
        res=8
    elif value=="NC":
        res=9
    else:
        res=1
        
    return res

def sub(value):
    if value=="Combined_Maths":
        res=1
    elif value=="Chemistry":
        res=2
    elif value=="Biology":
        res=3
    elif value=="Physics":
        res=4
        
    return res

def al(value):
    if value=="2023":
        res=1
    elif value=="2024":
        res=2
    elif value=="2025":
        res=3
        
    return res

def res_value(value):
    if value<1:
        res="Charitha Disanayaka"
    elif value<2:
        res="Thissa Jananayaka"
    elif value<3:
        res="Mahesh Senanayaka"
    elif value<4:
        res="Mujahith Sharif"
    elif value<5:
        res="Madhushanka Ambagahakumura"
    elif value<6:
        res="Ravindra Bandara"
    elif value<7:
        res="Fathima Zainab"
    elif value<8:
        res="Bagya Heththiarachchi"
    elif value<9:
        res="Ziyath Ahamed"
    elif value<10:
        res="Sameera Jayaweera"
    elif value<11:
        res="Kusal Kudaligama"
    elif value<12:
        res="Asela Ranasinghe"
    elif value<13:
        res="Kasun Devinda"
    elif value<14:
        res="Eranga Avinath"
    elif value<15:
        res="Chinthana Weerakon"
    elif value<16:
        res="Gihan Jayasundara"
    elif value<17:
        res="Janaka Abewardana"
    elif value<18:
        res="Wijeya Widanapathirana"
    elif value<19:
        res="Kelum Senanayaka"
    elif value<20:
        res="Neeth Jayasundara"
    elif value<21:
        res="Janaka Bandara"
    elif value<22:
        res="lijas ahmed"
    elif value<23:
        res="ljas ahmed"
    elif value<24:
        res="Gihan Chamindu"
        
    return res

app = Flask(__name__)

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response
@app.route('/bot', methods=['POST'])
def bot():

    json_data = request.get_json()

    result = al_model.predict([[int(subject_result(json_data['msg_text'].split(" ")[5])),int(subject_result(json_data['msg_text'].split(" ")[8])),int(subject_result(json_data['msg_text'].split(" ")[11])),int(subject_result(json_data['msg_text'].split(" ")[14])),int(subject_result(json_data['msg_text'].split(" ")[17])),int(subject_result(json_data['msg_text'].split(" ")[20])),int(subject_result(json_data['msg_text'].split(" ")[23])),int(subject_result(json_data['msg_text'].split(" ")[26])),int(subject_result(json_data['msg_text'].split(" ")[29]))]])
    print(result)


    json_d = json.dumps({"predict":str(set_result(result)),"success":"true"})

    return json_d

@app.route('/bot_class', methods=['POST'])
def bot_class():

    json_data = request.get_json()

    print(json_data['msg_text'].split(" ")[4])
    result = class_model.predict([[int(sub(json_data['msg_text'].split(" ")[4])),int(Province(json_data['msg_text'].split(" ")[7])),int(al(json_data['msg_text'].split(" ")[11]))]])
    print(result)


    json_d = json.dumps({"predict":str(res_value(result)),"success":"true"})

    return json_d

if __name__ == '__main__':
	app.run(host="127.0.0.1", port=1111)
