import React, { useState, useContext, useEffect,Fragment } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../../Components/Navbar/Navbar'

class Patient extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            
        }
    }

    render()
    {
        return(
            <Fragment>
                <Navbar/>

                <div className="container-fluid">
                    
                    <div className="container px-md-5">
                        <h5 className="mx-5 pb-4" style={{paddingTop: 50}}> Profil du patient</h5>

                        <div className="row justify-content-center mx-4">
                            <div className="col-sm-12 col-lg-6">
                            <div class="card col mb-3" style={{borderRadius: 20, 
                                backgroundColor: '#1E87FD', borderWidth: 0, color: 'white'}}>
                                <Link className="" to="/profil/situation-sociale" style={{color: 'white',paddingBottom:100}}>
                                    <div class="card-body">
                                        <h6>Situation sociale</h6>
                                        <br></br><br></br><br></br><br></br>
                                    </div>
                                </Link>
                            </div>
                            </div>

                            <div className="col-sm-12 col-lg-6">
                            <div class="card col mb-3" style={{borderRadius: 20, 
                                backgroundColor: '#1E87FD', borderWidth: 0, color: 'white'}}>
                                <Link className="" to="/profil/facteurs-de-risques" style={{color: 'white',paddingBottom:100}}>
                                    <div class="card-body">
                                        <h6>Facteurs de risque</h6>
                                        <br></br><br></br><br></br><br></br>
                                    </div>
                                </Link>
                            </div>
                            </div>
                        </div>

                        <div className="row justify-content-center mx-4">
                        <div className="col-sm-12 col-lg-6">
                            <div class="card col mb-3" style={{borderRadius: 20, 
                                backgroundColor: '#1E87FD', borderWidth: 0, color: 'white'}}>
                                <Link className="" to="/profil/antécédents-médicaux" style={{color: 'white', paddingBottom:100}}>
                                    <div class="card-body">
                                        <h6>Antécédents médicaux</h6>
                                        <br></br><br></br><br></br><br></br>
                                    </div>
                                </Link>
                            </div>        
                        </div>
                            
                            <div className="col-sm-12 col-lg-6">
                            <div class="card col mb-3" style={{borderRadius: 20, 
                                backgroundColor: '#1E87FD', borderWidth: 0, color: 'white'}}>
                                <Link className="" to="/profil/hygiène-de-vie" style={{color: 'white',paddingBottom:100}}>
                                    <div class="card-body">
                                        <h6>Hygiène de vie</h6>
                                        <br></br><br></br><br></br><br></br>
                                    </div>
                                </Link>
                            </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </Fragment>
        )
    }

}
export default Patient