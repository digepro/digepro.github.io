import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from './Header/Header';
import Slider from '@material-ui/core/Slider';


class Hygiene extends React.Component {
    continue = e => {
        e.preventDefault();
        window.open("/welcome")
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const marksFrequence = [
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
                value: 3,
                label: '3+',
            },
        ];
        const marksEfficacite = [
            {
                value: 1,
                label: 'Peu efficace',
            },
            {
                value: 2,
                label: 'Moyennement efficace',
            },
            {
                value: 3,
                label: 'Très efficace',
            },
        ];
        const marksGrignotage = [
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
        const marksSoda = [
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
                                <div class="progress-bar " style={{ width: '100%' }}></div>
                            </div>
                            <h4 style={{ marginTop: 30 }} className="text-center d-md-flex d-lg-flex justify-content-md-center justify-content-lg-center " >
                                Hygiène de vie
                    </h4>
                            <div class="form-group" style={{ paddingTop: 120 }}>
                                <label for="hygiene">Hygiène</label>
                                <input type="text" class="form-control" name="hygiene" id="hygiene"
                                    onChange={handleChange('hygiene')} value={values.hygiene} />

                                <label for="" style={{ paddingRight: 25 }}><strong>Habitude de brossage</strong></label>
                                <Slider
                                    defaultValue={2}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marksFrequence}
                                    min={0}
                                    max={3}
                                    onChange={handleChange('frequence')}
                                />
                                <Slider
                                    defaultValue={2}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marksEfficacite}
                                    min={1}
                                    max={3}
                                    onChange={handleChange('efficacite')}
                                />


                                <label for="" className="d-flex" ><strong>Habitudes alimentaires</strong></label>

                                <label for="" style={{ paddingRight: 25 }}>Grignotage</label>
                                <Slider
                                    defaultValue={2}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marksGrignotage}
                                    min={1}
                                    max={3}
                                    onChange={handleChange('grignotage')}
                                />

                                <label for="" style={{ paddingRight: 25 }}>Soda</label>
                                <Slider
                                    defaultValue={2}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marksSoda}
                                    min={1}
                                    max={3}
                                    onChange={handleChange('soda')}
                                />

                                <div className="d-flex justify-content-around" style={{ paddingTop: 100 }}>
                                    <button style={{ borderRadius: 10, width: '7em' }} type="button" class="btn bg-primary" onClick={this.back}>Précédent</button>
                                    <button style={{ borderRadius: 10, width: '7em' }} type="button" class="btn bg-primary" onClick={this.continue}>Terminer</button>
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
export default Hygiene