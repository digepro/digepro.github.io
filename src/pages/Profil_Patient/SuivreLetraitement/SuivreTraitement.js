import React, { useState, useContext, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../../Components/Navbar/Navbar'

class SuivreLetraitement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            divcontainer: false,
           
        }
    }

    render() {
        return (
            <Fragment>
                <Navbar/>

                <div className="container-fluid">
                    
                    <div className="container" style={{ marginTop: 15 }}>
                        <h4 className="text-center">
                            Suivre le traitement
                        </h4>
                        <div style={{ marginTop: 15 }} className="text-center">
                            Sélectionner l’étape de traitement du
                            patient afin qu’il puisse suivre sa maladie
                            et<br /> accéder à des contenus de prévention ciblés.
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-sm-12 col-lg-9 mt-5">
                            <ul className="nav nav-pills ">
                                <li className="nav-item pill1"><a class="nav-link" href="#p1" data-toggle="pill"><h5>Thérapeuthique initiale</h5></a></li>
                                <li className="nav-item pill2"><a class="nav-link" href="#p2" data-toggle="pill"><h5>Thérapeuthique chirurgical</h5></a></li>
                                <li className="nav-item pill3"><a class="nav-link" href="#p3" data-toggle="pill"><h5>Thérapeuthique de soutien</h5></a></li>
                            </ul>
                            <div className="tab-content p-4 mt-2 " style={{
                                height: '10em',
                                borderRadius: 10, backgroundColor: '#DDDDDD',
                                borderWidth: 0, color: 'black'
                            }}>
                                <div className="tab-pane fade show active" id="p1"><h7>Vidéos de prévention sur les premiers rendez-vous,
                                éducation sur les maladies, le brossage, le détartrage, ...</h7><a href="">En savoir plus</a></div>
                                <div className="tab-pane fade" id="p2"><h7>Vidéos de prévention sur les opérations sur la gencive, ...</h7>
                                    <a href="">En savoir plus</a></div>
                                <div className="tab-pane fade" id="p3"><h7>Vidéos d’éducation au suivi de la maladie après le traitement, brossage, entretien, ...
                                </h7>  <a href="">En savoir plus</a> </div>
                            </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default SuivreLetraitement;