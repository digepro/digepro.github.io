import React, { useState, useContext, useEffect,Fragment } from 'react'
import {NavLink,Link } from 'react-router-dom'
import profil from '../../images/piopio.jpg'
import Logo from '../../images/myperio.jpg'
import './header.css'

class Header extends React.Component
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
            <div className="header">
                <div className="dropdown" type="button" aria-expanded="false">
                    <div data-toggle="dropdown">
                        <button className="boutonHeader"><i class="fas fa-bars"></i></button>
                    </div>
                    <div className="dropdown-menu menu">
                        <div className="categorieMenu">
                            <a className="alias">Menu</a>
                        </div>
                        <div className="categorieMenu">
                            <a className="alias">Accueil</a>
                        </div>
                        <div className="categorieMenu">
                            <a className="alias">Patient</a>
                        </div>
                        <div className="sousCategorieMenu">
                            <a>Nouveau</a>
                        </div>
                        <div className="sousCategorieMenu">
                            <a>Liste</a>
                        </div>
                        <div className="categorieMenu">
                            <a>Diagnostic</a>
                        </div>
                        <div className="sousCategorieMenu">
                            <a>Nouveau</a>
                        </div>
                        <div className="categorieMenu">
                            <a className="alias">Déconnexion</a>
                        </div>
                    </div> 
                </div>

                <div className="nomSite">
                    MyPerio
                </div>
                
                <div className="dropdown" type="button" aria-expanded="false">
                    <div data-toggle="dropdown">
                        <button className="boutonHeader"><i class="fas fa-user"></i></button>
                    </div>
                    <ul className="dropdown-menu dropdown-menu-right">
                        <li><NavLink to="Modifier_le_profil" className="dropdown-item" >Modifier le profil</NavLink></li>
                        <li><NavLink to="/Params" class="dropdown-item" href="/Login" >Paramètre</NavLink></li>
                        <li><NavLink to="/NousContacter" className="dropdown-item" >Nous contacter</NavLink></li>
                        <li><hr className="dropdown-divider"/></li>
                        <NavLink to ="/Login" className="dropdown-item">Déconnexion</NavLink>
                    </ul>
                    
                </div>
            </div>
        )
    }
}
export default Header;