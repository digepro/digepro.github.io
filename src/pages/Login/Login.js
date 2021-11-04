import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/myperio.jpg'


class Login extends React.Component
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
        
            <div className="container align-item-center">
                
                <div className="text-center" style={{paddingTop: 60}}>
                    <img className="rounded-circle" src={Logo} alt="Logo" style={{width: 100}}></img>
                </div>
    
                    <form class="form-group" style={{paddingTop: 80}}>
    
                        <label for="mail" >Adresse Mail</label>
                        <div class="input-group">
                            <input type="email" class="form-control border-right-0"/>
                        </div>
                        
                        <label for="password">Mot de passe</label>
                        <div class="input-group pb-2">
                            <input type="password" class="form-control border-right-0"/>
                            <span class="input-group-append">
                                <div class="input-group-text" style={{paddingBottom: 2}}><i class="fa fa-lock" style={{color: "#1E87FD", marginTop: -4}}></i></div>
                            </span>
                        </div>
    
                         <small className="legend">Mot de passe oublié</small> 
                        <div className="pl-4 pt-2">
                            <input type="checkbox" class="form-check-input" name="sauver" id="sauver"/>
                            <label for="sauver" style={{paddingRight: 25}}>Se souvenir de moi</label> 
                        </div>
    
                        <div className="text-center" style={{paddingTop: 50}}>
                        <Link to="/Welcome">
                            <button style={{borderRadius: 10, width: 150}}type="submit" class="btn bg-primary">
                                Me connecter
                            </button> 
                        </Link>
                        </div>
    
                        <div className="text-center px-md-5 mx-md-5" >
                            <Link to="/Signup">
                                <p className="m-0 mt-3">Vous n’avez pas encore de compte ?</p>
                                <p>Inscrivez-vous</p>   
                            </Link>
                        </div>
                    </form>
            </div>
        )
    }
    
}
export default Login