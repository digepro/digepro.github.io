import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header/Header';
import Slider from '@material-ui/core/Slider';

class FacteurRisque extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const marksDiabete = [
            {
                value: 0,
                label: 'Oui',
            },
            {
                value: 1,
                label: 'Non',
            },
        ];
        const marks = [
            {
                value: 0,
                label: '0',
            },
            {
                value: 1,
                label: '1',
            },
            {
                value: 2,
                label: '2',
            },
            {
                value: 4,
                label: '4',
            },
            {
                value: 5,
                label: '5',
            },
            {
                value: 6,
                label: '6',
            },
            {
                value: 7,
                label: '7',
            },
            {
                value: 8,
                label: '8',
            },
            {
                value: 3,
                label: '3',
            },
            {
                value: 9,
                label: '9',
            },
            {
                value: 10,
                label: '10',
            },
            {
                value: 11,
                label: '11',
            },
        ];
        const { values, handleChange } = this.props;
        return (
            <section>
                <Header />
                <div className="container" style={{ marginTop: 30 }}>

                    <div className="row">
                        <div className="col-sm-1 col-lg-3">
                        </div>
                        <div className="col-sm-10 col-lg-6">
                            <div class="progress" >
                                <div class="progress-bar" style={{ width: '75%' }}></div>
                            </div>

                            <h4 style={{ marginTop: 30 }} className="text-center d-md-flex d-lg-flex justify-content-md-center justify-content-lg-center " >
                                Facteurs de risque
                    </h4>

                            <div class="form-group" style={{ paddingTop: 150 }}>
                                <label for="diabete" style={{ paddingRight: 25 }}>Diabète</label>
                                <Slider
                                    defaultValue={2}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marksDiabete}
                                    min={0}
                                    max={1}
                                    onChange={handleChange('diabete')}
                                />

                                <label for="tabac" style={{ paddingRight: 25 }}>Tabac</label>
                                <Slider
                                    defaultValue={6}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={0}
                                    max={11}
                                    onChange={handleChange('tabac')}
                                />


                                <div className="d-flex justify-content-around" style={{ paddingTop: 100 }}>
                                    <button style={{ borderRadius: 10, width: '7em' }} type="button" class="btn bg-primary" onClick={this.back}>Précédent</button>
                                    <button style={{ borderRadius: 10, width: '7em' }} type="button" class="btn bg-primary" onClick={this.continue}>Suivant</button>
                                </div>

                            </div>
                            <div className="col-sm-1 col-lg-3">
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        )
    }
}
export default FacteurRisque
