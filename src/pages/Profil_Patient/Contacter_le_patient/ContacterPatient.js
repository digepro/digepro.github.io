import React, { useState, useContext, useEffect,Fragment } from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom';

class Contacter_le_patient extends React.Component
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
                    
                    <div className="container"  style={{marginTop:20}}>

                        <div style={{marginTop:20}} className="text-center"> 
                            <h4>Contacter le patient</h4> 
                        </div>
                        <div className="row">
                            <div className="col-sm-1 col-lg-3">
                            </div>
                            <div className="col-sm-10 col-lg-6">

                                <div style={{marginTop:30}}>
                                    <h6> Numéro de téléphone</h6>
                                    <small> 06.01.01.01.01</small> 
                                </div>

                                <div style={{marginTop:20}}>
                                    <h6> Adresse mail</h6>
                                    <small>adressemail@gmail.com</small>
                                </div>
                            </div>
                            <div className="col-sm-1 col-lg-3">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-1 col-lg-3">
                            </div>
                            <div className="col-sm-10 col-lg-6">
                                <div style={{marginTop:30}}>
                                    Envoyer un message
                                    <textarea type="text" class="form-control" name="comment" id="comment" style={{height:180}}/>
                                    <div className="text-center"> 
                                        <button style={{borderRadius: 10, width: 150}}type="button" class="btn bg-primary">Envoyer</button>
                                    </div >
                                </div>
                            </div>
                            <div className="col-sm-1 col-lg-3">
                            </div>
                        </div>

                </div>

            </div>
        </Fragment>
        )
    }

}
export default Contacter_le_patient; 