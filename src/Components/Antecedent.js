import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header/Header';


class Antecedent extends React.Component
{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render()
    {
        const {values, handleChange} = this.props;
        return (
            <section>
                <Header/>
                <div className="container" style={{marginTop:10}}>
                    <div className="row">
                        <div className="col-sm-1 col-lg-3">
                        </div>
                        <div className="col-sm-10 col-lg-6">
                    <div class="progress" >
                        <div class="progress-bar" style={{ width : '75%'}}></div>
                    </div>
                    <h4 style={{marginTop:30}} className="text-center">
                        Antécédants médicaux
                    </h4>
                    <form class="form-group" method="post" style={{paddingTop: 50}}>
                        <label for="santeGeneral" >Santé générale</label>
                        <textarea type="text" class="form-control"  name="santeGeneral" id="santeGeneral"
                        onChange={handleChange('santeGeneral')} value={values.santeGeneral}/>
                            
                        <label for="allergies">Allergies</label>
                        <textarea type="text" class="form-control" name="allergies" id="allergies"
                        onChange={handleChange('allergies')} value={values.santeGeneral}/>
                        
                        <label for="trairement">Traitement habituel</label>
                        <textarea type="text" class="form-control" name="trairement" id="trairement"/>
                        
                        <div className="d-flex justify-content-around" style={{paddingTop: 100}}>
                            <button style={{borderRadius: 10, width: '7em'}}type="button" class="btn bg-primary" onClick={this.back}>Précédent</button>
                            <button style={{borderRadius: 10, width: '7em'}}type="button" class="btn bg-primary" onClick={this.continue}>Suivant</button>
                        </div>
                    </form>

                            
                        </div>
                        <div className="col-sm-1 col-lg-3">
                        </div>
                    </div>
                    
                </div>
            </section>
        )
    }
} 
export default  Antecedent
