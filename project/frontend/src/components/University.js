import React from 'react';
import '../App.css';
import swal from 'sweetalert';
import axios from 'axios';
import { Grid } from '@mui/material';

const initialState = {
    id: "",
    o_l_science: "",
    o_l_scienceError: "",
    o_l_maths: "",
    o_l_mathsError: "",
    o_l_english: "",
    o_l_englishError: "",
    a_l_maths: "",
    a_l_mathsError: "",
    a_l_bio: "",
    a_l_bioError: "",
    a_l_chemistry: "",
    a_l_chemistryError: "",
    a_l_physics: "",
    a_l_physicsError: "",
    district: "",
    districtError: "",
    zcore: "",
    zcoreError: "",
    o_l_science0: "",
    o_l_science0Error: "",
    accuracy: "",
    result: "",
    result_value: "",
}

class University extends React.Component {

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
        console.log(e.target.name)
        if(e.target.name=="a_l_bio"&&(e.target.value!="5")){
            this.setState({a_l_maths:"5"})
        }
        if(e.target.name=="a_l_maths"&&(e.target.value!="5")){
            this.setState({a_l_bio:"5"})
        }
    }

    onClear(){
        this.setState(initialState);
    }

    validation = async() => {

        let o_l_scienceError = "";
        let a_l_bioError = "";
        let a_l_mathsError = "";
        let o_l_mathsError = "";
        let o_l_englishError = "";
        let a_l_chemistryError = "";
        let zcoreError = "";
        let a_l_physicsError = "";
        let districtError = "";

        if(!this.state.a_l_physics){
            a_l_physicsError="Required!"
        }

        if(!this.state.zcore){
            zcoreError="Required!"
        }

        if(!this.state.a_l_chemistry){
            a_l_chemistryError="Required!"
        }

        if(!this.state.district){
            districtError="Required!"
        }

        if(!this.state.o_l_maths){
            o_l_mathsError="Required!"
        }

        if(!this.state.a_l_bio){
            a_l_bioError="Required!"
        }

        if(!this.state.a_l_maths){
            a_l_mathsError="Required!"
        }

        if(!this.state.o_l_science){
            o_l_scienceError="Required!"
        }

        if(!this.state.o_l_english){
            o_l_englishError="Required!"
        }

        if( o_l_scienceError || a_l_bioError || a_l_mathsError || o_l_mathsError || o_l_englishError || a_l_chemistryError || a_l_physicsError || districtError || zcoreError ){
            
            await this.setState({ o_l_scienceError , o_l_mathsError , o_l_englishError , a_l_mathsError , a_l_bioError , a_l_chemistryError , a_l_physicsError , districtError , zcoreError });
            
            return false;

        }else{

            await this.setState({ o_l_scienceError , o_l_mathsError , o_l_englishError , a_l_mathsError , a_l_bioError , a_l_chemistryError , a_l_physicsError , districtError , zcoreError });
            return true;
            
        }

    }

    SubmitForm = async(e) => {
        e.preventDefault();
        if(await this.validation()){
          console.log(this.state);
          const url = ' http://127.0.0.1:5555/university';
          const data = JSON.stringify({ personality:localStorage.getItem('personality'),o_l_science: this.state.o_l_science , o_l_english: this.state.o_l_english , a_l_bio: this.state.a_l_bio , o_l_maths: this.state.o_l_maths , a_l_maths: this.state.a_l_maths , a_l_chemistry: this.state.a_l_chemistry , a_l_physics: this.state.a_l_physics , district: this.state.district , zcore: this.state.zcore});
          console.log(data);
          await axios.post(url,data,{
              headers: {'Content-Type': 'application/json'}
          })
          .then(res => {
              console.log(res.data);
              this.setState(initialState)
              swal("Success!", "Prediction Successful!", "success")
              this.setState({
                result:res.data.predict,result_value:res.data.predict
            })
          })
        }
    }

    render (){
        return (
            <div class="container">
            <div className="col-lg-12">
            <br/><br/>
            <div class="justify-content-center">
                            <div class="card">
                    <h1>University Prediction</h1>
                    <div class="x_scroll">
                    <hr/>
                        <form autoComplete="off" onSubmit={this.SubmitForm}>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label text-md-right">O/L Science</label>
                            <div class="col-md-6">
                                <select formControlName="o_l_science" name="o_l_science" class="form-control" value={this.state.o_l_science} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">A</option>
                                    <option value="2">B</option>
                                    <option value="3">C</option>
                                    <option value="4">S</option>
                                    <option value="5">No Results</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.o_l_scienceError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label text-md-right">O/L Maths</label>
                            <div class="col-md-6">
                                <select formControlName="o_l_maths" name="o_l_maths" class="form-control" value={this.state.o_l_maths} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">A</option>
                                    <option value="2">B</option>
                                    <option value="3">C</option>
                                    <option value="4">S</option>
                                    <option value="5">No Results</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.o_l_mathsError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right">O/L English</label>
                            <div class="col-md-6">
                                <select formControlName="o_l_english" name="o_l_english" class="form-control" value={this.state.o_l_english} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">A</option>
                                    <option value="2">B</option>
                                    <option value="3">C</option>
                                    <option value="4">S</option>
                                    <option value="5">No Results</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.o_l_englishError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right">A/L Combine Maths</label>
                            <div class="col-md-6">
                                <select formControlName="a_l_maths" name="a_l_maths" class="form-control" value={this.state.a_l_maths} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">A</option>
                                    <option value="2">B</option>
                                    <option value="3">C</option>
                                    <option value="4">S</option>
                                    <option value="5">No Results</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.a_l_mathsError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right">A/L Bio</label>
                            <div class="col-md-6">
                                <select formControlName="a_l_bio" name="a_l_bio" class="form-control" value={this.state.a_l_bio} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">A</option>
                                    <option value="2">B</option>
                                    <option value="3">C</option>
                                    <option value="4">S</option>
                                    <option value="5">No Results</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.a_l_bioError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label text-md-right">A/L Chemistry</label>
                            <div class="col-md-6">
                                <select formControlName="a_l_chemistry" name="a_l_chemistry" class="form-control" value={this.state.a_l_chemistry} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">A</option>
                                    <option value="2">B</option>
                                    <option value="3">C</option>
                                    <option value="4">S</option>
                                    <option value="5">No Results</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.a_l_chemistryError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label text-md-right">A/L Physics</label>
                            <div class="col-md-6">
                                <select formControlName="a_l_physics" name="a_l_physics" class="form-control" value={this.state.a_l_physics} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">A</option>
                                    <option value="2">B</option>
                                    <option value="3">C</option>
                                    <option value="4">S</option>
                                    <option value="5">No Results</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.a_l_physicsError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right">District</label>
                            <div class="col-md-6">
                                <select formControlName="district" name="district" class="form-control" value={this.state.district} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Colombo</option>
                                    <option value="2">Rathnapura</option>
                                    <option value="3">Kandy</option>
                                    <option value="4">Galle</option>
                                    <option value="5">Gampaha</option>
                                    <option value="6">Matara</option>
                                    <option value="7">Kalutara</option>
                                    <option value="8">Hambantota</option>
                                    <option value="9">Monaragala</option>
                                    <option value="10">Badulla</option>
                                    <option value="11">Kagalle</option>
                                    <option value="12">Anuradhapura</option>
                                    <option value="13">Mullaitivu</option>
                                    <option value="14">Vavuniya</option>
                                    <option value="15">Trincomalee</option>
                                    <option value="16">Puttalam</option>
                                    <option value="17">Polonnaruwa</option>
                                    <option value="18">Nuwara Eliya</option>
                                    <option value="19">Mannar</option>
                                    <option value="20">Kilinochchi</option>
                                    <option value="21">Jaffna</option>
                                    <option value="22">Batticaloa</option>
                                    <option value="23">Matale</option>
                                    <option value="24">Ampara</option>
                                    <option value="25">Kurunegala</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.districtError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right">Z-core</label>
                            <div class="col-md-6">
                                <input type="number" class="form-control" name="zcore" step="0.0001" value={this.state.zcore} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.zcoreError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <div class="col-md-4"></div>
                            <div class="col-md-6">
                                <button type="submit" class="btn btn-primary">
                                    Submit
                                </button>
                                <br/>
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
                                <h2>University</h2>,
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                        
                                    <Grid item xs={12} sm={12} md={12} >
                                        <div class="card">
                                            <div class="card-body">
                                                <h3 class="card-title">{ this.state.result }</h3>
                                            </div>
                                        </div>
                                    </Grid>
                                
                                </Grid>
                            
                            ):(<div></div>)
                        }
                        </div>
                        <br/>
            </div>
        );
    }
}

export default University;
