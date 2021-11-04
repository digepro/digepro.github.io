import React, { useState, useContext, useEffect,Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../../Components/Navbar/Navbar'

class Passer_une_commande extends React.Component
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
            <section>
                <Navbar/>

                <div className="container-fluid">
                    <div className="container px-md-5">
                        <div className="text-center"> 
                            <h4>Passer une commande </h4>
                            <small>De quel type d’implant auriez-vous besoin?</small>
                        </div>
                        <div className="px-md-0">
                            <div className="row ml-0">
                                <div class="card col" style={{background:'blue', marginLeft: 200,marginRight: 200,
                                    marginTop: 55,borderRadius: 20, backgroundColor: '#4C5A81',
                                    borderWidth: 0, color: 'white', width:12000,height:300}}>
                                        Filtrer par 
                                        <label for="nom" style={{paddingTop: 15, color:'#EFEFEF'}}>Fournisseur</label>
                                    <input type="text" class="form-control" name="nom" id="nom"/>  
                                    <label for="prénom" style={{paddingTop: 15, color:'#EFEFEF'}} >Type d’implant</label>
                                    <input type="text" class="form-control" name="prénom" id="prénom"/>
                                </div>
                            </div>
                        </div>

                        
                <div className="px-md-5 mt-5">
                    <div className="row ml-5">
                            <div class="card col mr-4" style={{borderRadius: 20, 
                                backgroundColor: '#1E87FD', borderWidth: 0, color: 'white'}}>
                                <Link className="p-5" to="/profil/situation-sociale" style={{color: 'white'}}>
                                    <div class="card-body text-center">
                                        <h6>Implant</h6>
                                    </div>
                                </Link>
                            </div>

                            <div class="card col mr-2" style={{borderRadius: 20, 
                                backgroundColor: '#1E87FD', borderWidth: 0, color: 'white'}}>
                                <Link className="p-5" to="/profil/situation-sociale" style={{color: 'white'}}>
                                    <div class="card-body text-center">
                                        <h6>Implant</h6>
                                    </div>
                                </Link>
                            </div>

                            <div class="card col ml-2" style={{borderRadius: 20, 
                                backgroundColor: '#1E87FD', borderWidth: 0, color: 'white'}}>
                                <Link className="p-5" to="/profil/facteurs-de-risques" style={{color: 'white'}}>
                                    <div class="card-body text-center">
                                        <h6>Implant</h6>
                                    </div>
                                </Link>
                            </div>
                    </div>

                    <div className="row ml-5 mt-4">
                            <div class="card col mr-4" style={{borderRadius: 20, 
                                backgroundColor: '#1E87FD', borderWidth: 0, color: 'white'}}>
                                <Link className="p-5" to="/profil/antécédents-médicaux" style={{color: 'white'}}>
                                    <div class="card-body text-center">
                                        <h6>Implant</h6>
                                    </div>
                                </Link>
                            </div>

                            <div class="card col mr-2" style={{borderRadius: 20, 
                                backgroundColor: '#1E87FD', borderWidth: 0, color: 'white'}}>
                                <Link className="p-5" to="/profil/antécédents-médicaux" style={{color: 'white'}}>
                                    <div class="card-body text-center">
                                        <h6>Implant</h6>
                                    </div>
                                </Link>
                            </div>

                            <div class="card col ml-2" style={{borderRadius: 20, 
                                backgroundColor: '#1E87FD', borderWidth: 0, color: 'white'}}>
                                <Link className="p-5" to="/profil/hygiène-de-vie" style={{color: 'white'}}>
                                    <div class="card-body text-center">
                                        <h6>Implant</h6>
                                    </div>
                                </Link>
                            </div>
                    </div>
                </div>
                    <div className="text-right" style={{marginTop:20}}>
                        <button style={{borderRadius: 10, width: 150,  backgroundColor: '#4C5A81'}} type="button" class="btn">Commander</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Passer_une_commande; 