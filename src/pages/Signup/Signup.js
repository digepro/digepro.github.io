import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/myperio.jpg'


class Signup extends React.Component {

    render()
    {
        return(
        <div className="container">
                
                <div className="text-center" style={{paddingTop: 80}}>
                    <img className="rounded-circle" src={Logo} alt="Logo" style={{width: 100}}></img>
                </div>

                <form class="form-group" style={{paddingTop: 80}}>

                    <label for="RPPS" >N°RPPS</label>
                    <div class="input-group">
                        <input type="text" class="form-control border-right-0"/>
                        <span class="input-group-append">
                            <div class="input-group-text" style={{paddingBottom: 2}}><i class="fa fa-envelope" style={{color: "#1E87FD", marginTop: -4}}></i></div>
                        </span>
                    </div>
                    
                    <label for="password">Mot de passe</label>
                    <div class="input-group pb-2">
                        <input type="password" class="form-control border-right-0"/>
                        <span class="input-group-append">
                            <div class="input-group-text" style={{paddingBottom: 2}}><i class="fa fa-lock" style={{color: "#1E87FD", marginTop: -4}}></i></div>
                        </span>
                    </div>
                    
                    <label for="password">Confirmez le mot de passe</label>
                    <div class="input-group pb-2">
                        <input type="password" class="form-control border-right-0"/>
                        <span class="input-group-append">
                            <div class="input-group-text" style={{paddingBottom: 2}}><i class="fa fa-lock" style={{color: "#1E87FD", marginTop: -4}}></i></div>
                        </span>
                    </div>

                    <label for="mail" >Adresse Mail</label>
                    <div class="input-group">
                        <input type="email" class="form-control border-right-0"/>
                        <span class="input-group-append">
                            <div class="input-group-text" style={{paddingBottom: 2}}><i class="fa fa-envelope" style={{color: "#1E87FD", marginTop: -4}}></i></div>
                        </span>
                    </div>

                    <Link to={"/forgetPassword"} > <small className="legend">Mot de passe oublié</small>  </Link>

                    <div className="text-center" style={{paddingTop: 50}}>
                    </div>

                    <div className="text-center px-md-5 mx-md-5" >
                        <Link to="/Login">
                            <p className="m-0 mt-3">Vous avez déjà un compte ?</p>
                            <p>Connectez-vous</p>   
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}
export default Signup