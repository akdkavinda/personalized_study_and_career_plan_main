import React from 'react';
import '../App.css';
import swal from 'sweetalert';
import moment from "moment";
import axios from 'axios';

const initialState = {
    id: "",
    msg_text:"",
    msg_textError:"",
    data:'<div class="chat-container darker"><img src="./user.png" alt="My Avatar" class="right" /><p>Bot Keywords : AL | A/L | A/L Class | Find Class </p><span class="time-right">'+moment().format("DD-MM-YYYY hh:mm:ss")+'</span></div>',
}
class Bot extends React.Component {

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

    universityClick(){
        if(localStorage.getItem('personality')){
            this.props.history.push('/university', { state: { personality: localStorage.getItem('personality')} })
        }else{
            swal("Error!", "personality data not found try again!", "error")
        }
    }

    delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    sendMsg=async(e)=>{
        if(this.state.msg_text!==""){
            var text = this.state.msg_text
            var data=this.state.data+'<div class="chat-container darker"><img src="./user.png" alt="My Avatar" class="right" /><p>'+this.state.msg_text+'</p><span class="time-right">'+moment().format("DD-MM-YYYY hh:mm:ss")+'</span></div>'
            await this.setState({data:data,msg_textError:"",msg_text:""})
            await this.delay(1000);
            if(text.toLowerCase()=="hi"){
                var data=this.state.data+'<div class="chat-container"><img src="./bot.png" alt="Avatar" /><p>Hi!</p><span class="time-left">'+moment().format("DD-MM-YYYY hh:mm:ss")+'</span></div>'
                this.setState({data:data,msg_textError:"",msg_text:""})
            }else if(text.toLowerCase().includes("hello")){
                var data=this.state.data+'<div class="chat-container"><img src="./bot.png" alt="Avatar" /><p>Hello!</p><span class="time-left">'+moment().format("DD-MM-YYYY hh:mm:ss")+'</span></div>'
                this.setState({data:data,msg_textError:"",msg_text:""})
            }else if(text.toLowerCase().includes("my o/l results -")){
                
                const url = ' http://127.0.0.1:1111/bot';
                const data = JSON.stringify({ msg_text: text });
                console.log(data);
                await axios.post(url,data,{
                    headers: {'Content-Type': 'application/json'}
                })
                .then(res => {
                    console.log(res.data);
                    var data=this.state.data+'<div class="chat-container"><img src="./bot.png" alt="Avatar" /><p>Predicted Stream '+res.data.predict+'</p><span class="time-left">'+moment().format("DD-MM-YYYY hh:mm:ss")+'</span></div>'
                    this.setState({data:data,msg_textError:"",msg_text:""})
                })
                
            }else if(text.toLowerCase().includes("my data -")){
                
                const url = ' http://127.0.0.1:1111/bot_class';
                const data = JSON.stringify({ msg_text: text });
                console.log(data);
                await axios.post(url,data,{
                    headers: {'Content-Type': 'application/json'}
                })
                .then(res => {
                    console.log(res.data);
                    var data=this.state.data+'<div class="chat-container"><img src="./bot.png" alt="Avatar" /><p>Predicted Class '+res.data.predict+'</p><span class="time-left">'+moment().format("DD-MM-YYYY hh:mm:ss")+'</span></div>'
                    this.setState({data:data,msg_textError:"",msg_text:""})
                })
                
            }else if(text.toLowerCase().includes("a/l")||text.toLowerCase().includes("a l")||text.toLowerCase().includes("al")){
                var data=this.state.data+'<div class="chat-container"><img src="./bot.png" alt="Avatar" /><p>Type Your Results Using This Format EX.!</p><span class="time-left">'+moment().format("DD-MM-YYYY hh:mm:ss")+'</span></div>'+
                '<div class="chat-container"><img src="./bot.png" alt="Avatar" /><p>My O/L Results - Maths A | Science A | Buddhism A | Sinhala A | History A | English A | Option_1 A | Option_2 A | Option_3 A </p><span class="time-left">'+moment().format("DD-MM-YYYY hh:mm:ss")+'</span></div>'
                this.setState({data:data,msg_textError:"",msg_text:""})
            }else if(text.toLowerCase().includes("find class")||text.toLowerCase().includes("al class")||text.toLowerCase().includes("a/l class")){
                var data=this.state.data+'<div class="chat-container"><img src="./bot.png" alt="Avatar" /><p>Type Your Data Using This Format EX.!</p><span class="time-left">'+moment().format("DD-MM-YYYY hh:mm:ss")+'</span></div>'+
                '<div class="chat-container"><img src="./bot.png" alt="Avatar" /><p>My Data - Stream Combined_Maths | Province WP | AL Year 2024 </p><span class="time-left">'+moment().format("DD-MM-YYYY hh:mm:ss")+'</span></div>'
                this.setState({data:data,msg_textError:"",msg_text:""})
            }else{
                var data=this.state.data+'<div class="chat-container"><img src="./bot.png" alt="Avatar" /><p>Can Not Find Out!</p><span class="time-left">'+moment().format("DD-MM-YYYY hh:mm:ss")+'</span></div>'
                this.setState({data:data,msg_textError:"",msg_text:""})
            }
        }else{
            this.setState({msg_textError:"Text Required!"})
        }
    }

    render (){
        return (
            <div class="container">
            <div className="col-lg-12">
            <br/><br/>
            <div class="justify-content-center">
                    <h1>Chat Bot For Student</h1>
                    <div class="x_scroll">
                    <hr/>
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-header">Result</div>
                                <div class="card-body">
                                    <h2>Chat Messages</h2>
                                    <div class="chat_msg_1">
                                        <div id="chat_data">
                                            <div dangerouslySetInnerHTML={{ __html: this.state.data }} />
                                        </div>
                                    </div>
                                    
                                    
                                    <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right">Message</label>
                            <div class="col-md-6">
                                <textarea type="text" class="form-control" name="msg_text" step="0.0001" value={this.state.msg_text} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.msg_textError}</div>
                            </div>
                        </div>
                        <br/>
                                    <button id="click_start" type='submit' class="btn btn-primary" onClick={()=>this.sendMsg()} >Send</button>
                                    
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            <br/>
            </div>
        );
    }
}

export default Bot;
