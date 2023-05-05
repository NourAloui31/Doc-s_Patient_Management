import React, {  useState } from 'react';
import axios from 'axios';

const OnePatient = (props) => {

  // const [id, setId] = useState(null)
  const [name, setName] = useState(props.patient.Name)
  const [date, setDate] = useState(props.patient.Date_Of_Birth)
  const [gender, setGender] = useState(props.patient.Gender)
  const [email, setEmail] = useState(props.patient.Email)
  const [phone, setPhone] = useState(props.patient.Phone)
  const [address, setAddress] = useState(props.patient.Address)


  function updatePatient(body) {
    axios.put(`http://localhost:5000/api/patient/${props.patient.ID}`,body)
      .then(result => console.log(result))
      window.location.reload()
  }
  
  return (
    <div class="form-content">
    <div class="form-items">
        <h3>Update Patient</h3>
        <form>

            <div class="col-md-12">
               <input class="form-control" type="text"
          defaultValue={props.patient.Name}
          onChange={(e) => setName(e.target.value)}/>
          </div>
          <div class="col-md-12">
              <input class="form-control" type="text" 
          defaultValue={props.patient.Gender}
         onChange={(e)=>setGender(e.target.value)}/>
          </div>
          <div class="col-md-12">
               <input class="form-control" type="text" 
          defaultValue={props.patient.Date_Of_Birth}
          onChange={(e) => setDate(e.target.value)} />
          </div>
          <div class="col-md-12">
              <input class="form-control" type="text" 
          defaultValue={props.patient.Phone}
          onChange={(e) => setPhone(e.target.value)}/>
          </div>
          <div class="col-md-12">
              <input class="form-control" type="text" 
          defaultValue={props.patient.Address}  
          onChange={(e)=>setAddress(e.target.value)}/>
          </div>
          <div class="col-md-12">
              <input class="form-control" type="email" 
          defaultValue={props.patient.Email}
          onChange={(e) => setEmail(e.target.value)} />
          </div>               
           <br/>
           <div class="form-button mt-3">
               <button id="submit" type="submit"  class="btn btn-primary"  
                        onClick={() => {
                          updatePatient({
                          Name :name,
                          Date_Of_Birth:date,
                          Gender:gender,
                          Email:email,
                          Phone:phone,
                          Address:address

                          })
                        }}>Update</button>
                        </div>
                    </form>
                </div>
              </div>


  )
}

export default OnePatient