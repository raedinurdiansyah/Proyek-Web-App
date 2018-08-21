import React, { Component } from 'react';
import { Route } from 'react-router-dom'

class LPdetail extends Component {
    render() {
        return (

            <div>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
                    <div className="container">
                        <a className="navbar-brand" href="#"> Carvis </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home
                            <span className="sr-only"> (current) </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> About </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> Services </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> Contact </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1 className="mt-5"> Rawat Mobilmu </h1>
                                <p> Merawat mobil sekarang jadi mudah dengan hadirnya CARVIS. Aplikasi payah pertama yang mencoba mensupport maintenance kendaraan pribadi kamu!</p>
                            </div>
                        </div>
                    </div>
                </section>
                



            </div>

        );
    }
}

export default LPdetail;