import React from 'react';
import '../App.css';
import swal from 'sweetalert';
import axios from 'axios';
import { Grid } from '@mui/material';

const initialState = {
    id: "",
    ext1: "3",
    ext1Error: "",
    ext2: "3",
    ext2Error: "",
    ext3: "3",
    ext3Error: "",
    ext4: "3",
    ext4Error: "",
    ext5: "3",
    ext5Error: "",
    ext6: "3",
    ext6Error: "",
    ext7: "3",
    ext7Error: "",
    ext8: "3",
    ext8Error: "",
    ext9: "3",
    ext9Error: "",
    ext10: "3",
    ext10Error: "",
    est1: "3",
    est1Error: "",
    est2: "3",
    est2Error: "",
    est3: "3",
    est3Error: "",
    est4: "3",
    est4Error: "",
    est5: "3",
    est5Error: "",
    est6: "3",
    est6Error: "",
    est7: "3",
    est7Error: "",
    est8: "3",
    est8Error: "",
    est9: "3",
    est9Error: "",
    est10: "3",
    est10Error: "",
    agr1: "3",
    agr1Error: "",
    agr2: "3",
    agr2Error: "",
    agr3: "3",
    agr3Error: "",
    agr4: "3",
    agr4Error: "",
    agr5: "3",
    agr5Error: "",
    agr6: "3",
    agr6Error: "",
    agr7: "3",
    agr7Error: "",
    agr8: "3",
    agr8Error: "",
    agr9: "3",
    agr9Error: "",
    agr10: "3",
    agr10Error: "",
    csn1: "3",
    csn1Error: "",
    csn2: "3",
    csn2Error: "",
    csn3: "3",
    csn3Error: "",
    csn4: "3",
    csn4Error: "",
    csn5: "3",
    csn5Error: "",
    csn6: "3",
    csn6Error: "",
    csn7: "3",
    csn7Error: "",
    csn8: "3",
    csn8Error: "",
    csn9: "3",
    csn9Error: "",
    csn10: "3",
    csn10Error: "",
    opn1: "3",
    opn1Error: "",
    opn2: "3",
    opn2Error: "",
    opn3: "3",
    opn3Error: "",
    opn4: "3",
    opn4Error: "",
    opn5: "3",
    opn5Error: "",
    opn6: "3",
    opn6Error: "",
    opn7: "3",
    opn7Error: "",
    opn8: "3",
    opn8Error: "",
    opn9: "3",
    opn9Error: "",
    opn10: "3",
    opn10Error: "",
    accuracy: "",
    result: "",
    result_value: "",
}

class Personality extends React.Component {

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

    onClear(){
        this.setState(initialState);
    }

