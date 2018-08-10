import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';


class ProfilePage extends Component {

    submitdata(c) {
        axios.post('http://localhost:3011/kendaraan',
            {
                merek: c.merek.value,
                tahun: c.tahun.value,
                tipekendaraan: c.drivetype.value,
                kapasitasmesin: c.kapasitas.value,
                model: c.model.value,
                jenismesin: c.jenis.value,
                transmisi: c.transmisi.value,
                jaraktempuh: c.jarak.value
            }
        )
            .then((c) => {
                if (c.data.loginstatus === true) {
                    console.log(c.data)
                }
            })
    }

    render() {
        return (
            <div className="container-fluid">
                <header>
                </header>
                <div className="row">
                    <div className="col-lg-3 sidebar">
                        <div className="menu-sidebar">
                            <h3> CARVIS (PHOTO HERE)</h3>
                            <div className="navigasi-sidebar">
                                <ul>
                                    <li>
                                        <a href="#"> Tambah Kendaraan </a>
                                    </li>
                                    <li>
                                        <a href="#"> Menu Card Kendaraan </a>
                                    </li>
                                    <li>
                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                                            Open Modal
                                        </button>

                                        {/* modalnya disini */}
                                        <div className="modal fade" id="myModal">
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content">

                                                    <div className="modal-header">
                                                        <h4 className="modal-title"> Modal Heading </h4>
                                                        <button type="btn" className="close" data-dismiss="modal">&times;</button>
                                                    </div>

                                                    <div className="container-fluid modal-body">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <form action="/action_page.php">
                                                                    <div className="form-group">
                                                                        <label for="merek"> Vehicle Brand </label>
                                                                        <select name="cars" ref="merek" className="custom-select mb-3">
                                                                            <option selected> Merek Kendaraan </option>
                                                                            <option value="volvo"> Volvo </option>
                                                                            <option value="fiat"> Fiat </option>
                                                                            <option value="Audi" > Audi </option>
                                                                            <option value="bmw" > BMW </option>
                                                                            <option value="isuzu" > Isuzu </option>
                                                                            <option value="chevrolet"> Chevrolet </option>
                                                                            <option value="daihatsu"> Daihatsu </option>
                                                                            <option value="datsun"> Datsun </option>
                                                                            <option value="honda"> Honda </option>
                                                                            <option value="hyundai"> Hyundai </option>
                                                                            <option value="lexus"> Lexus </option>
                                                                            <option value="mazda"> Mazda </option>
                                                                            <option value="mercedesbenz"> Mercedes-Benz </option>
                                                                            <option value="suzuki"> Suzuki </option>
                                                                            <option value="toyota"> Toyota </option>
                                                                            <option value="vw"> Volkswagen </option>
                                                                        </select>
                                                                        <label for="tahun"> Year </label>
                                                                        <input type="number" className="form-control" id="tahun" ref="tahun" name="year" />
                                                                        <label for="tipepenggerak"> Drive type </label>
                                                                        <select name="drivetype" ref="drivetype" className="custom-select mb-3">
                                                                            <option selected > Sistem Penggerak </option>
                                                                            <option value="rwd"> Rear-Wheel Drive (RWD) </option>
                                                                            <option value="fwd"> Front-Wheel Drive (FWD) </option>
                                                                            <option value="4wd"> Four Wheel Drive (4WD) </option>
                                                                            <option value="awd"> All-Wheel Drive (AWD) </option>
                                                                        </select>
                                                                        <label for="kapasitasmesin"> Engine Size (cc)</label>
                                                                        <input type="number" className="form-control" id="kapasitasmesin" ref="kapasitas" name="enginesize" />
                                                                    </div>
                                                                </form>

                                                            </div>
                                                            <div className="col-md-6">
                                                                <form action="/action_page.php">
                                                                    <div className="form-group">
                                                                        <label for="model"> Model </label>
                                                                        <input type="text" className="form-control" id="model" ref="model" name="model" />
                                                                        <label for="jenismesin"> Engine Type </label>
                                                                        <select name="enginetype" ref="jenis" className="custom-select mb-3">
                                                                            <option selected> Jenis Mesin </option>
                                                                            <option value="bensin"> Gasoline (Bensin)</option>
                                                                            <option value="diesel"> Solar (Diesel) </option>
                                                                        </select>
                                                                        <label for="transmisi"> Transmission </label>
                                                                        <select name="transmission" ref="transmisi" className="custom-select mb-3">
                                                                            <option selected> Transmisi </option>
                                                                            <option value="AT"> Automatic Transmission (AT) </option>
                                                                            <option value="MT"> Manual Transmission (MT) </option>
                                                                            <option value="CVT"> Continuously Variable Transmission (CVT) </option>
                                                                        </select>
                                                                        <label for="jaraktempuh"> Mileage (km)</label>
                                                                        <input type="number" className="form-control" id="jaraktempuh" ref="jarak" name="enginesize" />
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-danger" onClick={() => { this.submitdata(this.refs) }} data-dismiss="modal">
                                                            Create
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-9 isi">
                        <h1> DISINI NANTI KELUAR TABEL FORM & HASIL SETSTATE BERUPA CARD </h1>
                    </div>
                </div>
                <footer>
                </footer>
            </div>
        );
    }
}


const mapStatetoProps = (state) => {
    const id = state.login
    return {id}
}


export default connect (mapStatetoProps)(ProfilePage);