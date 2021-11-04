import React, { useState, useContext, useEffect,Fragment } from 'react';
import { Link } from 'react-router-dom';
import profil from '../../images/piopio.jpg';
import Header from '../../Components/Header/Header';
import './accueil.css';
import Navbar from '../../Components/Navbar/Navbar'

class Accueil extends React.Component
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
                    
                    <div className="container">
                        <h4 style={{paddingTop: 100}}> Bonjour, Dr. Utilisateur</h4>
                        <div class="card col" style={{borderRadius: 20, backgroundColor: '#EFEFEF', borderWidth: 0}}>
                            <div class="card-body" >
                                <h6>Nouvelles fonctionnalités</h6>
                                <p>Découvrez les nouvelles fonctionnalités de l’application. Vous pouvez désormais contacter vos patients.</p>
                                <a href="">En savoir plus</a>
                            </div>
                        </div>

                        <div className="row justify-content-center" style={{marginTop: 50 }}>
                            <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                                <div class="card col" style={{background:'blue',
                                        marginTop: 0,borderRadius: 20, backgroundColor: '#59C9F9',
                                        borderWidth: 0, color: 'white'}}>
                                    <Link to="/profil/Diagnostic" style={{color: 'white'}}>
                                        <div class="card-body" >
                                            <h6 className="categorieAccueil">Poser un diagnostic</h6>
                                            <small>En quelques clics</small>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                                <div class="card" style={{background:'blue', margin: 0,
                                    marginTop: 0,borderRadius: 20, backgroundColor: '#1E87FD',
                                    borderWidth: 0, color: 'white'}}>
                                    <Link to="/profil/SuivreLetraitement" style={{color: 'white'}}>
                                        <div class="card-body" >
                                            <h6 className="categorieAccueil">Suivre le traitement</h6>
                                            <small>En quelques clics</small>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-between">
                            <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                                <div class="card" style={{background:'blue', 
                                marginTop: 0, borderRadius: 20, backgroundColor: '#57DBDD',
                                borderWidth: 0, color: 'white'}}>
                                    <Link to="/profil/dossier" style={{color: 'white'}}>
                                        <div class="card-body" >
                                            <h6 className="categorieAccueil">Accéder au dossier de suivi</h6>
                                            <small>En quelques clics</small>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                                <div class="card" style={{background:'blue',
                                        marginTop: 0, borderRadius: 20, backgroundColor: '#4C5A81',
                                        borderWidth: 0, color: 'white'}}>
                                    <Link to="/profil/Contacter_le_patient" style={{color: 'white'}}>
                                        <div class="card-body" >
                                            <h6 className="categorieAccueil">Contacter le patient</h6>
                                            <small>En quelques clics</small>
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
export default Accueil