import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../../Components/Navbar/Navbar';


class Dossier_Risques extends React.Component
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

                <div className="row m-2">
                        <div className="col-sm-1 col-lg-3">
                        </div>
                        <div className="col-sm-10 col-lg-6">
                
                    
                    <h4 style={{marginTop:30}} className="text-center d-md-flex d-lg-flex justify-content-md-center justify-content-lg-center " >
                        Facteurs de risque
                    </h4>
                    <div class="form-group" style={{paddingTop: 50}}>
                        <label for="diabete" style={{paddingRight: 25}}>Diabète</label> 
                        <input type="checkbox" class="form-check-input" name="diabete" id="diabete"/>
                        <input type="range" class="form-control" name="diabete" id="diabete"/>
                        <div class="legend row justify-content-between">
                            <div class="col-4">
                            <small>Déséquilibré</small>
                            </div>
                            <div class="col-4 text-right">
                            <small >Equilibré</small>
                            </div>
                        </div>

                        <label for="tabac" style={{paddingRight: 25}}>Tabac</label> 
                        <input type="checkbox" class="form-check-input" name="tabac" id="tabac"/>
                        <input type="range" class="form-control" name="tabac" id="tabac"/>
                        <div class="legend row justify-content-between" style={{paddingBottom: 150}}>
                            <div class="col-4">
                            <small>Faible consommation</small>
                            </div>
                            <div class="col-4 text-right">
                            <small >Forte consommation</small>
                            </div>
                        </div>

                        <div className="d-flex justify-content-around">
                            <Link to="/profil/antécédents-médicaux"><button style={{borderRadius: 10, width: '7em'}}type="button" class="btn bg-primary ">Retour</button></Link>
                            <Link to="/profil/patient"><button style={{borderRadius: 10, width: '7em'}}type="button" class="btn bg-primary ">Enregistrer</button></Link>
                            <Link to="/profil/Hygiène-de-vie"><button style={{borderRadius: 10, width: '7em'}}type="button" class="btn bg-primary ">Suivant</button></Link>
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
export default  Dossier_Risques
