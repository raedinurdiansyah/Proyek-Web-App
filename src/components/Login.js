import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

class App extends Component {

    state = {
        redirect_profile: false
    };
    
    login(x){
        axios.post('http://localhost:3011/login',
        {
            username: x.user.value,
            password: x.pwd.value
        }
        )

        .then((x)=>{
            if (x.data.account_id > 0){
                var logid = x.data.account_id
                this.props.idLogin(logid)
                this.setState ({redirect_profile : true})
            }
            else {
                alert ('gagal login')
            }
        })
        .catch ((error) => {console.log(error)})
    }

    daftar(y){
        axios.post('http://localhost:3011/register',
        {
            username: y.user2.value,
            password: y.pwd2.value,
            name    : y.namalengkap.value,
            phone   : y.telp.value
        }
        
        ) 

        .then((y)=>{
            if (y.data.loginstatus === true){
                console.log(y.data)
            }
        })
    }


    
    
    render() {

        const { redirect_profile } = this.state;
        if (redirect_profile) {
            this.setState({ redirect_profile: false})
            return (< Redirect to='/' />)
        }
        return (

<div>


{/* <div className="container" />
    <div id="loginbox" style={{ marginTop: '50px' }} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <div className="panel panel-info" >
            <div className="panel-heading">
                <div className="panel-title">Sign In</div>
                <div style={{ float: 'right', fontSize: '80%', position: 'relative', top: '-10px' }}><a href="#">Forgot password?</a></div>
            </div>

            <div style={{ paddingTop: '30px' }} className="panel-body" >

                <div style={{ display: 'none' }} id="login-alert" className="alert alert-danger col-sm-12"></div>

                <form id="loginform" className="form-horizontal" role="form">

                    <div style={{ marginBottom: '25px' }} className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                            <input id="login-username" type="text" className="form-control" name="username" ref="user" placeholder="Username..." />

                    </div>

                    <div style={{ marginBottom: '25px' }} className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                        <input id="login-password" type="password" className="form-control" name="password" ref="pwd" placeholder="password" />
                    </div> */}



                    {/* <div className="input-group">
                        <div className="checkbox">
                            <label>
                                <input id="login-remember" type="checkbox" name="remember" value="1" /> Remember me
                                        </label>
                        </div>
                    </div> */}


                    {/* <div style={{ marginTop: '10px' }} className="form-group">

                        <div className="col-sm-12 controls">
                            <a id="btn-login" href="#" onClick={()=>{this.login(this.refs)}} className="btn btn-success">Login  </a>

                        </div>
                    </div>


                    <div className="form-group">
                        <div className="col-md-12 control">
                            <div style={{ borderTop: '1px solid#888', paddingTop: '15px', fontSize: '85%' }} >
                                Don't have an account!
                                        <a href="#" onClick="$('#loginbox').hide(); $('#signupbox').show()">
                                    Sign Up Here
                                        </a>
                            </div>
                        </div>
                    </div>
                </form>



            </div>
        </div>
    </div> */}

                <div className="container-fluid col-lg-6">

                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#register">Register</a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div id="login" className="container tab-pane active"> <br />
                            <h5> Sign In </h5>
                            <input type="text" className="form-control" ref="user" placeholder="Username..." /> <br />
                            <input type="password" className="form-control" ref="pwd" placeholder="Password..." /> <br />
                            <button type="button" className="btn btn-info" onClick={() => { this.login(this.refs) }}> Login </button>

                        </div>
                        <div id="register" className="container tab-pane fade"> <br />
                            <h5> Sign Up </h5>
                            <input type="text" className="form-control" ref="user2" placeholder="Username..." /> <br />
                            <input type="password" className="form-control" ref="pwd2" placeholder="Password..." /> <br />
                            <input type="text" className="form-control" ref="namalengkap" placeholder="Nama Lengkap..." /> <br />
                            <input type="number" className="form-control" ref="telp" placeholder="No HP..." /> <br />
                            <button type="button" className="btn btn-info" onClick={() => { this.daftar(this.refs) }}> Vroom Vroom Bitch! </button>
                        </div>
                    </div>
                </div>

</div>
     );
    }
}

export default App;