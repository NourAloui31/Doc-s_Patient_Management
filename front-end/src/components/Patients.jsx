import React from "react";

const Patients=(props)=>{

    return (
            <form id="form" >
              <table id="example" class="table table-striped table-bordered" cellspacing="" width="100%">
                    <thead>
                        <tr>
                            <th className="head">Name</th>
                            <th className="head">Email</th>
                            <th className="head">Address</th>
                            <th className="head" >Date of birth</th>
                            <th className="head">Phone Number</th>
                            <th className="head">Gender</th>
                            <th className="head">Update</th>
                            <th className="head">Delete</th>
                        </tr>
                    </thead>                      
                    <tbody>
                    {props.patients.map(patient=>{
                            return (    
                                      <tr>
                                      <td>{patient.Name}</td>
                                      <td>{patient.Email}</td>
                                      <td>{patient.Address}</td>
                                      <td>{patient.Date_Of_Birth}</td>
                                      <td>{patient.Phone}</td>
                                      <td>{patient.Gender}</td>
                                      <td><input
                                          type="button"
                                          value="Update"
                                          onClick={()=>{props.callback3(patient,"OnePatient")}}
                                          
                                        /></td>
                                      <td> <input
                                        type="button"
                                        value="Delete"
                                        onClick={()=>{props.callback(patient.ID)}}                            
                                      /></td>
                                        </tr>
                                    )})}                                  
                    </tbody>
                </table>
            </form>
      )  
}

export default Patients