import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { idNama } from '../actions';
import { IDno } from '../actions';



class Header2 extends Component {



    render() {

        return (

            <header>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="/"> Carvis </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                </li>
                                <li className="nav-item">

                                </li>
                                <li className="nav-item">
                                    <Link to={`/Profilpage/${this.props.id}`} className="nav-link" href="#"> {this.props.nama} </Link>
                                </li>
                                <li className="nav-item">

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>

        )
    }

}


const mapStatetoProps = (state) => {
    const id = state.login
    const no = state.nomor
    const nama = state.nama

    return { id, no, nama }
}


export default connect(mapStatetoProps, { IDno, idNama })(Header2);