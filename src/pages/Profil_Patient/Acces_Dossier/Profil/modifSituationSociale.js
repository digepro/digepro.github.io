import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../../Components/Navbar/Navbar';

class Dossier_Sociale extends React.Component
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
            <section>
                <Navbar/>

                <div className="container" style={{marginTop:30}}>
                <div className="row m-2" >
                        <div className="col-sm-1 col-lg-3">
                        </div>
                        <div className="col-sm-10 col-lg-6">
                
                    
                    <h4 style={{marginTop:30}} className="text-center d-md-flex d-lg-flex justify-content-md-center justify-content-lg-center " >
                        Situation sociale
                    </h4>
                    <div class="form-group">
                        <label for="prénom" style={{paddingTop: 20}}>Prénom</label>
                        <input type="text" class="form-control"  name="prénom" id="prénom"/>
                            
                        <label for="nom">Nom</label>
                        <input type="text" class="form-control" name="nom" id="nom"/>
                        
                        <label for="date">Date de naissance</label>
                        <input type="date" class="form-control" name="date" id="date"/>
                        
                        <label for="sexe">Sexe</label>
                        <div class="form-check row">
                        <label class="form-check-label col-3" for="homme">
                            <input type="radio" class="form-check-input" name="sexe" id="homme"/>
                            Homme
                        </label>
                        <label class="form-check-label col-3" for="femme">
                            <input type="radio" class="form-check-input" name="sexe" id="femme"/>
                            Femme
                        </label>
                        </div>

                        <label for="tel" style={{paddingTop: 15}}>Numéro de téléphone</label>
                        <input type="tel" class="form-control" name="tel" id="tel"/>
                        
                        <label for="mail">Adresse mail</label>
                        <input type="email" class="form-control" name="mail" id="mail"/>
                        
                        <label for="job">Activité professionnelle</label>
                        <input type="text" class="form-control" name="job" id="job"/>
                        
                        <label for="stress" style={{paddingRight: 25}}>Stress</label> 
                        <input type="checkbox" class="form-check-input" name="stress" id="stress"/>
                        <input type="range" class="form-control" name="stress" id="stress"/>
                        <div class="legend row justify-content-between">
                            <div class="col-4">
                            <small>Faible</small>
                            </div>
                            <div class="col-4 text-right">
                            <small >Important</small>
                            </div>
                        </div>
                        
                        <label for="comment">Notes sur le comportement</label>
                        <textarea type="text" class="form-control" name="comment" id="comment"/>

                        <div className="d-flex justify-content-around">
                            <Link to="/profil/profil"><button style={{borderRadius: 10, width: '7em'}}type="button" class="btn bg-primary ">Retour</button></Link>
                            <Link to="/profil/profil"><button style={{borderRadius: 10, width: '7em'}}type="button" class="btn bg-primary ">Enregistrer</button></Link>
                        </div>

                        
                    </div>
                        </div>
                        <div className="col-sm-1 col-lg-3">
                        </div>
                    </div>
                </div>
            </section>
            
        )
    }
} 
export default  Dossier_Sociale
