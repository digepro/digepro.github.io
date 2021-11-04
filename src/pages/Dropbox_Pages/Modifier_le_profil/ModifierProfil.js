import React, { Fragment } from 'react';
import profil from '../../../images/piopio.jpg';
import Navbar from '../../../Components/Navbar/Navbar';

class Modifier_le_profil extends React.Component
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
                
                    <div className="container" style={{marginTop:20}}>

                        <div style={{marginTop:20}} className="text-center"> 
                            <h4>Modifier le profile</h4> 
                        </div>

                        <div style={{marginTop:20}} className="text-center d-md-flex d-lg-flex justify-content-md-center justify-content-lg-center">
                            <small >
                            Modifier la photo de profil 
                            </small>
                        </div>
                        <div class="form-group" className="text-center d-md-flex d-lg-flex justify-content-md-center justify-content-lg-center">
                            <img className="rounded-circle col-2 max-vh-50" style={{maxWidth: 80,marginTop:60}} src={profil} alt="profil"/>
                        </div>
                            
                        <div class="form-group" className="text-center d-md-flex d-lg-flex justify-content-md-center justify-content-lg-center">
                    
                            <small style={{paddingTop:30}}>Informations</small>
                        </div>
                        <div class="form-group">
                            <label for="prénom" style={{paddingTop: 20}}>Prénom</label>
                            <input type="text" class="form-control" />
                                
                            <label for="nom">Nom</label>
                            <input type="text" class="form-control" />
                            
                            <label for="nom">Adresse du cabinet</label>
                            <input type="text" class="form-control" />
                            <div className="text-center">
                                <button style={{borderRadius: 10, width: 150}}type="button" class="btn bg-primary">Enregistrer</button>
                            </div>
                        </div>
                        <div>
                        Paramètres<br/>
                        Nous contacter<br/>
                        Mentions légales
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}
export default Modifier_le_profil