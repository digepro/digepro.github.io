/* eslint-disable no-undef */
import React, { Component } from 'react'
import Header from './Header/Header';
import Slider from '@material-ui/core/Slider';

export class SituationSociale extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    value(value) {
        switch (value) {
            case 1: return 'Faible'
            case 2: return 'Modéré'
            case 3: return 'Important'
        };
    }
    render() {
        const { values, handleChange } = this.props;
        const marks = [
            {
                value: 1,
                label: 'Faible',
            },
            {
                value: 2,
                label: 'Modéré',
            },
            {
                value: 3,
                label: 'Important',
            },
        ];
        return (
            <section>
                <Header />
                <div className="container" style={{ marginTop: 30 }}>
                    <div className="row">
                        <div className="col-sm-1 col-lg-3">
                        </div>
                        <div className="col-sm-10 col-lg-6">



                            <div class="progress" >
                                <div class="progress-bar " style={{ width: '25%' }}></div>
                            </div>
                            <h4 style={{ marginTop: 30 }} className="text-center d-md-flex d-lg-flex justify-content-md-center justify-content-lg-center " >
                                Situation sociale
                            </h4>
                            <div class="form-group">
                                <label for="prenom" style={{ paddingTop: 20 }}>Prénom</label>
                                <input type="text" class="form-control" name="prenom" id="prenom"
                                    onChange={handleChange('prenom')} defaultValue={values.prenom} />

                                <label for="nom">Nom</label>
                                <input type="text" class="form-control" name="nom" id="nom"
                                    onChange={handleChange('nom')} defaultValue={values.nom} />

                                <label for="date">Date de naissance</label>
                                <input type="date" class="form-control" name="date" id="date"
                                    onChange={handleChange('date')} defaultValue={values.date} />

                                <label for="sexe">Sexe</label>
                                <div class="form-check row" >
                                    <label class="form-check-label col-3" for="Homme">
                                        <input type="radio" class="form-check-input" name="sexe" id="Homme"
                                            onChange={handleChange('sexe')} defaultValue={values.sexe} />
                            Homme
                        </label>
                                    <label class="form-check-label col-3" for="Femme">
                                        <input type="radio" class="form-check-input" name="sexe" id="Femme"
                                            onChange={handleChange('sexe')} defaultValue={values.sexe} />
                            Femme
                        </label>
                                </div>

                                <label for="tel" style={{ paddingTop: 15 }}>Numéro de téléphone</label>
                                <input type="tel" class="form-control" name="tel" id="tel"
                                    onChange={handleChange('tel')} defaultValue={values.tel} />

                                <label for="mail">Adresse mail</label>
                                <input type="email" class="form-control" name="mail" id="mail"
                                    onChange={handleChange('mail')} defaultValue={values.mail} />

                                <label for="profession">Activité professionnelle</label>
                                <input type="text" class="form-control" name="profession" id="profession"
                                    onChange={handleChange('profession')} defaultValue={values.profession} />

                                <label for="stress" style={{ paddingRight: 25 }}>Stress</label>
                                <Slider
                                    defaultValue={2}
                                    aria-labelledby="discrete-slider"
                                    getAriaValueText={this.value}
                                    valueLabelDisplay="auto"
                                    step={1}
                                    min={1}
                                    max={3}
                                    marks={marks}
                                    onChange={handleChange('stress')}
                                />

                                <label for="notes">Notes sur le comportement</label>
                                <textarea type="text" class="form-control" name="notes" id="notes"
                                    onChange={handleChange('notes')} defaultValue={values.notes} />

                                <div className="text-center">
                                    <button style={{ borderRadius: 10, width: '7em' }} type="button" class="btn bg-primary ml-5" onClick={this.continue} >Suivant</button>

                                </div>

                            </div>
                            <div className="col-sm-1 col-lg-3">
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}
export default SituationSociale