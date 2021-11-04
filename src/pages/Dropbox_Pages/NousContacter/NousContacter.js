import React, { Fragment } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';

class NousContacter extends React.Component
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
                <Navbar/>
                <div className="container-fluid" style={{ marginTop: 25 }}>
                    <div className="container" style={{ marginTop: 5 }}>
                        <h4 className="text-center">
                            Nous contacter
                        </h4>

                        <div className="row">
                            <div className="col-sm-1 col-lg-3">
                            </div>
                            <div className="col-sm-10 col-lg-6">

                                <div className="my-2" style={{ paddingTop: 10 }} >Demande d'assitance</div>
                                <div className="my-2"style={{ paddingTop: 5 }}>Signaler un problème</div>
                                <div className="my-2"style={{ paddingTop: 5 }}>Envoyer votre avis</div>
                                <textarea style={{height: 250 }} class="form-control" name="comment" id="comment" />
                                <div className="text-right">
                                    <button style={{ borderRadius: 10, width: 150 }} type="button" class="btn bg-primary">Envoyer</button>
                                </div >

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
export default NousContacter;