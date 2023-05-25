import React from 'react';
import '../App.css';
import swal from 'sweetalert';
import axios from 'axios';
import { Grid } from '@mui/material';

const initialState = {
    id: "",
    cgpa:"",
    cgpaError: "",
    q1: "",
    q1Error: "",
    q2: "",
    q2Error: "",
    q3: "",
    q3Error: "",
    q4: "",
    q4Error: "",
    q5: "",
    q5Error: "",
    q6: "",
    q6Error: "",
    q7: "",
    q7Error: "",
    q8: "",
    q8Error: "",
    q9: "",
    q9Error: "",
    q10: "",
    q10Error: "",
    q11: "",
    q11Error: "",
    q12: "",
    q12Error: "",
    q13: "",
    q13Error: "",
    q14: "",
    q14Error: "",
    q15: "",
    q15Error: "",
    q16: "",
    q16Error: "",
    q17: "",
    q17Error: "",
    q18: "",
    q18Error: "",
    accuracy: "",
    result: "",
    result_value: "",
}

class Plan extends React.Component {

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

        let cgpaError = "";
        let q1Error = "";
        let q5Error = "";
        let q4Error = "";
        let q2Error = "";
        let q3Error = "";
        let q6Error = "";
        let q7Error = "";
        let q8Error = "";
        let q9Error = "";
        let q10Error = "";
        let q11Error = "";
        let q15Error = "";
        let q14Error = "";
        let q12Error = "";
        let q13Error = "";
        let q16Error = "";
        let q17Error = "";
        let q18Error = "";

        if(!this.state.cgpa){
            cgpaError="Required!"
        }

        if(!this.state.q10){
            q10Error="Required!"
        }

        if(!this.state.q9){
            q9Error="Required!"
        }

        if(!this.state.q6){
            q6Error="Required!"
        }

        if(!this.state.q8){
            q8Error="Required!"
        }

        if(!this.state.q2){
            q2Error="Required!"
        }

        if(!this.state.q5){
            q5Error="Required!"
        }

        if(!this.state.q4){
            q4Error="Required!"
        }

        if(!this.state.q1){
            q1Error="Required!"
        }

        if(!this.state.q3){
            q3Error="Required!"
        }

        if(!this.state.q17){
            q17Error="Required!"
        }

        if(!this.state.q16){
            q16Error="Required!"
        }

        if(!this.state.q18){
            q18Error="Required!"
        }

        if(!this.state.q12){
            q12Error="Required!"
        }

        if(!this.state.q15){
            q15Error="Required!"
        }

        if(!this.state.q14){
            q14Error="Required!"
        }

        if(!this.state.q11){
            q11Error="Required!"
        }

        if(!this.state.q13){
            q13Error="Required!"
        }

