import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Login from '../components/Login'
import LPdetail from '../components/LPdetail'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <LPdetail/>
                <Login/>
            </div>
        );
    }
}

export default LandingPage;