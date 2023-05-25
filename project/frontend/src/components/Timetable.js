import React from 'react';
import '../App.css';
import swal from 'sweetalert';
import axios from 'axios';
import { Grid } from '@mui/material';

const initialState = {
    id: "",
    age: "",
    ageError: "",
    city: "",
    cityError: "",
    gender: "",
    genderError: "",
    stream: "",
    streamError: "",
    accuracy: "",
    predict: "",
    result: "",
    mo1:"",
    mo2:"",
    mo3:"",
    mo4:"",
    mo5:"",
    mo6:"",
    mo7:"",
    mo8:"",
    mo9:"",
    mo10:"",
    mo11:"",
    mo12:"",
    tu1:"",
    tu2:"",
    tu3:"",
    tu4:"",
    tu5:"",
    tu6:"",
    tu7:"",
    tu8:"",
    tu9:"",
    tu10:"",
    tu11:"",
    tu12:"",
    we1:"",
    we2:"",
    we3:"",
    we4:"",
    we5:"",
    we6:"",
    we7:"",
    we8:"",
    we9:"",
    we10:"",
    we11:"",
    we12:"",
    th1:"",
    th2:"",
    th3:"",
    th4:"",
    th5:"",
    th6:"",
    th7:"",
    th8:"",
    th9:"",
    th10:"",
    th11:"",
    th12:"",
    fr1:"",
    fr2:"",
    fr3:"",
    fr4:"",
    fr5:"",
    fr6:"",
    fr7:"",
    fr8:"",
    fr9:"",
    fr10:"",
    fr11:"",
    fr12:"",
    sa1:"",
    sa2:"",
    sa3:"",
    sa4:"",
    sa5:"",
    sa6:"",
    sa7:"",
    sa8:"",
    sa9:"",
    sa10:"",
    sa11:"",
    sa12:"",
    su1:"",
    su2:"",
    su3:"",
    su4:"",
    su5:"",
    su6:"",
    su7:"",
    su8:"",
    su9:"",
    su10:"",
    su11:"",
    su12:"",
    mo_sub_01:"",
    mo_sub_02:"",
    mo_sub_03:"",
    mo_sub_04:"",
    mo_sub_05:"",
    mo_sub_06:"",
    mo_sub_07:"",
    mo_sub_08:"",
    mo_sub_09:"",
    mo_sub_10:"",
    mo_sub_11:"",
    mo_sub_12:"",
    tu_sub_01:"",
    tu_sub_02:"",
    tu_sub_03:"",
    tu_sub_04:"",
    tu_sub_05:"",
    tu_sub_06:"",
    tu_sub_07:"",
    tu_sub_08:"",
    tu_sub_09:"",
    tu_sub_10:"",
    tu_sub_11:"",
    tu_sub_12:"",
    we_sub_01:"",
    we_sub_02:"",
    we_sub_03:"",
    we_sub_04:"",
    we_sub_05:"",
    we_sub_06:"",
    we_sub_07:"",
    we_sub_08:"",
    we_sub_09:"",
    we_sub_10:"",
    we_sub_11:"",
    we_sub_12:"",
    th_sub_01:"",
    th_sub_02:"",
    th_sub_03:"",
    th_sub_04:"",
    th_sub_05:"",
    th_sub_06:"",
    th_sub_07:"",
    th_sub_08:"",
    th_sub_09:"",
    th_sub_10:"",
    th_sub_11:"",
    th_sub_12:"",
    fr_sub_01:"",
    fr_sub_02:"",
    fr_sub_03:"",
    fr_sub_04:"",
    fr_sub_05:"",
    fr_sub_06:"",
    fr_sub_07:"",
    fr_sub_08:"",
    fr_sub_09:"",
    fr_sub_10:"",
    fr_sub_11:"",
    fr_sub_12:"",
    sa_sub_01:"",
    sa_sub_02:"",
    sa_sub_03:"",
    sa_sub_04:"",
    sa_sub_05:"",
    sa_sub_06:"",
    sa_sub_07:"",
    sa_sub_08:"",
    sa_sub_09:"",
    sa_sub_10:"",
    sa_sub_11:"",
    sa_sub_12:"",
    su_sub_01:"",
    su_sub_02:"",
    su_sub_03:"",
    su_sub_04:"",
    su_sub_05:"",
    su_sub_06:"",
    su_sub_07:"",
    su_sub_08:"",
    su_sub_09:"",
    su_sub_10:"",
    su_sub_11:"",
    su_sub_12:"",
}