        if( cgpaError || q1Error || q5Error || q4Error || q2Error || q3Error || q6Error || q7Error || q8Error || q9Error || q10Error ||  q11Error || q15Error || q14Error || q12Error || q13Error || q16Error || q17Error || q18Error ){
            
            await this.setState({ cgpaError , q1Error , q2Error , q3Error , q4Error , q5Error , q6Error , q7Error , q8Error , q9Error , q10Error ,  q11Error , q12Error , q13Error , q14Error , q15Error , q16Error , q17Error , q18Error });
            
            return false;

        }else{

            await this.setState({ cgpaError , q1Error , q2Error , q3Error , q4Error , q5Error , q6Error , q7Error , q8Error , q9Error , q10Error ,  q11Error , q12Error , q13Error , q14Error , q15Error , q16Error , q17Error , q18Error });
            return true;
            
        }

    }

    SubmitForm = async(e) => {
        e.preventDefault();
        if(await this.validation()){
          console.log(this.state);
          const url = ' http://127.0.0.1:3333/plan';
          const data = JSON.stringify({ cgpa: this.state.cgpa , q1: this.state.q1 , q3: this.state.q3 , q5: this.state.q5 , q2: this.state.q2 , q4: this.state.q4 , q6: this.state.q6 , q7: this.state.q7 , q8: this.state.q8 , q9: this.state.q9 , q10: this.state.q10 , q11: this.state.q11 , q13: this.state.q13 , q15: this.state.q15 , q12: this.state.q12 , q14: this.state.q14 , q16: this.state.q16 , q17: this.state.q17 , q18: this.state.q18});
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
                    <h1>Plan Prediction</h1>
                    <div class="x_scroll">
                    <hr/>
                        <form autoComplete="off" onSubmit={this.SubmitForm}>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right">CGPA</label>
                            <div class="col-md-6">
                                <input type="number" class="form-control" name="cgpa" step="0.0001" value={this.state.cgpa} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.cgpaError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label text-md-right">Did you do webdev during college time ?</label>
                            <div class="col-md-6">
                                <select formControlName="q1" name="q1" class="form-control" value={this.state.q1} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.q1Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label text-md-right">Are you good at Data analysis ?</label>
                            <div class="col-md-6">
                                <select formControlName="q2" name="q2" class="form-control" value={this.state.q2} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.q2Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right">reading and writing skills</label>
                            <div class="col-md-6">
                                <select formControlName="q3" name="q3" class="form-control" value={this.state.q3} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.q3Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right">Are you a tech person ?</label>
                            <div class="col-md-6">
                                <select formControlName="q4" name="q4" class="form-control" value={this.state.q4} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.q4Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right">Were you in a non tech society ?</label>
                            <div class="col-md-6">
                                <select formControlName="q5" name="q5" class="form-control" value={this.state.q5} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.q5Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label text-md-right">Are you good at coding ?</label>
                            <div class="col-md-6">
                                <select formControlName="q6" name="q6" class="form-control" value={this.state.q6} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.q6Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label text-md-right">Have you developed mobile apps ?</label>
                            <div class="col-md-6">
                                <select formControlName="q7" name="q7" class="form-control" value={this.state.q7} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.q7Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right">Are you good at communication ?</label>
                            <div class="col-md-6">
                                <select formControlName="q8" name="q8" class="form-control" value={this.state.q8} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.q8Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right">Do you have specialization in security</label>
                            <div class="col-md-6">
                                <select formControlName="q9" name="q9" class="form-control" value={this.state.q9} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.q9Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right">Have you ever handled large databases ?</label>
                            <div class="col-md-6">
                                <select formControlName="q10" name="q10" class="form-control" value={this.state.q10} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.q10Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label test-md-right">Do you have knowlege of statistics and data science?</label>
                            <div class="col-md-6">
                                <select formControlName="q11" name="q11" class="form-control" value={this.state.q11} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.q11Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label test-md-right">Are you proficient in English ?</label>
                            <div class="col-md-6">
                                <select formControlName="q12" name="q12" class="form-control" value={this.state.q12} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.q12Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label test-md-right">Have you ever managed some event?</label>
                            <div class="col-md-6">
                                <select formControlName="q13" name="q13" class="form-control" value={this.state.q13} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.q13Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label test-md-right">Do you write technical blogs ?</label>
                            <div class="col-md-6">
                                <select formControlName="q14" name="q14" class="form-control" value={this.state.q14} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.q14Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label test-md-right">Are you into marketing ?</label>
                            <div class="col-md-6">
                                <select formControlName="q15" name="q15" class="form-control" value={this.state.q15} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.q15Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label test-md-right">Are you a ML expert ?</label>
                            <div class="col-md-6">
                                <select formControlName="q16" name="q16" class="form-control" value={this.state.q16} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.q16Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label test-md-right">Do you have a lot of connections ?</label>
                            <div class="col-md-6">
                                <select formControlName="q17" name="q17" class="form-control" value={this.state.q17} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.q17Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label test-md-right">Have you ever built live project ?</label>
                            <div class="col-md-6">
                                <select formControlName="q18" name="q18" class="form-control" value={this.state.q18} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.q18Error}</div>
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

export default Plan;
