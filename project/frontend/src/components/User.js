import React from 'react';
import '../App.css';
import swal from 'sweetalert';

class User extends React.Component {

    constructor(props) {
        super(props);
    }

    universityClick(){
        if(localStorage.getItem('personality')){
            this.props.history.push('/university', { state: { personality: localStorage.getItem('personality')} })
        }else{
            swal("Error!", "personality data not found try again!", "error")
        }
    }

    render (){
        return (
            <div class="container">
            <div className="col-lg-12">
            <br/><br/>
            <div class="justify-content-center">
                    <h1>User Dashboard</h1>
                    <div class="x_scroll">
                    <hr/>
                        <div class="col-lg-12">
                            <a class="btn btn-outline-primary col-md-4" href="/personality" >Personality</a>
                        </div>
                        <br/>
                        <div class="col-lg-12">
                            <button class="btn btn-outline-primary col-md-4" onClick={()=>this.universityClick()} >Find Your University</button>
                        </div>
                        <br/>
                        <div class="col-lg-12">
                            <a class="btn btn-outline-primary col-md-4" href="/plan" >Plan</a>
                        </div>
                        <br/>
                        <div class="col-lg-12">
                            <a class="btn btn-outline-primary col-md-4" href="/bot" >Chat Bot</a>
                        </div>
                        <br/>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default User;
