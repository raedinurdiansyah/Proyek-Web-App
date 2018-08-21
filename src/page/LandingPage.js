import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Login from '../components/Login';
import LPdetail from '../components/LPdetail';
import css from './LandingPage.css';

class LandingPage extends Component {
    render() {
        return (
            <div className="LPage">
               
                <LPdetail/>
                <Login/>
                
            </div>
        );
    }
}

export default LandingPage;