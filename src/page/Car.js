import React, { Component } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { IDno } from '../actions';
import { idNama } from '../actions';
import { Link } from 'react-router-dom';



class Car extends Component {

    constructor() {
        super();
        this.state = {
                        dataku : [],


        };
    }

    componentDidMount(){
        {this.Table()}
    }

    dapetno(e) {
        console.log('masuk gk ?')
        console.log(e)

        axios.post('http://localhost:3011/delete',
    {
        No: e
    })
    .then((x)=>{
        this.Table()
    })
    };

    Table() {
        axios.get(`http://localhost:3011/record/${this.props.no}`)
            .then((ambilData) => {
                this.setState({
                    dataku: ambilData.data
                })
            })
    }


    submittable(t) {
        axios.post('http://localhost:3011/record',
            {
                tanggal: t.tanggal.value,
                servis: t.aktivitas.value,
                biaya: t.biaya.value,
                bengkel: t.bengkel.value,
                nomorid: this.refs.nomorid.value
            })

            .then((t) => {
                {this.Table();}
            })
            }

            

    render() {

        const ngetable = this.state.dataku.map((item, index)=>{
            var coba = item.no;
            console.log('cekiceki', coba)
            return (
                <tr key={index}>
                    <td> {item.No} </td>
                    <td> {item.tanggal} </td>
                    <td> {item.servis} </td>
                    <td> {item.biaya} </td>
                    <td> {item.bengkel} </td>
                    <td> <input type="file"/> </td>
                    <td> <center> <button type="button" className="close" onClick={() => this.dapetno(item.No)} aria-label="Close" style={{color:'white'}}> <span aria-hidden="true">&times;</span>
                    </button> </center></td>
                </tr>
            )
        })
        return (
            <div>
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
              

                <div className="container menuatas" style={{marginTop:'80px'}}>
                    <div className="row">
                        <div className="col-md-3 gambar">
                            <center>
                                <img src="../img/mobilprofil.jpg" class="img-circle" alt="mobilprofil"/>
                            </center>
                        </div>
                        
                        <div className="col-md-9 detailmenu">
                            <h4> nama </h4>
                            <p> status status status status status status </p>
                            
                            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#myModal2">
                                Input Aktivitas
                            </button>

{/* modal disini */}
                            <div className="modal fade" id="myModal2">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">

                                        <div className="modal-header">
                                            <h4 className="modal-title"> Service Activity </h4>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>

                                        <div className="modal-body">
                                                <div className="form-group">
                                                    <label for="tgl"> Tanggal: </label>
                                                    <input type="date" className="form-control" name="tanggal" ref="tanggal"/>
                                                    <label for="servis"> Aktivitas Servis: </label>
                                                    <input type="text" className="form-control" name="servis" ref="aktivitas"/>
                                                    <label for="price"> Biaya: </label>
                                                    <input type="number" className="form-control" name="biaya" ref="biaya"/>
                                                    <label for="bengkel"> Nama Bengkel: </label>
                                                    <input type="text" className="form-control" name="bengkel" ref="bengkel"/>
                                                    <input value={this.props.no} ref="nomorid" type="hidden" />
                                                </div>

                                        </div>

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" onClick={() => { this.submittable(this.refs) }} data-dismiss="modal"> Simpan </button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                     
                          
                        </div>
                    </div>
                </div>



                <div className="container">
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th> No </th>
                                <th> Tanggal </th>
                                <th> Jenis Servis </th>
                                <th> Biaya </th>
                                <th> Bengkel </th>
                                <th> Upload Bon </th>
                                <th> Delete Data </th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {/* <tr>
                                <td> 2 </td>
                                <td> 13 JAN 2013 </td>
                                <td> GANTI SETIR </td>
                                <td> 500000 </td>
                                <td> BABE GARAGE </td>
                                <td> (GAMBAR) </td>
                                <td> (X) </td>
                            </tr>
                            <tr>
                                <td> 3 </td>
                                <td> 19 JAN 2013 </td>
                                <td> KETOK BEMPER </td>
                                <td> 200000 </td>
                                <td> GONJAROT </td>
                                <td> (GAMBAR) </td>
                                <td> (X) </td>
                            </tr> */}
                            {ngetable}
                        </tbody>
                    </table>
                
                            

                </div>




            </div>
        )
    };
}


const mapStatetoProps = (state) => {
    const id = state.login
    const no = state.nomor
    const nama = state.nama

    return { id, no, nama }
}


export default connect(mapStatetoProps, { IDno, idNama })(Car);
