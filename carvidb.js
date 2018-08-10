const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors')
const bodyParser = require('body-parser')



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
        jaraktempuh: req.body.jaraktempuh
    }
    var queryKendaraan = 'insert into kendaraan SET ?'
    db.query(queryKendaraan, data2, (error, hasil) => {
        if (error) throw error
        console.log(hasil)
        res.send(hasil)
    }
    )
})




app.listen(3011, ()=>{
    console.log('Server aktif di @port 3011')
});


