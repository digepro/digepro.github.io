import React, { useState, useContext, useEffect,Fragment } from 'react';
import profil from '../../../../images/piopio.jpg'
import { Link } from 'react-router-dom';
import Header from '../../../../Components/Header/Header';
import './ordonnance.css';
import Item from '../../../../Components/Ordonnance/item';


class Créer_une_ordonnance extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            bad: 0,
            dentifrice: 0,
            brossette: 0,
            fd: 0,
        }
    }

    addBad=()=>
    {
        const nv = this.state.bad + 1;
        this.setState({ bad: nv });
        console.log(this.state.bad);
    }

    removeBad=()=>
    {
        if(this.state.bad > 0)
        {
            const nv = this.state.bad - 1;
            this.setState({ bad: nv });
        }
    }

    addDentifrice=()=>
    {
        const nv = this.state.dentifrice + 1;
        this.setState({ dentifrice: nv });
    }

    removeDentifrice=()=>
    {
        if(this.state.dentifrice > 0)
        {
            const nv = this.state.dentifrice - 1;
            this.setState({ dentifrice: nv });
        }
    }

    addBrossette=()=>
    {
        const nv = this.state.brossette + 1;
        this.setState({ brossette: nv });
    }

    removeBrossette=()=>
    {
        if(this.state.brossette > 0)
        {
            const nv = this.state.brossette - 1;
            this.setState({ brossette: nv });
        }
    }

    addFd=()=>
    {
        const nv = this.state.fd + 1;
        this.setState({ fd: nv });
    }

    removeFd=()=>
    {
        if(this.state.fd > 0)
        {
            const nv = this.state.fd - 1;
            this.setState({ fd: nv });
        }
    }

    render=()=>
    {
    return(
        <Fragment>
            <Header/>

            <div className="pageOrdonnance">
                
                <div className="">
                    <div className="text-center"> 
                        <h3>Créer une ordonnance </h3>
                        <p> De quel matériel votre patient aura-t-il besoin</p>
                    </div>
                </div>

                <hr></hr>

                <div className="listeItems">


                        <Item name="Brosse à dent" quantity={this.state.bad} add={this.addBad} substract={this.removeBad} afficher={this.state.afficherBad}/>

                        <Item name="Dentifirce" quantity={this.state.dentifrice} add={this.addDentifrice} substract={this.removeDentifrice} afficher={this.state.afficherDentifrice}/>
  
                        <Item name="Brossette" quantity={this.state.brossette} add={this.addBrossette} substract={this.removeBrossette} afficher={this.state.afficherBrossette}/>

                        <Item name="Fil dentaire" quantity={this.state.fd} add={this.addFd} substract={this.removeFd} afficher={this.state.afficherFd}/>

                </div>
                <hr></hr>
                <div className="text-center" style={{marginTop:20}}>
                    <button className="boutonCommander" type="button">Commander</button>
                </div>

            </div>
        </Fragment>
    );

    }

}
export default Créer_une_ordonnance;

