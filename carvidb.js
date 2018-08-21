const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');


const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'kolorbabe13',
    database : 'carvis'
});

db.connect();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extender: false }))
app.use(fileUpload());


//login


app.post('/login', function(req,res){
    db.query("select * from account where ? and ?",
        [
            {
                username: req.body.username
            },
            {
                password: req.body.password,
            }
        ],
            (err, result)=>{
                if(err) throw err;

                if (result.length > 0){
                    username = req.body.username
                    loginstatus = true;
                }
                else {
                    loginstatus = false
                    username = null
                    nama = null
                    no_telp = null
                }
                res.send({result, loginstatus})
                console.log(result)
            }
)
})

// signup

app.post('/register', function (req, res) {

    var data = {
        username: req.body.username,
        password: req.body.password,
        nama: req.body.name,
        no_telp: req.body.phone

    }
    var queryRegist = 'insert into account SET ?'
    db.query(queryRegist, data, (error, hasil) => {
        if (error) throw error
        console.log(hasil)
        res.send(hasil)
    }         
    )       
})


//kendaraan

app.post('/kendaraan', function (req,res) {

    var data2 = {
        brand: req.body.merek,
        tahun: req.body.tahun,
        tipekendaraan: req.body.tipekendaraan,
        kapasitasmesin: req.body.kapasitasmesin,
        model: req.body.model,
        jenismesin: req.body.jenismesin,
        transmisi: req.body.transmisi,
        jaraktempuh: req.body.jaraktempuh,
        account_id: req.body.akunid
    }
    var queryKendaraan = 'insert into kendaraan SET ?'
    db.query(queryKendaraan, data2, (error, hasil) => {
        if (error) throw error
        console.log(hasil)
        res.send(hasil)
    }
    )
})

app.get('/kendaraan', function (req, res) {

    var sql = `SELECT * FROM kendaraan`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    });
});

app.get('/kendaraan/:aidi', function(req,res){
    
    var sql = `SELECT * FROM kendaraan where account_id = '${req.params.aidi}'`;
    
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result)
    });
});


//table servis

app.post('/record', function (req, res) {

    var data3 = {
        tanggal: req.body.tanggal,
        servis: req.body.servis,
        biaya: req.body.biaya,
        bengkel: req.body.bengkel,
        invoice: req.body.invoice,
        no_mobil: req.body.nomorid
        
    }
    var queryRecord = 'insert into servicerecord SET ?'
    db.query(queryRecord, data3, (error, hasil) => {
        if (error) throw error
        console.log(hasil)
        res.send(hasil)
    }
    )
})

app.get('/record/:id', function (req, res) {

    var sql2 = `SELECT * FROM servicerecord where no_mobil = '${req.params.id}'`;

    db.query(sql2, (err, result) => {
        if (err) throw err
        console.log(result);
        res.send(result);
    });
});

app.post('/delete', function (req,res) {
    console.log(req.body.No)
    var dete = 
        {
            No:req.body.No
        }
    
  
    var deleted = `DELETE FROM servicerecord WHERE ?`;

    db.query(deleted, dete, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result)
    });
});


// upload

// app.post('/upload', function(req, res){
//     if (!req.files)
//         return res.status(400).send('No Files were uploaded');

//     let invoice = req.files.invoice;
//     sampleFile.mv()
// }





app.listen(3011, ()=>{
    console.log('Server aktif di @port 3011')
});


