import pandas as pd
import numpy as np
import pickle
import requests
import shutil
from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
import json
import random

model = pickle.load(open("personality_model.dat", "rb"))
timetable = pickle.load(open("timetable_model.dat", "rb"))

app = Flask(__name__)

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response
@app.route('/Personality_predict', methods=['POST'])
def Personality_predict():

    json_data = request.get_json()

    predictedvalue = model.predict(pd.DataFrame([[int(json_data['ext1']),int(json_data['ext2']),int(json_data['ext3']),int(json_data['ext4']),int(json_data['ext5']),int(json_data['ext6']),int(json_data['ext7']),int(json_data['ext8']),int(json_data['ext9']),int(json_data['ext10']),
                                                  int(json_data['est1']),int(json_data['est2']),int(json_data['est3']),int(json_data['est4']),int(json_data['est5']),int(json_data['est6']),int(json_data['est7']),int(json_data['est8']),int(json_data['est9']),int(json_data['est10']),
                                                  int(json_data['agr1']),int(json_data['agr2']),int(json_data['agr3']),int(json_data['agr4']),int(json_data['agr5']),int(json_data['agr6']),int(json_data['agr7']),int(json_data['agr8']),int(json_data['agr9']),int(json_data['agr10']),
                                                  int(json_data['csn1']),int(json_data['csn2']),int(json_data['csn3']),int(json_data['csn4']),int(json_data['csn5']),int(json_data['csn6']),int(json_data['csn7']),int(json_data['csn8']),int(json_data['csn9']),int(json_data['csn10']),
                                                  int(json_data['opn1']),int(json_data['opn2']),int(json_data['opn3']),int(json_data['opn4']),int(json_data['opn5']),int(json_data['opn6']),int(json_data['opn7']),int(json_data['opn8']),int(json_data['opn9']),int(json_data['opn10'])]], columns=['ext1','ext2','ext3','ext4','ext5','ext6','ext7','ext8','ext9','ext10','est1','est2','est3','est4','est5','est6','est7','est8','est9','est10','agr1','agr2','agr3','agr4','agr5','agr6','agr7','agr8','agr9','agr10','csn1','csn2','csn3','csn4','csn5','csn6','csn7','csn8','csn9','csn10','opn1','opn2','opn3','opn4','opn5','opn6','opn7','opn8','opn9','opn10']))
    print(predictedvalue)


    json_d = json.dumps({"predict":str(int(predictedvalue[0])),"success":"true"})

    return json_d


