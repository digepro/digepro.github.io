import React, { useState, useContext, useEffect,Fragment } from 'react';
import Gingivite from '../../../Components/Diagnostics/Gingivite';
import Parodontite from '../../../Components/Diagnostics/Parodontite';
import PeriImplamtite from '../../../Components/Diagnostics/PeriImplamtite';
import Navbar from '../../../Components/Navbar/Navbar';
import './Diagnostic.css';

class Poser_un_diagnostic_de_certitude extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            onglet: 1,
        }
    }

    changeOnglet(num)
    {
        this.setState({
            onglet: num,
        });
    }

    render()
    {
        return (
            <Fragment>
                <Navbar/>
                <div className="container-fluid"> 
                    <div className="page">
                        <h4>Choisir la maladie</h4> 
                    </div>
                    <div className="boutons">
                        <div className="listeOnglets">
                                <button className="onglet" onClick ={(e)=>this.changeOnglet(1)}>Gingivite</button>
                                <button className="onglet" onClick ={(e)=>this.changeOnglet(2)}>Parodontite</button>
                                <button className="onglet" onClick ={(e)=>this.changeOnglet(3)}>Péri-implamtite</button>
                        </div>
                    </div>
                    <div className="page">
                    {this.state.onglet === 1 && (
                        <Gingivite/>
                    )}
                    {this.state.onglet === 2 && (
                        <Parodontite/>
                    )}
                    {this.state.onglet === 3 && (
                        <PeriImplamtite/>
                    )}
                    </div>
                    <div className="page">
                        <button type="button" className="onglet">Enregistrer </button>
                    </div>   
                </div>
            </Fragment>
            
        )
    }

}

export default Poser_un_diagnostic_de_certitude ;

