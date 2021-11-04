import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo512.png'

class ForgetPassword extends React.Component
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
        <div className="container" style={{marginTop:30}}>

            <div className="text-center" style={{paddingTop: 80}}>
                <h2>Mot de passe oublié?</h2>
                <img className="rounded-circle" src={Logo} alt="Logo" style={{width: 100}}></img>
                </div>
                
            <div >
                <form class="form-group">
                    <label for="mail" >Adresse Mail</label>
                    <div class="input-group">
                        <input type="email" class="form-control border-right-0"/>
                        <span class="input-group-append">
                            <div class="input-group-text" style={{paddingBottom: 2}}><i class="fa fa-envelope" style={{color: "#1E87FD", marginTop: -4}}></i>
                            </div>
                        </span>
                    </div>

                <div className="text-center" style={{paddingTop: 50}}>  
                <button style={{borderRadius: 10, width: 150}}type="submit" class="btn bg-primary">
                    Récupérer
                    </button>
                </div>
                </form>

                <div className="text-center px-md-5 mx-md-5" >
                <Link to="/Login">Vous avez déjà un compte ? Connectez-vous </Link>
                </div>
 
            </div>        
        </div>
        )
    }
}
export default ForgetPassword