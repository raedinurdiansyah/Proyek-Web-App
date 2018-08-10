import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
import css from './App.css';
import axios from 'axios';
import ProfilePage from './page/ProfilePage';

// import LandingPage from './page/LandingPage'

class App extends Component {


    

  render() {
    return (
      // <div>
      //   <Route exact path="/" component={LandingPage}/>
      // </div>
        
        <div>
            <Route exact path="/" component={ProfilePage}/>
        </div>


    //   <div id="wrapper">

    //     <div id="sidebar-wrapper">
    //         <ul className="sidebar-nav">
    //             <li className="sidebar-brand">
    //                 <a href="#">
    //                     Start ButStrap
    //                 </a>
    //             </li>
    //             <li>
    //                 <a href="#">Dashboard</a>
    //             </li>
    //             <li>
    //                 <a href="#">Shortcuts</a>
    //             </li>
    //             <li>
    //                 <a href="#">Overview</a>
    //             </li>
    //         </ul>
    //       </div>

    //       <div id="page-content-wrapper">
    //           <div className="container-fluid">
    //               <h1> Simple Sidebar </h1>
    //               <p> this template has a responsive menu toggling bro disini paling susah</p>
    //               <p> pokoknya disini lo harus bisa gimana munculin dari isi form abis berhasil jdi card</p>
    //               <a href="menu-toggle" className="btn btn-secondary" id="menu-toggle">Toggle Menu</a>
    //           </div>
    //       </div>

    //       </div>



    );
  }
}

export default App;
