import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../../Components/Navbar/Navbar';


class Dossier_Antecedents extends React.Component
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
                <Navbar />
 
                <div className="container" style={{marginTop:30}}>

                <div className="row m-2">
                        <div className="col-sm-1 col-lg-3">
                        </div>
                        <div className="col-sm-10 col-lg-6">
            
                    <h4 style={{marginTop:30}} className="text-center" >
                        Antécédants médicaux
                    </h4>
                    <div class="form-group" style={{paddingTop: 50, paddingBottom: 150}}>
                        <label for="sante" >Santé générale</label>
                        <textarea type="text" class="form-control"  name="sante" id="sante"/>
                            
                        <label for="allergie">Allergies</label>
                        <textarea type="text" class="form-control" name="allergie" id="allergie"/>
                        
                        <label for="trairement">Traitement habituel</label>
                        <textarea type="text" class="form-control" name="trairement" id="trairement"/>

                    </div>
                    <div className="d-flex justify-content-around">
                            <Link to="/profil/profil"><button style={{borderRadius: 10, width: '7em'}}type="button" class="btn bg-primary ">Annuler</button></Link>
                            <Link to="/profil/profil"><button style={{borderRadius: 10, width: '7em'}}type="button" class="btn bg-primary ">Enregistrer</button></Link>
                            <Link to="/profil/facteurs-de-risques"><button style={{borderRadius: 10, width: '7em'}}type="button" class="btn bg-primary ">Suivant</button></Link>
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
export default  Dossier_Antecedents
