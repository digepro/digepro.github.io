import React, { useState, useContext, useEffect,Fragment } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import CardPatient from '../../Components/ListePatient'

class Patients extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {
            divcontainer: false,
        }
    }

    render()
    {
        var Handlechange = e =>
        {
            this.setState({divcontainer: !this.state.divcontainer});
        }

        const x=this.state.divcontainer;

        return (
            <Fragment>
                <Navbar/>
                <div className="container-fluid" style={{marginTop: 60}}>
                    <div className="container">
                        <div className="d-flex justify-content-between p-5 mx-4">
                            <h4> Liste des patients</h4>
                            <i class="fa fa-filter fa-2x" type="button" onClick={Handlechange} style={{color: "#1E87FD"}}></i>
                        </div>
                        {
                            x&&<div class="card mb-4" style={{borderRadius: 20, backgroundColor: '#4C5A81', borderWidth: 0, color: 'white'}}>
                                    <div class="card-body" >
                                        <h6>Filtrer par</h6>
                                        <div className="form-group d-flex flex-column">
                                            <div>
                                                <label for="diabete" style={{paddingRight: 25}}>Ordre alphabétique</label> 
                                                <input type="checkbox" class="form-check-input" name="diabete" id="diabete"/>
                                            </div>
                                            <div>
                                                <label for="diabete" style={{paddingRight: 25}}>Vistes les plus récentes</label> 
                                                <input type="checkbox" class="form-check-input" name="diabete" id="diabete"/>
                                            </div>
                                            <div>
                                                <label for="diabete" style={{paddingRight: 25}}>Visites les plus anciennes</label> 
                                                <input type="checkbox" class="form-check-input" name="diabete" id="diabete"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        }

                        <CardPatient/>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Patients;