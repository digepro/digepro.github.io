import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import SituationSociale from '../../Components/situationSociale';
import FacteurRisque from '../../Components/FacteurRisque';
import Antecedent from '../../Components/Antecedent';
import Hygiene from '../../Components/Hygiene';

class Inscription extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            step: 1,
            nom: '',
            prenom: '',
            date: new Date(),
            sexe: '',
            tel: '',
            mail: '',
            profession: '',
            password: '',
            notes: '',
            stress: '',
            diabete: '', 
            tabac:'', 
            santeGeneral: '', 
            allergies: '', 
            traitementHabituel: '',
            hygiene: '', 
            fréquence: '', 
            efficacite: '', 
            grignotage: '', 
            soda: ''
        }
    }

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

        handleChange = input => e => {
            this.setState({[input]: e.target.value})
        }
    
        render()
        {
            const { step } = this.state;
            
            const { nom, prenom, date, sexe, tel, mail, profession, password, notes,
            stress, diabete, tabac, santeGeneral, allergies, traitementHabituel,
            hygiene, fréquence, efficacite, grignotage, soda } = this.state;
            
            const values = { nom, prenom, date, sexe, tel, mail, profession, password, notes,
                stress, diabete, tabac, santeGeneral, allergies, traitementHabituel,
                hygiene, fréquence, efficacite, grignotage, soda }

            switch(step) {
                case 1:
                    return (
                        <SituationSociale
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    )
                case 2:
                    return (
                        <FacteurRisque
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    )
                case 3:
                    return (
                        <Antecedent
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    )
                case 4:
                    return (
                        <Hygiene
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    )

                default:
            }
        }
    } 
    export default  Inscription
    
/*  DEUXIEME METHOD

        DANS LE CONSTRUCTEUR

        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeSexe = this.onChangeSexe.bind(this);
        this.onChangeTel = this.onChangeTel.bind(this);
        this.onChangeMail = this.onChangeMail.bind(this);
        this.onChangeProfession = this.onChangeProfession.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeNotes = this.onChangeNotes.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        EN DEHORS DU CONSTRUCTEUR

    onChangeNom(e) {
        this.setState({
            nom: e.target.value
        });
    }
    
    onChangePrenom(e) {
        this.setState({
            prenom: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onChangeSexe(e) {
        this.setState({
            sexe: e.target.value
        });
    }

    onChangeTel(e) {
        this.setState({
            tel: e.target.value
        });
    }

    onChangeMail(e) {
        this.setState({
            mail: e.target.value
        });
    }

    onChangeProfession(e) {
        this.setState({
            profession: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeNotes(e) {
        this.setState({
            notes: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        const patient = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            date: this.state.date,
            sexe: this.state.sexe,
            tel: this.state.tel,
            mail: this.state.mail,
            profession: this.state.profession,
            password: this.state.password,
            notes: this.state.notes,
        }

        console.log(patient);

        window.location = '/inscription/facteurs-de-risque'
    }
*/

/*
return (
    <section>
    <Header/>
    <div className="container" style={{marginTop:30}}>
        <div class="progress" >
            <div class="progress-bar " style={{ width: '25%'}}></div>
        </div>
        <h4 style={{marginTop:30}} className="text-center d-md-flex d-lg-flex justify-content-md-center justify-content-lg-center " >
            Situation sociale
        </h4>
        <div class="form-group">
            <label for="prenom" style={{paddingTop: 20}}>Prénom</label>
            <input type="text" class="form-control"  name="prenom" id="prenom"/>
                
            <label for="nom">Nom</label>
            <input type="text" class="form-control" name="nom" id="nom"/>
            
            <label for="date">Date de naissance</label>
            <input type="date" class="form-control" name="date" id="date"/>
            
            <label for="sexe">Sexe</label>
            <div class="form-check row">
            <label class="form-check-label col-3" for="homme">
                <input type="radio" class="form-check-input" name="sexe" id="homme"/>
                Homme
            </label>
            <label class="form-check-label col-3" for="femme">
                <input type="radio" class="form-check-input" name="sexe" id="femme"/>
                Femme
            </label>
            </div>

            <label for="tel" style={{paddingTop: 15}}>Numéro de téléphone</label>
            <input type="tel" class="form-control" name="tel" id="tel"/>
            
            <label for="mail">Adresse mail</label>
            <input type="email" class="form-control" name="mail" id="mail"/>
            
            <label for="job">Activité professionnelle</label>
            <input type="text" class="form-control" name="job" id="job"/>
            
            <label for="stress" style={{paddingRight: 25}}>Stress</label> 
            
            <input type="range" class="form-control" name="stress" id="stress"/>
            <div class="legend row justify-content-between">
                <div class="col-4">
                <small>Faible</small>
                </div>
                <div class="col-4 text-right">
                <small >Important</small>
                </div>
            </div>
            
            <label for="comment">Notes sur le comportement</label>
            <textarea type="text" class="form-control" name="comment" id="comment"/>

            <div className="text-center">
                <Link to="/Welcome"><button style={{borderRadius: 10, width: 150}}type="button" class="btn bg-primary">précédent</button></Link>
                <Link to="/inscription/facteurs-de-risque"><button style={{borderRadius: 10, width: 150}}type="button" class="btn bg-primary ml-5">Suivant</button></Link>
            
            </div>
        </div>
    </div>
</section>

)
*/