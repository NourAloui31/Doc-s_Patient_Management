import axios from "axios";
import React, { useState } from "react";

const AddPatient=()=>{
    const[name,setName]=useState("")
    const[date,setDate]=useState("")
    const[gender,setGender]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
    const[address,setAddress]=useState("")

    const add=()=>{
        axios.post("http://localhost:5000/api/patient",{
            Name:name,
            Date_Of_Birth:date, 
            Gender:gender,
            Email:email,
            Phone:phone, 
            Address:address
            }).then((result)=>console.log(result))
            window.location.reload()
    }

      return (     
                <div class="form-content">
                    <div class="form-items">
                        <h3>Add New Patient</h3>
                        <form>

                            <div class="col-md-12">
                               <input class="form-control" type="text" placeholder="Full Name" defaultValue={name}
                                   onChange={(e)=>setName(e.target.value)}  required/>
                            </div>
                            <div class="col-md-12">
                               <input class="form-control" type="text" placeholder="Male/Female"   defaultValue={gender}
                                  onChange={(e)=>setGender(e.target.value)} required/>
                           </div>  
                           <div class="col-md-12">
                                 <input class="form-control" type="text" defaultValue={date}   
                                 onChange={(e)=>setDate(e.target.value)} placeholder="Date of birth" required/>
                            </div>  

                            <div class="col-md-12">
                               <input class="form-control" type="text" placeholder="Phone Number"  defaultValue={phone}
                                 onChange={(e)=>setPhone(e.target.value)} required/>
                           </div>
                           <div class="col-md-12">
                               <input class="form-control" type="text"  placeholder="Address"   defaultValue={address}
                                 onChange={(e)=>setAddress(e.target.value)} required/>
                           </div>                          

                            <div class="col-md-12">
                                <input class="form-control" type="email" placeholder="E-mail Address"    defaultValue={email}
                                 onChange={(e)=>setEmail(e.target.value)} required/>
                            </div>
                                                                                             
                            <br/>

                            <div class="form-button mt-3">
                                <button id="submit" type="submit"  class="btn btn-primary"  onClick={add}>Add</button>
                            </div>
                        </form>
                    </div>
                </div>



      
      )  
}

export default AddPatient