class Timetable extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleChange = e => {
        const isCheckbox = e.target.type === "checkbox";
        this.setState({
            [e.target.name]: isCheckbox
                ? e.target.checked
                : e.target.value
        });
    }

    componentDidMount() {
        this.setState({predict:this.props.location.state.state.predict})
    }

    onClear(){
        this.setState(initialState);
    }

    validation = async() => {

        let genderError = "";
        let ageError = "";
        let cityError = "";
        let streamError = "";

        if(!this.state.age){
            ageError="Age Required!"
        }

        if(!this.state.gender){
            genderError="Gender Required!"
        }

        if(!this.state.city){
            cityError="City Required!"
        }

        if(!this.state.stream){
            streamError="Stream Required!"
        }

        if( genderError || ageError || cityError || streamError){
            
            await this.setState({ genderError , ageError , cityError , streamError});
            
            return false;

        }else{

            await this.setState({ genderError , ageError , cityError , streamError});
            return true;
            
        }

    }

    SubmitForm = async(e) => {
        e.preventDefault();
        if(await this.validation()){
          console.log(this.state);
        const url = ' http://127.0.0.1:4444/timetable_predict';
        const data = JSON.stringify({ gender: this.state.gender , city: this.state.city , age: this.state.age , personality: localStorage.getItem('personality') , subject: this.state.stream });
        console.log(data);
        await axios.post(url,data,{
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            console.log(res.data);
            this.setState(initialState)
            swal("Success!", "Prediction Successful!", "success")
            this.setState({
                result:res.data.success,
                mo1:res.data.mo1,
                mo2:res.data.mo2,
                mo3:res.data.mo3,
                mo4:res.data.mo4,
                mo5:res.data.mo5,
                mo6:res.data.mo6,
                mo7:res.data.mo7,
                mo8:res.data.mo8,
                mo9:res.data.mo9,
                mo10:res.data.mo10,
                mo11:res.data.mo11,
                mo12:res.data.mo12,
                tu1:res.data.tu1,
                tu2:res.data.tu2,
                tu3:res.data.tu3,
                tu4:res.data.tu4,
                tu5:res.data.tu5,
                tu6:res.data.tu6,
                tu7:res.data.tu7,
                tu8:res.data.tu8,
                tu9:res.data.tu9,
                tu10:res.data.tu10,
                tu11:res.data.tu11,
                tu12:res.data.tu12,
                we1:res.data.we1,
                we2:res.data.we2,
                we3:res.data.we3,
                we4:res.data.we4,
                we5:res.data.we5,
                we6:res.data.we6,
                we7:res.data.we7,
                we8:res.data.we8,
                we9:res.data.we9,
                we10:res.data.we10,
                we11:res.data.we11,
                we12:res.data.we12,
                th1:res.data.th1,
                th2:res.data.th2,
                th3:res.data.th3,
                th4:res.data.th4,
                th5:res.data.th5,
                th6:res.data.th6,
                th7:res.data.th7,
                th8:res.data.th8,
                th9:res.data.th9,
                th10:res.data.th10,
                th11:res.data.th11,
                th12:res.data.th12,
                fr1:res.data.fr1,
                fr2:res.data.fr2,
                fr3:res.data.fr3,
                fr4:res.data.fr4,
                fr5:res.data.fr5,
                fr6:res.data.fr6,
                fr7:res.data.fr7,
                fr8:res.data.fr8,
                fr9:res.data.fr9,
                fr10:res.data.fr10,
                fr11:res.data.fr11,
                fr12:res.data.fr12,
                sa1:res.data.sa1,
                sa2:res.data.sa2,
                sa3:res.data.sa3,
                sa4:res.data.sa4,
                sa5:res.data.sa5,
                sa6:res.data.sa6,
                sa7:res.data.sa7,
                sa8:res.data.sa8,
                sa9:res.data.sa9,
                sa10:res.data.sa10,
                sa11:res.data.sa11,
                sa12:res.data.sa12,
                su1:res.data.su1,
                su2:res.data.su2,
                su3:res.data.su3,
                su4:res.data.su4,
                su5:res.data.su5,
                su6:res.data.su6,
                su7:res.data.su7,
                su8:res.data.su8,
                su9:res.data.su9,
                su10:res.data.su10,
                su11:res.data.su11,
                su12:res.data.su12,
                mo_sub_01:this.subject(res.data.mo_sub_01),
                mo_sub_02:this.subject(res.data.mo_sub_02),
                mo_sub_03:this.subject(res.data.mo_sub_03),
                mo_sub_04:this.subject(res.data.mo_sub_04),
                mo_sub_05:this.subject(res.data.mo_sub_05),
                mo_sub_06:this.subject(res.data.mo_sub_06),
                mo_sub_07:this.subject(res.data.mo_sub_07),
                mo_sub_08:this.subject(res.data.mo_sub_08),
                mo_sub_09:this.subject(res.data.mo_sub_09),
                mo_sub_10:this.subject(res.data.mo_sub_10),
                mo_sub_11:this.subject(res.data.mo_sub_11),
                mo_sub_12:this.subject(res.data.mo_sub_12),
                tu_sub_01:this.subject(res.data.tu_sub_01),
                tu_sub_02:this.subject(res.data.tu_sub_02),
                tu_sub_03:this.subject(res.data.tu_sub_03),
                tu_sub_04:this.subject(res.data.tu_sub_04),
                tu_sub_05:this.subject(res.data.tu_sub_05),
                tu_sub_06:this.subject(res.data.tu_sub_06),
                tu_sub_07:this.subject(res.data.tu_sub_07),
                tu_sub_08:this.subject(res.data.tu_sub_08),
                tu_sub_09:this.subject(res.data.tu_sub_09),
                tu_sub_10:this.subject(res.data.tu_sub_10),
                tu_sub_11:this.subject(res.data.tu_sub_11),
                tu_sub_12:this.subject(res.data.tu_sub_12),
                we_sub_01:this.subject(res.data.we_sub_01),
                we_sub_02:this.subject(res.data.we_sub_02),
                we_sub_03:this.subject(res.data.we_sub_03),
                we_sub_04:this.subject(res.data.we_sub_04),
                we_sub_05:this.subject(res.data.we_sub_05),
                we_sub_06:this.subject(res.data.we_sub_06),
                we_sub_07:this.subject(res.data.we_sub_07),
                we_sub_08:this.subject(res.data.we_sub_08),
                we_sub_09:this.subject(res.data.we_sub_09),
                we_sub_10:this.subject(res.data.we_sub_10),
                we_sub_11:this.subject(res.data.we_sub_11),
                we_sub_12:this.subject(res.data.we_sub_12),
                th_sub_01:this.subject(res.data.th_sub_01),
                th_sub_02:this.subject(res.data.th_sub_02),
                th_sub_03:this.subject(res.data.th_sub_03),
                th_sub_04:this.subject(res.data.th_sub_04),
                th_sub_05:this.subject(res.data.th_sub_05),
                th_sub_06:this.subject(res.data.th_sub_06),
                th_sub_07:this.subject(res.data.th_sub_07),
                th_sub_08:this.subject(res.data.th_sub_08),
                th_sub_09:this.subject(res.data.th_sub_09),
                th_sub_10:this.subject(res.data.th_sub_10),
                th_sub_11:this.subject(res.data.th_sub_11),
                th_sub_12:this.subject(res.data.th_sub_12),
                fr_sub_01:this.subject(res.data.fr_sub_01),
                fr_sub_02:this.subject(res.data.fr_sub_02),
                fr_sub_03:this.subject(res.data.fr_sub_03),
                fr_sub_04:this.subject(res.data.fr_sub_04),
                fr_sub_05:this.subject(res.data.fr_sub_05),
                fr_sub_06:this.subject(res.data.fr_sub_06),
                fr_sub_07:this.subject(res.data.fr_sub_07),
                fr_sub_08:this.subject(res.data.fr_sub_08),
                fr_sub_09:this.subject(res.data.fr_sub_09),
                fr_sub_10:this.subject(res.data.fr_sub_10),
                fr_sub_11:this.subject(res.data.fr_sub_11),
                fr_sub_12:this.subject(res.data.fr_sub_12),
                sa_sub_01:this.subject(res.data.sa_sub_01),
                sa_sub_02:this.subject(res.data.sa_sub_02),
                sa_sub_03:this.subject(res.data.sa_sub_03),
                sa_sub_04:this.subject(res.data.sa_sub_04),
                sa_sub_05:this.subject(res.data.sa_sub_05),
                sa_sub_06:this.subject(res.data.sa_sub_06),
                sa_sub_07:this.subject(res.data.sa_sub_07),
                sa_sub_08:this.subject(res.data.sa_sub_08),
                sa_sub_09:this.subject(res.data.sa_sub_09),
                sa_sub_10:this.subject(res.data.sa_sub_10),
                sa_sub_11:this.subject(res.data.sa_sub_11),
                sa_sub_12:this.subject(res.data.sa_sub_12),
                su_sub_01:this.subject(res.data.su_sub_01),
                su_sub_02:this.subject(res.data.su_sub_02),
                su_sub_03:this.subject(res.data.su_sub_03),
                su_sub_04:this.subject(res.data.su_sub_04),
                su_sub_05:this.subject(res.data.su_sub_05),
                su_sub_06:this.subject(res.data.su_sub_06),
                su_sub_07:this.subject(res.data.su_sub_07),
                su_sub_08:this.subject(res.data.su_sub_08),
                su_sub_09:this.subject(res.data.su_sub_09),
                su_sub_10:this.subject(res.data.su_sub_10),
                su_sub_11:this.subject(res.data.su_sub_11),
                su_sub_12:this.subject(res.data.su_sub_12),
            })
        })
        }
    }

    subject(value){

        if(value=="0"){
            return "Combine Maths"
        }else if(value=="1"){
            return "Physics"
        }else if(value=="2"){
            return "Chemistry"
        }else if(value=="3"){
            return "Bio"
        }else{
            return "School Time"
        }

    }

    render (){
        return (
            <div class="container">
            <div className="col-lg-12">
            <br/><br/>
            <div class="justify-content-center">
                            <div class="card">
                    <h1>Timetable Prediction</h1>
                    <div class="x_scroll">
                    <hr/>
                        <form autoComplete="off" onSubmit={this.SubmitForm}>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label text-md-right">Stream</label>
                            <div class="col-md-6">
                                <select formControlName="stream" name="stream" class="form-control" value={this.state.stream} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="0">Maths</option>
                                    <option value="1">Bio</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.streamError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label text-md-right">Gender</label>
                            <div class="col-md-6">
                                <select formControlName="gender" name="gender" class="form-control" value={this.state.gender} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="0">Male</option>
                                    <option value="1">Female</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.genderError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label text-md-right">Age</label>
                            <div class="col-md-6">
                                <select formControlName="age" name="age" class="form-control" value={this.state.age} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option>15</option>
                                    <option>16</option>
                                    <option>17</option>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>20</option>
                                    <option>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>
                                    <option>25</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.ageError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right">City</label>
                            <div class="col-md-6">
                                <select formControlName="city" name="city" class="form-control" value={this.state.city} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="0">Gampaha</option>
                                    <option value="1">Matara</option>
                                    <option value="2">Galle</option>
                                    <option value="3">Kurunegala</option>
                                    <option value="4">Colombo</option>
                                    <option value="5">Anuradhapura</option>
                                    <option value="6">Kandy</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.cityError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <div class="col-md-4"></div>
                            <div class="col-md-6">
                                <button type="submit" class="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </div>
                        <br/><br/>   
                    </form>
                    </div>
                </div>
                </div>
                </div>
                <br/>
                            <div class="card">
                        {
                            (this.state.result!=="")?(
                                <hr/>,
                                <h2>Timetable</h2>,
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th>Timeslot</th>
                                        <th>Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednesday</th>
                                        <th>Thursday</th>
                                        <th>Friday</th>
                                        <th>Saturday</th>
                                        <th>Sunday</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>0 AM - 2 AM</td>
                                        <td>Subject : {this.state.mo_sub_01} | time : {this.state.mo1}</td>
                                        <td>Subject : {this.state.tu_sub_01} | time : {this.state.tu1}</td>
                                        <td>Subject : {this.state.we_sub_01} | time : {this.state.we1}</td>
                                        <td>Subject : {this.state.th_sub_01} | time : {this.state.th1}</td>
                                        <td>Subject : {this.state.fr_sub_01} | time : {this.state.fr1}</td>
                                        <td>Subject : {this.state.sa_sub_01} | time : {this.state.sa1}</td>
                                        <td>Subject : {this.state.su_sub_01} | time : {this.state.su1}</td>
                                    </tr>
                                    <tr>
                                        <td>2 AM - 4 AM</td>
                                        <td>Subject : {this.state.mo_sub_02} | time : {this.state.mo2}</td>
                                        <td>Subject : {this.state.tu_sub_02} | time : {this.state.tu2}</td>
                                        <td>Subject : {this.state.we_sub_02} | time : {this.state.we2}</td>
                                        <td>Subject : {this.state.th_sub_02} | time : {this.state.th2}</td>
                                        <td>Subject : {this.state.fr_sub_02} | time : {this.state.fr2}</td>
                                        <td>Subject : {this.state.sa_sub_02} | time : {this.state.sa2}</td>
                                        <td>Subject : {this.state.su_sub_02} | time : {this.state.su2}</td>
                                    </tr>
                                    <tr>
                                        <td>4 AM - 6 AM</td>
                                        <td>Subject : {this.state.mo_sub_03} | time : {this.state.mo3}</td>
                                        <td>Subject : {this.state.tu_sub_03} | time : {this.state.tu3}</td>
                                        <td>Subject : {this.state.we_sub_03} | time : {this.state.we3}</td>
                                        <td>Subject : {this.state.th_sub_03} | time : {this.state.th3}</td>
                                        <td>Subject : {this.state.fr_sub_03} | time : {this.state.fr3}</td>
                                        <td>Subject : {this.state.sa_sub_03} | time : {this.state.sa3}</td>
                                        <td>Subject : {this.state.su_sub_03} | time : {this.state.su3}</td>
                                    </tr>
                                    <tr>
                                        <td>6 AM - 8 AM</td>
                                        <td>Subject : {this.state.mo_sub_04} | time : {this.state.mo4}</td>
                                        <td>Subject : {this.state.tu_sub_04} | time : {this.state.tu4}</td>
                                        <td>Subject : {this.state.we_sub_04} | time : {this.state.we4}</td>
                                        <td>Subject : {this.state.th_sub_04} | time : {this.state.th4}</td>
                                        <td>Subject : {this.state.fr_sub_04} | time : {this.state.fr4}</td>
                                        <td>Subject : {this.state.sa_sub_04} | time : {this.state.sa4}</td>
                                        <td>Subject : {this.state.su_sub_04} | time : {this.state.su4}</td>
                                    </tr>
                                    <tr>
                                        <td>8 AM - 10 AM</td>
                                        <td>Subject : {this.state.mo_sub_05} | time : {this.state.mo5}</td>
                                        <td>Subject : {this.state.tu_sub_05} | time : {this.state.tu5}</td>
                                        <td>Subject : {this.state.we_sub_05} | time : {this.state.we5}</td>
                                        <td>Subject : {this.state.th_sub_05} | time : {this.state.th5}</td>
                                        <td>Subject : {this.state.fr_sub_05} | time : {this.state.fr5}</td>
                                        <td>Subject : {this.state.sa_sub_05} | time : {this.state.sa5}</td>
                                        <td>Subject : {this.state.su_sub_05} | time : {this.state.su5}</td>
                                    </tr>
                                    <tr>
                                        <td>10 AM - 12 PM</td>
                                        <td>Subject : {this.state.mo_sub_06} | time : {this.state.mo6}</td>
                                        <td>Subject : {this.state.tu_sub_06} | time : {this.state.tu6}</td>
                                        <td>Subject : {this.state.we_sub_06} | time : {this.state.we6}</td>
                                        <td>Subject : {this.state.th_sub_06} | time : {this.state.th6}</td>
                                        <td>Subject : {this.state.fr_sub_06} | time : {this.state.fr6}</td>
                                        <td>Subject : {this.state.sa_sub_06} | time : {this.state.sa6}</td>
                                        <td>Subject : {this.state.su_sub_06} | time : {this.state.su6}</td>
                                    </tr>
                                    <tr>
                                        <td>12 PM - 2 PM</td>
                                        <td>Subject : {this.state.mo_sub_07} | time : {this.state.mo7}</td>
                                        <td>Subject : {this.state.tu_sub_07} | time : {this.state.tu7}</td>
                                        <td>Subject : {this.state.we_sub_07} | time : {this.state.we7}</td>
                                        <td>Subject : {this.state.th_sub_07} | time : {this.state.th7}</td>
                                        <td>Subject : {this.state.fr_sub_07} | time : {this.state.fr7}</td>
                                        <td>Subject : {this.state.sa_sub_07} | time : {this.state.sa7}</td>
                                        <td>Subject : {this.state.su_sub_07} | time : {this.state.su7}</td>
                                    </tr>
                                    <tr>
                                        <td>2 PM - 4 PM</td>
                                        <td>Subject : {this.state.mo_sub_08} | time : {this.state.mo8}</td>
                                        <td>Subject : {this.state.tu_sub_08} | time : {this.state.tu8}</td>
                                        <td>Subject : {this.state.we_sub_08} | time : {this.state.we8}</td>
                                        <td>Subject : {this.state.th_sub_08} | time : {this.state.th8}</td>
                                        <td>Subject : {this.state.fr_sub_08} | time : {this.state.fr8}</td>
                                        <td>Subject : {this.state.sa_sub_08} | time : {this.state.sa8}</td>
                                        <td>Subject : {this.state.su_sub_08} | time : {this.state.su8}</td>
                                    </tr>
                                    <tr>
                                        <td>4 PM - 6 PM</td>
                                        <td>Subject : {this.state.mo_sub_09} | time : {this.state.mo9}</td>
                                        <td>Subject : {this.state.tu_sub_09} | time : {this.state.tu9}</td>
                                        <td>Subject : {this.state.we_sub_09} | time : {this.state.we9}</td>
                                        <td>Subject : {this.state.th_sub_09} | time : {this.state.th9}</td>
                                        <td>Subject : {this.state.fr_sub_09} | time : {this.state.fr9}</td>
                                        <td>Subject : {this.state.sa_sub_09} | time : {this.state.sa9}</td>
                                        <td>Subject : {this.state.su_sub_09} | time : {this.state.su9}</td>
                                    </tr>
                                    <tr>
                                        <td>6 PM - 8 PM</td>
                                        <td>Subject : {this.state.mo_sub_10} | time : {this.state.mo10}</td>
                                        <td>Subject : {this.state.tu_sub_10} | time : {this.state.tu10}</td>
                                        <td>Subject : {this.state.we_sub_10} | time : {this.state.we10}</td>
                                        <td>Subject : {this.state.th_sub_10} | time : {this.state.th10}</td>
                                        <td>Subject : {this.state.fr_sub_10} | time : {this.state.fr10}</td>
                                        <td>Subject : {this.state.sa_sub_10} | time : {this.state.sa10}</td>
                                        <td>Subject : {this.state.su_sub_10} | time : {this.state.su10}</td>
                                    </tr>
                                    <tr>
                                        <td>8 PM - 10 PM</td>
                                        <td>Subject : {this.state.mo_sub_11} | time : {this.state.mo11}</td>
                                        <td>Subject : {this.state.tu_sub_11} | time : {this.state.tu11}</td>
                                        <td>Subject : {this.state.we_sub_11} | time : {this.state.we11}</td>
                                        <td>Subject : {this.state.th_sub_11} | time : {this.state.th11}</td>
                                        <td>Subject : {this.state.fr_sub_11} | time : {this.state.fr11}</td>
                                        <td>Subject : {this.state.sa_sub_11} | time : {this.state.sa11}</td>
                                        <td>Subject : {this.state.su_sub_11} | time : {this.state.su11}</td>
                                    </tr>
                                    <tr>
                                        <td>10 PM - 12 PM</td>
                                        <td>Subject : {this.state.mo_sub_12} | time : {this.state.mo12}</td>
                                        <td>Subject : {this.state.tu_sub_12} | time : {this.state.tu12}</td>
                                        <td>Subject : {this.state.we_sub_12} | time : {this.state.we12}</td>
                                        <td>Subject : {this.state.th_sub_12} | time : {this.state.th12}</td>
                                        <td>Subject : {this.state.fr_sub_12} | time : {this.state.fr12}</td>
                                        <td>Subject : {this.state.sa_sub_12} | time : {this.state.sa12}</td>
                                        <td>Subject : {this.state.su_sub_12} | time : {this.state.su12}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            
                            ):(<div></div>)
                        }
                        </div>
                        <br/>
            </div>
        );
    }
}

export default Timetable;
