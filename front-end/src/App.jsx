import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Patients from './components/Patients'
import AddPatient from './components/AddPatient'
import OnePatient from './components/OnePatient';

function App() {

  const [patients,setPatients]=useState([])
  const [patient,SetPatient]=useState({})
  const [view,setView]=useState("allPatients")

  useEffect(()=> fetchData(),[])

  function fetchData(){
    axios.get("http://localhost:5000/api/patient/all")
    .then(resp=>{
      console.log(resp.data)
      setPatients(resp.data)
    }) 
    .catch((error) => {
      console.log(error);
    });
  }


  function deletePatient(id){
    axios.delete(`http://localhost:5000/api/patient/${id}`)
    .then(result=>console.log(result))
    window.location.reload()
  }

  function changeView(patient,view){
    setView(view)
    SetPatient(patient)
  }
  
  function renderView(){
    if (view==="allPatients"){
      return <Patients patients={patients} callback={deletePatient} callback3={changeView}/>
    }
    else if (view==="AddPatient"){
      return <AddPatient/>
    }
    else return <OnePatient patient={patient} callback={changeView}/>
    
}
    return (       
      <div>
          <h1 id="title">Doctor's Patient Management</h1>
        <nav className ="nav">
              <div id='div2'>
                    <div onClick={() =>changeView(null,"allPatients")}            >
                      <h3>Patients</h3> 
                    </div>
              </div>
            
              <div id='div1' > 
                    <div onClick={() => { changeView(null, "AddPatient") }}>
                        <h3>Add a new patient</h3>
                    </div>
              </div>
           
        </nav>
          {renderView()}
          
      </div>

  
    );
  }

  


export default App;