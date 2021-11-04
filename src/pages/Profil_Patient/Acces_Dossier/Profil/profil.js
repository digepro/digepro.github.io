import React, { useState, useContext, useEffect,Fragment } from 'react';
import {NavLink,Link } from 'react-router-dom';
import Navbar from '../../../../Components/Navbar/Navbar';
import './profil.css';
import Sidebar from '../../../../Components/sidebar/Sidebar';
import Topbar from '../../../../Components/topbar/Topbar'

class test extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
           
        }
    }



    render()
    {
        return (
            <Fragment>
                <Topbar/>
                <div className="containejr">
                <Sidebar />
                <div className="pageProfil"> 
                    <div className ="section1">
                        <div className="subSection1">
                            <h3 className="titreSection">Informations Personnelles</h3>
                            <hr></hr>
                            <p className="element"><i className="fas fa-address-book icone"></i> Aurélien GADBLET</p>
                            <p className="element"><i className="fas fa-calendar-alt icone"></i> 23/03/1999 - 22 ans</p>
                            <p className="element"><i className="fas fa-venus-mars icone"></i> Homme</p>
                            <p className="element"><i className="fas fa-mobile icone"></i> 0674870451</p>
                            <p className="element"><i className="fas fa-envelope icone"></i> aurelien.gadblet@hotmail.fr</p>
                            <p className="element"><i className="fas fa-user-tie icone"></i> Etudiant</p>
                            <center><Link to="/profil/situation-sociale" style={{color: 'white'}}><button className="boutonProfil">Modifier</button></Link></center>
                        </div>
                        <div className="subSection1">
                            <h3 className="titreSection">Informations Médicales</h3>
                            <hr></hr>
                            <p className="element"><i className="fas fa-pen icone"></i>Diabète : non</p>
                            <p className="element"><i className="fas fa-smoking icone"></i>Tabac : non</p>
                            <p className="element"><i className="fas fa-pen icone"></i>Allergies :</p>
                            <hr></hr>
                            <p className="element"><i className="fas fa-pills icone"></i>Traitement :</p>
                            <p className="element"><i className="fas fa-shower icone"></i>Hygiène :</p>
                            <p className="element"><i className="fas fa-teeth icone"></i>Brossage :</p>
                            <hr></hr>
                            <p className="element"><i className="fas fa-cookie-bite icone"></i>Grignotage :</p>
                            <p className="element"><i className="fab fa-gulp icone"></i>Soda :</p>
                            <p className="element"><i className="fas fa-comment-alt icone"></i> Pas de stress</p>
                            <center><Link to="/profil/antécédents-médicaux"><button className="boutonProfil">Modifier</button></Link></center>
                        </div>
                    </div>
                    <div className="section2">
                        <center><h2>Diagramme</h2>
                        <div className="diagramme">.</div></center>
                    </div>
                    <center><Link to="/profil/accueil"><button className="boutonProfil">Retour</button></Link></center>
                </div>
                </div>
            </Fragment>
        )
    }
}
export default test;