    validation = async() => {

        let ext1Error = "";
        let ext5Error = "";
        let ext4Error = "";
        let ext2Error = "";
        let ext3Error = "";
        let ext6Error = "";
        let ext10Error = "";
        let ext9Error = "";
        let ext7Error = "";
        let ext8Error = "";
        let est1Error = "";
        let est5Error = "";
        let est4Error = "";
        let est2Error = "";
        let est3Error = "";
        let est6Error = "";
        let est10Error = "";
        let est9Error = "";
        let est7Error = "";
        let est8Error = "";
        let agr1Error = "";
        let agr5Error = "";
        let agr4Error = "";
        let agr2Error = "";
        let agr3Error = "";
        let agr6Error = "";
        let agr10Error = "";
        let agr9Error = "";
        let agr7Error = "";
        let agr8Error = "";
        let csn1Error = "";
        let csn5Error = "";
        let csn4Error = "";
        let csn2Error = "";
        let csn3Error = "";
        let csn6Error = "";
        let csn10Error = "";
        let csn9Error = "";
        let csn7Error = "";
        let csn8Error = "";
        let opn1Error = "";
        let opn5Error = "";
        let opn4Error = "";
        let opn2Error = "";
        let opn3Error = "";
        let opn6Error = "";
        let opn10Error = "";
        let opn9Error = "";
        let opn7Error = "";
        let opn8Error = "";

        if(!this.state.opn7){
            opn7Error="Required!"
        }

        if(!this.state.opn10){
            opn10Error="Required!"
        }

        if(!this.state.opn9){
            opn9Error="Required!"
        }

        if(!this.state.opn6){
            opn6Error="Required!"
        }

        if(!this.state.opn8){
            opn8Error="Required!"
        }

        if(!this.state.opn2){
            opn2Error="Required!"
        }

        if(!this.state.opn5){
            opn5Error="Required!"
        }

        if(!this.state.opn4){
            opn4Error="Required!"
        }

        if(!this.state.opn1){
            opn1Error="Required!"
        }

        if(!this.state.opn3){
            opn3Error="Required!"
        }

        if(!this.state.csn7){
            csn7Error="Required!"
        }

        if(!this.state.csn10){
            csn10Error="Required!"
        }

        if(!this.state.csn9){
            csn9Error="Required!"
        }

        if(!this.state.csn6){
            csn6Error="Required!"
        }

        if(!this.state.csn8){
            csn8Error="Required!"
        }

        if(!this.state.csn2){
            csn2Error="Required!"
        }

        if(!this.state.csn5){
            csn5Error="Required!"
        }

        if(!this.state.csn4){
            csn4Error="Required!"
        }

        if(!this.state.csn1){
            csn1Error="Required!"
        }

        if(!this.state.csn3){
            csn3Error="Required!"
        }

        if(!this.state.agr7){
            agr7Error="Required!"
        }

        if(!this.state.agr10){
            agr10Error="Required!"
        }

        if(!this.state.agr9){
            agr9Error="Required!"
        }

        if(!this.state.agr6){
            agr6Error="Required!"
        }

        if(!this.state.agr8){
            agr8Error="Required!"
        }

        if(!this.state.agr2){
            agr2Error="Required!"
        }

        if(!this.state.agr5){
            agr5Error="Required!"
        }

        if(!this.state.agr4){
            agr4Error="Required!"
        }

        if(!this.state.agr1){
            agr1Error="Required!"
        }

        if(!this.state.agr3){
            agr3Error="Required!"
        }

        if(!this.state.ext7){
            ext7Error="Required!"
        }

        if(!this.state.ext10){
            ext10Error="Required!"
        }

        if(!this.state.ext9){
            ext9Error="Required!"
        }

        if(!this.state.ext6){
            ext6Error="Required!"
        }

        if(!this.state.ext8){
            ext8Error="Required!"
        }

        if(!this.state.ext2){
            ext2Error="Required!"
        }

        if(!this.state.ext5){
            ext5Error="Required!"
        }

        if(!this.state.ext4){
            ext4Error="Required!"
        }

        if(!this.state.ext1){
            ext1Error="Required!"
        }

        if(!this.state.ext3){
            ext3Error="Required!"
        }

        if(!this.state.est7){
            est7Error="Required!"
        }

        if(!this.state.est10){
            est10Error="Required!"
        }

        if(!this.state.est9){
            est9Error="Required!"
        }

        if(!this.state.est6){
            est6Error="Required!"
        }

        if(!this.state.est8){
            est8Error="Required!"
        }

        if(!this.state.est2){
            est2Error="Required!"
        }

        if(!this.state.est5){
            est5Error="Required!"
        }

        if(!this.state.est4){
            est4Error="Required!"
        }

        if(!this.state.est1){
            est1Error="Required!"
        }

        if(!this.state.est3){
            est3Error="Required!"
        }

        if( ext1Error || ext5Error || ext4Error || ext2Error || ext3Error || ext6Error || ext7Error || ext8Error || ext9Error || ext10Error ||  est1Error || est5Error || est4Error || est2Error || est3Error || est6Error || est7Error || est8Error || est9Error || est10Error ||  agr1Error || agr5Error || agr4Error || agr2Error || agr3Error || agr6Error || agr7Error || agr8Error || agr9Error || agr10Error ||  csn1Error || csn5Error || csn4Error || csn2Error || csn3Error || csn6Error || csn7Error || csn8Error || csn9Error || csn10Error ||  opn1Error || opn5Error || opn4Error || opn2Error || opn3Error || opn6Error || opn7Error || opn8Error || opn9Error || opn10Error ){
            
            await this.setState({ ext1Error , ext2Error , ext3Error , ext4Error , ext5Error , ext6Error , ext7Error , ext8Error , ext9Error , ext10Error ,  est1Error , est2Error , est3Error , est4Error , est5Error , est6Error , est7Error , est8Error , est9Error , est10Error ,  agr1Error , agr2Error , agr3Error , agr4Error , agr5Error , agr6Error , agr7Error , agr8Error , agr9Error , agr10Error ,  csn1Error , csn2Error , csn3Error , csn4Error , csn5Error , csn6Error , csn7Error , csn8Error , csn9Error , csn10Error ,  opn1Error , opn2Error , opn3Error , opn4Error , opn5Error , opn6Error , opn7Error , opn8Error , opn9Error , opn10Error });
            
            return false;

        }else{

            await this.setState({ ext1Error , ext2Error , ext3Error , ext4Error , ext5Error , ext6Error , ext7Error , ext8Error , ext9Error , ext10Error ,  est1Error , est2Error , est3Error , est4Error , est5Error , est6Error , est7Error , est8Error , est9Error , est10Error ,  agr1Error , agr2Error , agr3Error , agr4Error , agr5Error , agr6Error , agr7Error , agr8Error , agr9Error , agr10Error ,  csn1Error , csn2Error , csn3Error , csn4Error , csn5Error , csn6Error , csn7Error , csn8Error , csn9Error , csn10Error , opn1Error , opn2Error , opn3Error , opn4Error , opn5Error , opn6Error , opn7Error , opn8Error , opn9Error , opn10Error });
            return true;
            
        }

    }

