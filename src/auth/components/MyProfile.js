import React from 'react'
import { Link } from 'react-router-dom'
import profile from './profile.png'

const MyProfile = ({ user }) => (
  
<div className="container">
<br /> 
<br /> 
<div className="row">
<div className="col-12">
<div className="card">
    
<div class="card-body">
                        <div className="card-title mb-4">
                            <div className="d-flex justify-content-start">
                                <div >
                                    <img src={profile} width="150px" height="150"/>
                                    
                                </div>
                                <div className="userData ml-5">
                                  <br /> 
                                  <br /> 
                                    <h2 className="d-block">{user.name}</h2>
                                
                                </div>
                                <div className="ml-auto">
                                    <input type="button" className="btn btn-primary d-none" id="btnDiscard" value="Discard Changes" />
                                </div>
                            </div>
                        </div>


                                        <div className="row">
                                            <div className="col-sm-3 col-md-2 col-5">
                                                <label font-weight="bold">Email : </label>
                                            </div>
                                            <div className="col-md-8 col-6">
                                            {user.email}
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-sm-3 col-md-2 col-5">
                                                <label font-weight="bold">Age : </label>
                                            </div>
                                            <div className="col-md-8 col-6">
                                            {user.age}
                                            </div>
                                        </div>


                                            <div className="row">
                                            <div className="col-sm-3 col-md-2 col-5">
                                                <label font-weight="bold">Relation : </label>
                                            </div>
                                            <div className="col-md-8 col-6">
                                            {user.relation}
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-sm-3 col-md-2 col-5">
                                                <label font-weight="bold">Phone : </label>
                                            </div>
                                            <div className="col-md-8 col-6">
                                            {user.phone}
                                            </div>
                                        </div> 


      </div>
      </div>
      </div>
      </div>

  </div> 
  
)
export default MyProfile