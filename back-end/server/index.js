const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const connect=require('../dataBase/index');


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/patient/all',(req,res)=>{
   const sql=`SELECT * FROM patients`
   connect.query(sql,function(err,rslt){
    if (err) res.status(500).send(err)
    else res.json(rslt)
   })
})

// app.get('/api/patient/search/:name',(req,res)=>{
//   const name=req.params.name
//   const sql=`SELECT * FROM PATIENTS WHERE Name like "%${name}%"`
//   connect.query(sql,function(err,rslt){
//     if (err) res.status(500).send(err)
//     else res.json(rslt)
//   })
// })

app.get('/api/patient/:id',(req,res)=>{
  const id=req.params.id
  const sql=`SELECT * FROM PATIENTS WHERE ID=${id}`
  connect.query(sql,function(err,rslt){
    if (err) res.status(500).send(err)
    else res.json(rslt)
  })
})


app.post('/api/patient',(req,res)=>{
  const newPatient=req.body
  const sql=`INSERT INTO patients SET Name="${newPatient.Name}", Date_Of_Birth="${newPatient.Date_Of_Birth}", Gender="${newPatient.Gender}", email="${newPatient.Email}",Phone="${newPatient.Phone}", Address="${newPatient.Address}"`
  connect.query(sql,function(err,rslt){
    if (err) res.status(500).send(err)
    else res.json(rslt)
  })
})

app.put('/api/patient/:id',(req,res)=>{
  const id=req.params.id
  const patient=req.body
  const sql=`UPDATE PATIENTS SET Name="${patient.Name}", Date_Of_Birth="${patient.Date_Of_Birth}", Gender="${patient.Gender}", email="${patient.Email}",Phone="${patient.Phone}", Address="${patient.Address}" WHERE ID=${id}`
  connect.query(sql,function(err,rslt){
    if (err) res.status(500).send(err)
    else res.json(rslt)
  })
})

app.delete('/api/patient/:id', (req,res)=>{
  const id=req.params.id
  const sql=`DELETE FROM PATIENTS WHERE ID=${id}`
  connect.query(sql,function(err,rslt){
    if (err) res.status(500).send(err)
    else res.json(rslt)
  })
})

app.listen(port, () => {
  console.log(`DPM listening at http://localhost:${port}`);
});