    nextPage(){
        if(this.state.result_value!==""){
            this.props.history.push('/timetable', { state: { predict: this.state.result_value} })
        }else{
            swal("Error!", "personality data not found try again!", "error")
          }
    }

    SubmitForm = async(e) => {
        e.preventDefault();
        if(await this.validation()){
          console.log(this.state);
          const url = ' http://127.0.0.1:4444/Personality_predict';
          const data = JSON.stringify({ ext1: this.state.ext1 , ext3: this.state.ext3 , ext5: this.state.ext5 , ext2: this.state.ext2 , ext4: this.state.ext4 , ext6: this.state.ext6 , ext7: this.state.ext7 , ext8: this.state.ext8 , ext9: this.state.ext9 , ext10: this.state.ext10
                                    ,   est1: this.state.est1 , est3: this.state.est3 , est5: this.state.est5 , est2: this.state.est2 , est4: this.state.est4 , est6: this.state.est6 , est7: this.state.est7 , est8: this.state.est8 , est9: this.state.est9 , est10: this.state.est10
                                    ,   agr1: this.state.agr1 , agr3: this.state.agr3 , agr5: this.state.agr5 , agr2: this.state.agr2 , agr4: this.state.agr4 , agr6: this.state.agr6 , agr7: this.state.agr7 , agr8: this.state.agr8 , agr9: this.state.agr9 , agr10: this.state.agr10
                                    ,   csn1: this.state.csn1 , csn3: this.state.csn3 , csn5: this.state.csn5 , csn2: this.state.csn2 , csn4: this.state.csn4 , csn6: this.state.csn6 , csn7: this.state.csn7 , csn8: this.state.csn8 , csn9: this.state.csn9 , csn10: this.state.csn10
                                    ,   opn1: this.state.opn1 , opn3: this.state.opn3 , opn5: this.state.opn5 , opn2: this.state.opn2 , opn4: this.state.opn4 , opn6: this.state.opn6 , opn7: this.state.opn7 , opn8: this.state.opn8 , opn9: this.state.opn9 , opn10: this.state.opn10
        });
          console.log(data);
          await axios.post(url,data,{
              headers: {'Content-Type': 'application/json'}
          })
          .then(res => {
              console.log(res.data);
              this.setState(initialState)
              swal("Success!", "Prediction Successful!", "success")
              var value=""
              if(res.data.predict=="1"){
                value="Your Personality Is Extraversion"
                localStorage.setItem('personality',"3")
              }else if(res.data.predict=="2"){
                value="Your Personality Is Neuroticism"
                localStorage.setItem('personality',"5")
              }else if(res.data.predict=="3"){
                value="Your Personality Is Agreeable"
                localStorage.setItem('personality',"4")
              }else if(res.data.predict=="4"){
                value="Your Personality Is Conscientious"
                localStorage.setItem('personality',"2")
              }else{
                value="Your Personality Is Related to Open"
                localStorage.setItem('personality',"1")
              }
              this.setState({
                result:value,result_value:res.data.predict
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
                    <h1>Personality Prediction</h1>
                    <div class="x_scroll">
                    <hr/>
                        <form autoComplete="off" onSubmit={this.SubmitForm}>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label text-md-right">I am the life of the party.</label>
                            <div class="col-md-6">
                                <select formControlName="ext1" name="ext1" class="form-control" value={this.state.ext1} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.ext1Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label text-md-right">I don't talk a lot.</label>
                            <div class="col-md-6">
                                <select formControlName="ext2" name="ext2" class="form-control" value={this.state.ext2} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.ext2Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right">I feel comfortable around people.</label>
                            <div class="col-md-6">
                                <select formControlName="ext3" name="ext3" class="form-control" value={this.state.ext3} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.ext3Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right">I keep in the background.</label>
                            <div class="col-md-6">
                                <select formControlName="ext4" name="ext4" class="form-control" value={this.state.ext4} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.ext4Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right">I start conversations.</label>
                            <div class="col-md-6">
                                <select formControlName="ext5" name="ext5" class="form-control" value={this.state.ext5} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.ext5Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label text-md-right">I have little to say.</label>
                            <div class="col-md-6">
                                <select formControlName="ext6" name="ext6" class="form-control" value={this.state.ext6} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.ext6Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label text-md-right">I talk to a lot of different people at parties.</label>
                            <div class="col-md-6">
                                <select formControlName="ext7" name="ext7" class="form-control" value={this.state.ext7} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.ext7Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right">I don't like to draw attention to myself.</label>
                            <div class="col-md-6">
                                <select formControlName="ext8" name="ext8" class="form-control" value={this.state.ext8} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.ext8Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right">I don't mind being the center of attention.</label>
                            <div class="col-md-6">
                                <select formControlName="ext9" name="ext9" class="form-control" value={this.state.ext9} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.ext9Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right">I am quiet around strangers.</label>
                            <div class="col-md-6">
                                <select formControlName="ext10" name="ext10" class="form-control" value={this.state.ext10} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.ext10Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label test-md-right">I get stressed out easily.</label>
                            <div class="col-md-6">
                                <select formControlName="est1" name="est1" class="form-control" value={this.state.est1} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.est1Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label test-md-right">I am relaxed most of the time.</label>
                            <div class="col-md-6">
                                <select formControlName="est2" name="est2" class="form-control" value={this.state.est2} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.est2Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label test-md-right">I worry about things.</label>
                            <div class="col-md-6">
                                <select formControlName="est3" name="est3" class="form-control" value={this.state.est3} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.est3Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label test-md-right">I seldom feel blue.</label>
                            <div class="col-md-6">
                                <select formControlName="est4" name="est4" class="form-control" value={this.state.est4} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.est4Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label test-md-right">I am easily disturbed.</label>
                            <div class="col-md-6">
                                <select formControlName="est5" name="est5" class="form-control" value={this.state.est5} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.est5Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label test-md-right">I get upset easily.</label>
                            <div class="col-md-6">
                                <select formControlName="est6" name="est6" class="form-control" value={this.state.est6} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.est6Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label test-md-right">I change my mood a lot.</label>
                            <div class="col-md-6">
                                <select formControlName="est7" name="est7" class="form-control" value={this.state.est7} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.est7Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label test-md-right">I have frequent mood swings.</label>
                            <div class="col-md-6">
                                <select formControlName="est8" name="est8" class="form-control" value={this.state.est8} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.est8Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label test-md-right">I get irritated easily.</label>
                            <div class="col-md-6">
                                <select formControlName="est9" name="est9" class="form-control" value={this.state.est9} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.est9Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label test-md-right">I often feel blue.</label>
                            <div class="col-md-6">
                                <select formControlName="est10" name="est10" class="form-control" value={this.state.est10} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.est10Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label tagr-md-right">I feel little concern for others.</label>
                            <div class="col-md-6">
                                <select formControlName="agr1" name="agr1" class="form-control" value={this.state.agr1} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.agr1Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label tagr-md-right">I am interested in people.</label>
                            <div class="col-md-6">
                                <select formControlName="agr2" name="agr2" class="form-control" value={this.state.agr2} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.agr2Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label tagr-md-right">I insult people.</label>
                            <div class="col-md-6">
                                <select formControlName="agr3" name="agr3" class="form-control" value={this.state.agr3} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.agr3Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label tagr-md-right">I sympathize with others' feelings.</label>
                            <div class="col-md-6">
                                <select formControlName="agr4" name="agr4" class="form-control" value={this.state.agr4} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.agr4Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label tagr-md-right">I am not interested in other people's problems.</label>
                            <div class="col-md-6">
                                <select formControlName="agr5" name="agr5" class="form-control" value={this.state.agr5} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.agr5Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label tagr-md-right">I have a soft heart.</label>
                            <div class="col-md-6">
                                <select formControlName="agr6" name="agr6" class="form-control" value={this.state.agr6} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.agr6Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label tagr-md-right">I am not really interested in others.</label>
                            <div class="col-md-6">
                                <select formControlName="agr7" name="agr7" class="form-control" value={this.state.agr7} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.agr7Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label tagr-md-right">I take time out for others.</label>
                            <div class="col-md-6">
                                <select formControlName="agr8" name="agr8" class="form-control" value={this.state.agr8} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.agr8Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label tagr-md-right">I feel others' emotions.</label>
                            <div class="col-md-6">
                                <select formControlName="agr9" name="agr9" class="form-control" value={this.state.agr9} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.agr9Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label tagr-md-right">I make people feel at ease.</label>
                            <div class="col-md-6">
                                <select formControlName="agr10" name="agr10" class="form-control" value={this.state.agr10} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disagree</option>
                                    <option value="2">Slightly disagree</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly agree</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.agr10Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label tcsn-md-right">I am always prepared.</label>
                            <div class="col-md-6">
                                <select formControlName="csn1" name="csn1" class="form-control" value={this.state.csn1} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Discsnee</option>
                                    <option value="2">Slightly discsnee</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly csnee</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.csn1Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label tcsn-md-right">I leave my belongings around.</label>
                            <div class="col-md-6">
                                <select formControlName="csn2" name="csn2" class="form-control" value={this.state.csn2} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Discsnee</option>
                                    <option value="2">Slightly discsnee</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly csnee</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.csn2Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label tcsn-md-right">I pay attention to details.</label>
                            <div class="col-md-6">
                                <select formControlName="csn3" name="csn3" class="form-control" value={this.state.csn3} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Discsnee</option>
                                    <option value="2">Slightly discsnee</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly csnee</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.csn3Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label tcsn-md-right">I make a mess of things.</label>
                            <div class="col-md-6">
                                <select formControlName="csn4" name="csn4" class="form-control" value={this.state.csn4} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Discsnee</option>
                                    <option value="2">Slightly discsnee</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly csnee</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.csn4Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label tcsn-md-right">I get chores done right away.</label>
                            <div class="col-md-6">
                                <select formControlName="csn5" name="csn5" class="form-control" value={this.state.csn5} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Discsnee</option>
                                    <option value="2">Slightly discsnee</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly csnee</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.csn5Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label tcsn-md-right">I often forget to put things back in their proper place.</label>
                            <div class="col-md-6">
                                <select formControlName="csn6" name="csn6" class="form-control" value={this.state.csn6} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Discsnee</option>
                                    <option value="2">Slightly discsnee</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly csnee</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.csn6Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label tcsn-md-right">I like order.</label>
                            <div class="col-md-6">
                                <select formControlName="csn7" name="csn7" class="form-control" value={this.state.csn7} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Discsnee</option>
                                    <option value="2">Slightly discsnee</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly csnee</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.csn7Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label tcsn-md-right">I shirk my duties.</label>
                            <div class="col-md-6">
                                <select formControlName="csn8" name="csn8" class="form-control" value={this.state.csn8} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Discsnee</option>
                                    <option value="2">Slightly discsnee</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly csnee</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.csn8Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label tcsn-md-right">I follow a schedule.</label>
                            <div class="col-md-6">
                                <select formControlName="csn9" name="csn9" class="form-control" value={this.state.csn9} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Discsnee</option>
                                    <option value="2">Slightly discsnee</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly csnee</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.csn9Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label tcsn-md-right">I am exacting in my work.</label>
                            <div class="col-md-6">
                                <select formControlName="csn10" name="csn10" class="form-control" value={this.state.csn10} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Discsnee</option>
                                    <option value="2">Slightly discsnee</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly csnee</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.csn10Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label topn-md-right">I have a rich vocabulary.</label>
                            <div class="col-md-6">
                                <select formControlName="opn1" name="opn1" class="form-control" value={this.state.opn1} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disopnee</option>
                                    <option value="2">Slightly disopnee</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly opnee</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.opn1Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label topn-md-right">I have difficulty understanding abstract ideas.</label>
                            <div class="col-md-6">
                                <select formControlName="opn2" name="opn2" class="form-control" value={this.state.opn2} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disopnee</option>
                                    <option value="2">Slightly disopnee</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly opnee</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.opn2Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label topn-md-right">I have a vivid imagination.</label>
                            <div class="col-md-6">
                                <select formControlName="opn3" name="opn3" class="form-control" value={this.state.opn3} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disopnee</option>
                                    <option value="2">Slightly disopnee</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly opnee</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.opn3Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label topn-md-right">I am not interested in abstract ideas.</label>
                            <div class="col-md-6">
                                <select formControlName="opn4" name="opn4" class="form-control" value={this.state.opn4} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disopnee</option>
                                    <option value="2">Slightly disopnee</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly opnee</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.opn4Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label topn-md-right">I have excellent ideas.</label>
                            <div class="col-md-6">
                                <select formControlName="opn5" name="opn5" class="form-control" value={this.state.opn5} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disopnee</option>
                                    <option value="2">Slightly disopnee</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly opnee</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.opn5Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label topn-md-right">I do not have a good imagination.</label>
                            <div class="col-md-6">
                                <select formControlName="opn6" name="opn6" class="form-control" value={this.state.opn6} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disopnee</option>
                                    <option value="2">Slightly disopnee</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly opnee</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.opn6Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label topn-md-right">I am quick to understand things.</label>
                            <div class="col-md-6">
                                <select formControlName="opn7" name="opn7" class="form-control" value={this.state.opn7} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disopnee</option>
                                    <option value="2">Slightly disopnee</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly opnee</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.opn7Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label topn-md-right">I use difficult words.</label>
                            <div class="col-md-6">
                                <select formControlName="opn8" name="opn8" class="form-control" value={this.state.opn8} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disopnee</option>
                                    <option value="2">Slightly disopnee</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly opnee</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.opn8Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label topn-md-right">I spend time reflecting on things.</label>
                            <div class="col-md-6">
                                <select formControlName="opn9" name="opn9" class="form-control" value={this.state.opn9} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disopnee</option>
                                    <option value="2">Slightly disopnee</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly opnee</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.opn9Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label topn-md-right">I am full of ideas.</label>
                            <div class="col-md-6">
                                <select formControlName="opn10" name="opn10" class="form-control" value={this.state.opn10} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Disopnee</option>
                                    <option value="2">Slightly disopnee</option>
                                    <option value="3">Neutral</option>
                                    <option value="4">Slightly opnee</option>
                                    <option value="5">Agree</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.opn10Error}</div>
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
                    <br/>
                                <button class="btn btn-primary" onClick={()=>this.nextPage()}>
                                    Next
                                </button>
                    <br/>
                    </div>
                </div>
                </div>
                </div>
                <br/>
                            <div class="card">
                        {
                            (this.state.result!=="")?(
                                <hr/>,
                                <h2>Category Result</h2>,
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

export default Personality;
