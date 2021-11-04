import React, { Fragment } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';

class Params extends React.Component
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
                <Navbar />
                <div className="container-fluid">

                    
                    <div className="container" style={{ marginTop: 30 }}>
                        <h4 style={{ marginTop: 30 }} className="text-center">
                            Paramètres
                        </h4>

                        <div className="row">
                            <div className="col-sm-1 col-lg-3">
                            </div>
                            <div className="col-sm-10 col-lg-6">

                                <div >
                                    <h6 style={{ marginTop: 20 }}>Sécurité</h6>
                                </div>
                                <div >
                                    <label className="my-2">Entrez votre mot de passe</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div>
                                    <label className="my-2">Modifier votre mot de passe</label>
                                    <input type="text" class="form-control" />
                                </div>

                                <div>
                                    <label className="my-2">Recevoir des alertes en cas de connexion non reconnues</label>
                                    <input type="checkbox" class=" ml-2" />
                                </div>

                                <div>
                                    <label className="my-2"> Utiliser l’identification à deux facteurs</label>
                                    <input type="checkbox" class=" ml-2" />
                                </div>

                                <div>
                                    <label className="my-2">Notifications</label>
                                    <input type="checkbox" class=" ml-2" />
                                </div>
                                <div className="text-center my-2">
                                    <button style={{ borderRadius: 10, width: 150, backgroundColor: '#4C5A81' }} type="button" class="btn">Enregistrer</button>
                                </div>

                            </div>
                            <div className="col-sm-1 col-lg-3">
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default Params;