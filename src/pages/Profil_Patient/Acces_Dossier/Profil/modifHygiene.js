import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../../Components/Navbar/Navbar';


class Dossier_Hygiène extends React.Component
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
                            Hygiène de vie
                        </h4>
                        <div class="form-group" style={{paddingTop: 50, paddingBottom: 50}}>
                            <label for="allergie">Hygiène</label>
                            <input type="text" class="form-control" name="allergie" id="allergie"/>

                            <label for="" style={{paddingRight: 25}}><strong>Habitude de brossage</strong></label> 
                            <input type="range" class="form-control" name="brossage" id="nombre"/>
                            <div class="legend row justify-content-between">
                                <div class="col-4">
                                <small>1</small>
                                </div>
                                <div class="col-4 text-center">
                                <small>2</small>
                                </div>
                                <div class="col-4 text-right">
                                <small >3</small>
                                </div>
                            </div>

                            <input type="range" class="form-control" name="brossage" id="efficace"/>
                            <div class="legend row justify-content-between">
                                <div class="col-4">
                                <small>Innefficace</small>
                                </div>
                                <div class="col-4 text-right">
                                <small >Efficace</small>
                                </div>
                            </div>

                            <label for="" className="d-flex" ><strong>Habitude alimentaire</strong></label> 
                            
                            <label for="" style={{paddingRight: 25}}>Grignotage</label> 
                            <input type="checkbox" class="form-check-input" name="grignotage" id="grignotage"/>
                            <input type="range" class="form-control" name="grignotage" id="grignotage"/>
                            <div class="legend row justify-content-between">
                                <div class="col-4">
                                <small>Peu</small>
                                </div>
                                <div class="col-4 text-right">
                                <small >Beaucoup</small>
                                </div>
                            </div>

                            <label for="" style={{paddingRight: 25}}>Soda</label> 
                            <input type="checkbox" class="form-check-input" name="soda" id="soda"/>
                            <input type="range" class="form-control" name="soda" id="soda"/>
                            <div class="legend row justify-content-between">
                                <div class="col-4">
                                <small>Peu</small>
                                </div>
                                <div class="col-4 text-right">
                                <small >Beaucoup</small>
                                </div>
                            </div>

                            
                        </div>
                        <div className="d-flex justify-content-around">
                                <Link to="/profil/facteurs-de-risques"><button style={{borderRadius: 10, width: '7em'}}type="button" class="btn bg-primary ">Retour</button></Link>
                                <Link to="/profil/profil"><button style={{borderRadius: 10, width: '7em'}}type="button" class="btn bg-primary ">Enregistrer</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
            
        )
    }
} 
export default  Dossier_Hygiène