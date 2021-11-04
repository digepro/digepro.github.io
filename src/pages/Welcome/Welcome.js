import React, { useState, useContext, useEffect,Fragment } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import './Welcome.css';
import axios from 'axios';

class Welcome extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
         
        }
    }

    componentDidMount()
    {
       
    }

    render()
    {
        return(
            <Fragment>
                <Navbar/>
                <div className="container-fluid">
                    <div className="container">
                        <h4 style={{paddingTop: 100}}> Bonjour, Dr. Utilisateur</h4>
                        <div class="card" style={{borderRadius: 20, backgroundColor: '#EFEFEF', borderWidth: 0}}>
                            <div class="card-body" >
                                <h6>Nouvelles fonctionnalités</h6>
                                <p>Découvrez les nouvelles fonctionnalités de l’application. Vous pouvez désormais contacter vos patients.</p>
                                <a href="#">En savoir plus</a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="card col" style={{marginTop: 50,borderRadius: 20, backgroundColor: '#59C9F9',
                                borderWidth: 0, color: 'white'}}>
                                    <Link to="/inscription" style={{color: 'white'}}>
                                        <div class="card-body" >
                                            <h6 className="categorieWelcome">Création du profil</h6>
                                            <small>En quelques clics</small>
                                        </div>
                                    </Link>
                                </div>
                             </div>
                             <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="card col" style={{marginTop: 50,borderRadius: 20, backgroundColor: '#1E87FD',
                                borderWidth: 0, color: 'white'}}>
                                    <Link to="/profil/liste-patients" style={{color: 'white'}}>
                                        <div class="card-body" >
                                            <h6 className="categorieWelcome">Sélectionner un patient</h6>
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
export default Welcome