@app.route('/timetable_predict', methods=['POST'])
def timetable_predict():

    json_data = request.get_json()
    if(int(json_data['subject'])==0):
      subject = [0, 1, 2]
    else:
      subject = [3, 1, 2]

    mo01s = int(random.choice(subject))
    mo1 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),mo01s,0,0,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    mo02s = int(random.choice(subject))
    mo2 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),mo02s,1,0,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    mo03s = int(random.choice(subject))
    mo3 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),mo03s,2,0,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    mo08s = int(random.choice(subject))
    mo8 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),mo08s,7,0,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    mo09s = int(random.choice(subject))
    mo9 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),mo09s,8,0,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    mo10s = int(random.choice(subject))
    mo10 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),mo10s,9,0,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    mo11s = int(random.choice(subject))
    mo11 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),mo11s,10,0,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    mo12s = int(random.choice(subject))
    mo12 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),mo12s,11,0,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    
    tu01s = int(random.choice(subject))
    tu1 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),tu01s,0,1,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    tu02s = int(random.choice(subject))
    tu2 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),tu02s,1,1,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    tu03s = int(random.choice(subject))
    tu3 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),tu03s,2,1,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    tu08s = int(random.choice(subject))
    tu8 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),tu08s,7,1,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    tu09s = int(random.choice(subject))
    tu9 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),tu09s,8,1,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    tu10s = int(random.choice(subject))
    tu10 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),tu10s,9,1,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    tu11s = int(random.choice(subject))
    tu11 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),tu11s,10,1,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    tu12s = int(random.choice(subject))
    tu12 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),tu12s,11,1,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    
    we01s = int(random.choice(subject))
    we1 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),we01s,0,2,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    we02s = int(random.choice(subject))
    we2 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),we02s,1,2,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    we03s = int(random.choice(subject))
    we3 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),we03s,2,2,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    we08s = int(random.choice(subject))
    we8 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),we08s,7,2,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    we09s = int(random.choice(subject))
    we9 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),we09s,8,2,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    we10s = int(random.choice(subject))
    we10 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),we10s,9,2,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    we11s = int(random.choice(subject))
    we11 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),we11s,10,2,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    we12s = int(random.choice(subject))
    we12 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),we12s,11,2,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    
    th01s = int(random.choice(subject))
    th1 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),th01s,0,3,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    th02s = int(random.choice(subject))
    th2 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),th02s,1,3,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    th03s = int(random.choice(subject))
    th3 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),th03s,2,3,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    th08s = int(random.choice(subject))
    th8 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),th08s,7,3,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    th09s = int(random.choice(subject))
    th9 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),th09s,8,3,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    th10s = int(random.choice(subject))
    th10 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),th10s,9,3,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    th11s = int(random.choice(subject))
    th11 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),th11s,10,3,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    th12s = int(random.choice(subject))
    th12 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),th12s,11,3,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    
    fr01s = int(random.choice(subject))
    fr1 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),fr01s,0,4,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    fr02s = int(random.choice(subject))
    fr2 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),fr02s,1,4,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    fr03s = int(random.choice(subject))
    fr3 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),fr03s,2,4,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    fr08s = int(random.choice(subject))
    fr8 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),fr08s,7,4,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    fr09s = int(random.choice(subject))
    fr9 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),fr09s,8,4,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    fr10s = int(random.choice(subject))
    fr10 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),fr10s,9,4,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    fr11s = int(random.choice(subject))
    fr11 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),fr11s,10,4,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    fr12s = int(random.choice(subject))
    fr12 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),fr12s,11,4,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    
    sa01s = int(random.choice(subject))
    sa1 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),sa01s,0,5,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    sa02s = int(random.choice(subject))
    sa2 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),sa02s,1,5,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    sa03s = int(random.choice(subject))
    sa3 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),sa03s,2,5,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    sa04s = int(random.choice(subject))
    sa4 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),sa04s,3,5,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    sa05s = int(random.choice(subject))
    sa5 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),sa05s,4,5,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    sa06s = int(random.choice(subject))
    sa6 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),sa06s,5,5,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    sa07s = int(random.choice(subject))
    sa7 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),sa07s,6,5,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    sa08s = int(random.choice(subject))
    sa8 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),sa08s,7,5,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    sa09s = int(random.choice(subject))
    sa9 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),sa09s,8,5,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    sa10s = int(random.choice(subject))
    sa10 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),sa10s,9,5,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    sa11s = int(random.choice(subject))
    sa11 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),sa11s,10,5,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    sa12s = int(random.choice(subject))
    sa12 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),sa12s,11,5,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    
    su01s = int(random.choice(subject))
    su1 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),su01s,0,6,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    su02s = int(random.choice(subject))
    su2 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),su02s,1,6,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    su03s = int(random.choice(subject))
    su3 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),su03s,2,6,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    su04s = int(random.choice(subject))
    su4 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),su04s,3,6,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    su05s = int(random.choice(subject))
    su5 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),su05s,4,6,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    su06s = int(random.choice(subject))
    su6 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),su06s,5,6,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    su07s = int(random.choice(subject))
    su7 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),su07s,6,6,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    su08s = int(random.choice(subject))
    su8 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),su08s,7,6,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    su09s = int(random.choice(subject))
    su9 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),su09s,8,6,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    su10s = int(random.choice(subject))
    su10 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),su10s,9,6,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    su11s = int(random.choice(subject))
    su11 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),su11s,10,6,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))
    su12s = int(random.choice(subject))
    su12 = timetable.predict(pd.DataFrame([[int(json_data['personality']),int(json_data['gender']),int(json_data['age']),su12s,11,6,int(json_data['city'])]], columns=['personality','gender','age','Subject','time slot','day','City']))

    json_d = json.dumps({"mo1":str(int(mo1[0])),"mo2":str(int(mo2[0])),"mo3":str(int(mo3[0])),"mo4":"School Time","mo5":"School Time","mo6":"School Time","mo7":"School Time","mo8":str(int(mo8[0])),"mo9":str(int(mo9[0])),"mo10":str(int(mo10[0])),"mo11":str(int(mo11[0])),"mo12":str(int(mo12[0])),
    "tu1":str(int(tu1[0])),"tu2":str(int(tu2[0])),"tu3":str(int(tu3[0])),"tu4":"School Time","tu5":"School Time","tu6":"School Time","tu7":"School Time","tu8":str(int(tu8[0])),"tu9":str(int(tu9[0])),"tu10":str(int(tu10[0])),"tu11":str(int(tu11[0])),"tu12":str(int(tu12[0])),
    "we1":str(int(we1[0])),"we2":str(int(we2[0])),"we3":str(int(we3[0])),"we4":"School Time","we5":"School Time","we6":"School Time","we7":"School Time","we8":str(int(we8[0])),"we9":str(int(we9[0])),"we10":str(int(we10[0])),"we11":str(int(we11[0])),"we12":str(int(we12[0])),
    "th1":str(int(th1[0])),"th2":str(int(th2[0])),"th3":str(int(th3[0])),"th4":"School Time","th5":"School Time","th6":"School Time","th7":"School Time","th8":str(int(th8[0])),"th9":str(int(th9[0])),"th10":str(int(th10[0])),"th11":str(int(th11[0])),"th12":str(int(th12[0])),
    "fr1":str(int(fr1[0])),"fr2":str(int(fr2[0])),"fr3":str(int(fr3[0])),"fr4":"School Time","fr5":"School Time","fr6":"School Time","fr7":"School Time","fr8":str(int(fr8[0])),"fr9":str(int(fr9[0])),"fr10":str(int(fr10[0])),"fr11":str(int(fr11[0])),"fr12":str(int(fr12[0])),
    "sa1":str(int(sa1[0])),"sa2":str(int(sa2[0])),"sa3":str(int(sa3[0])),"sa4":str(int(sa4[0])),"sa5":str(int(sa5[0])),"sa6":str(int(sa6[0])),"sa7":str(int(sa7[0])),"sa8":str(int(sa8[0])),"sa9":str(int(sa9[0])),"sa10":str(int(sa10[0])),"sa11":str(int(sa11[0])),"sa12":str(int(sa12[0])),
    "su1":str(int(su1[0])),"su2":str(int(su2[0])),"su3":str(int(su3[0])),"su4":str(int(su4[0])),"su5":str(int(su5[0])),"su6":str(int(su6[0])),"su7":str(int(su7[0])),"su8":str(int(su8[0])),"su9":str(int(su9[0])),"su10":str(int(su10[0])),"su11":str(int(su11[0])),"su12":str(int(su12[0])),
    "mo_sub_01":mo01s,"mo_sub_02":mo02s,"mo_sub_03":mo03s,"mo_sub_04":"School Time","mo_sub_05":"School Time","mo_sub_06":"School Time","mo_sub_07":"School Time","mo_sub_08":mo08s,"mo_sub_09":mo09s,"mo_sub_10":mo10s,"mo_sub_11":mo11s,"mo_sub_12":mo12s,
    "tu_sub_01":tu01s,"tu_sub_02":tu02s,"tu_sub_03":tu03s,"tu_sub_04":"School Time","tu_sub_05":"School Time","tu_sub_06":"School Time","tu_sub_07":"School Time","tu_sub_08":tu08s,"tu_sub_09":tu09s,"tu_sub_10":tu10s,"tu_sub_11":tu11s,"tu_sub_12":tu12s,
    "we_sub_01":we01s,"we_sub_02":we02s,"we_sub_03":we03s,"we_sub_04":"School Time","we_sub_05":"School Time","we_sub_06":"School Time","we_sub_07":"School Time","we_sub_08":we08s,"we_sub_09":we09s,"we_sub_10":we10s,"we_sub_11":we11s,"we_sub_12":we12s,
    "th_sub_01":th01s,"th_sub_02":th02s,"th_sub_03":th03s,"th_sub_04":"School Time","th_sub_05":"School Time","th_sub_06":"School Time","th_sub_07":"School Time","th_sub_08":th08s,"th_sub_09":th09s,"th_sub_10":th10s,"th_sub_11":th11s,"th_sub_12":th12s,
    "fr_sub_01":fr01s,"fr_sub_02":fr02s,"fr_sub_03":fr03s,"fr_sub_04":"School Time","fr_sub_05":"School Time","fr_sub_06":"School Time","fr_sub_07":"School Time","fr_sub_08":fr08s,"fr_sub_09":fr09s,"fr_sub_10":fr10s,"fr_sub_11":fr11s,"fr_sub_12":fr12s,
    "sa_sub_01":sa01s,"sa_sub_02":sa02s,"sa_sub_03":sa03s,"sa_sub_04":sa04s,"sa_sub_05":sa05s,"sa_sub_06":sa06s,"sa_sub_07":sa07s,"sa_sub_08":sa08s,"sa_sub_09":sa09s,"sa_sub_10":sa10s,"sa_sub_11":sa11s,"sa_sub_12":sa12s,
    "su_sub_01":su01s,"su_sub_02":su02s,"su_sub_03":su03s,"su_sub_04":su04s,"su_sub_05":su05s,"su_sub_06":su06s,"su_sub_07":su07s,"su_sub_08":su08s,"su_sub_09":su09s,"su_sub_10":su10s,"su_sub_11":su11s,"su_sub_12":su12s,"success":"true"})

    return json_d

if __name__ == '__main__':
	app.run(host="127.0.0.1", port=4444)
