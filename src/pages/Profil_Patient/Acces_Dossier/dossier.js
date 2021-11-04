import React, { useState, useContext, useEffect,Fragment } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../Components/Navbar/Navbar'
import Sidebar from '../../../Components/sidebar/Sidebar';
import Topbar from '../../../Components/topbar/Topbar';
import './dossier.css';


class Dossier extends React.Component {
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
                <Topbar/>
                <div className="containejr">
                <Sidebar/>  
                    <div className="affichage">
                    <div className=" px-md-5">
                        <h5 className="mx-5 pb-4" style={{paddingTop: 0}}> Accéder au dossier de suivi</h5>
                        <div class="card mx-5 p-2" style={{borderRadius: 20, 
                            backgroundColor: '#1E87FD', borderWidth: 0, color: 'white',
                            margin: 20}}>
                                <Link to="/profil/profil" style={{color: 'white'}}>
                                    <div class="card-body text-center">
                                        <h6>Profil du patient</h6>
                                    </div>
                                </Link>
                        </div>

                        <div class="card mx-5 p-2" style={{borderRadius: 20, 
                            backgroundColor: '#1E87FD', borderWidth: 0, color: 'white',
                            margin: 20}}>
                                <Link to="/profil/graphique" style={{color: 'white'}}>
                                    <div class="card-body text-center">
                                        <h6>Consulter le diagramme</h6>
                                    </div>
                                </Link>
                        </div>

                        <div class="card mx-5 p-2" style={{borderRadius: 20, 
                            backgroundColor: '#1E87FD', borderWidth: 0, color: 'white',
                            margin: 20}}>
                            <Link to="/profil/Créer_une_ordonnance" style={{color: 'white'}}>
                                <div class="card-body text-center">
                                <h6>Créer une ordonnance</h6>
                                </div>
                            </Link>
                        </div>

                        <div class="card mx-5 p-2" style={{borderRadius: 20, 
                            backgroundColor: '#1E87FD', borderWidth: 0, color: 'white',
                            margin: 20}}>
                            <Link to="/profil/Passer_une_commande" style={{color: 'white'}}>
                                <div class="card-body text-center">
                                    <h6>Passer une commande</h6>
                                </div>
                            </Link>

                        </div>
                    </div>
                    </div>
                </div>
                </Fragment>
        )
    }

}
export default Dossier