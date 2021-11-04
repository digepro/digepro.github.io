import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages inscription
import Inscription from '../../pages/Inscription_Patient/inscription';

import Login from '../../pages/Login/Login';

import Signup from '../../pages/Signup/Signup.js';

import Welcome from '../../pages/Welcome/Welcome.js';

import Accueil from '../../pages/Profil_Patient/accueil'
import Patients from '../../pages/Profil_Patient/patients'
import Diagramme from '../../pages/Profil_Patient/Acces_Dossier/Diagramme/diagramme'
import Dossier from '../../pages/Profil_Patient/Acces_Dossier/dossier'
import Patient from '../../pages/Profil_Patient/Acces_Dossier/Profil/patient'
import Profil from '../../pages/Profil_Patient/Acces_Dossier/Profil/profil';
import Dossier_Sociale from '../../pages/Profil_Patient/Acces_Dossier/Profil/modifSituationSociale'
import Dossier_Risques from '../../pages/Profil_Patient/Acces_Dossier/Profil/modifFacteurRisque'
import Dossier_Antecedents from '../../pages/Profil_Patient/Acces_Dossier/Profil/modifAntecedant'
import Dossier_Hygiène from '../../pages/Profil_Patient/Acces_Dossier/Profil/modifHygiene'

import ErrorPage from '../ErrorPage/ErrorPage.js';
import ForgetPassword from '../ForgetPassword/ForgetPassword';
import SuivreLetraitement from '../../pages/Profil_Patient/SuivreLetraitement/SuivreTraitement'
import Diagnostic from '../../pages/Profil_Patient/Diagnostic/Diagnostic'
import Contacter_le_patient from '../../pages/Profil_Patient/Contacter_le_patient/ContacterPatient'
import Passer_une_commande from '../../pages/Profil_Patient/Acces_Dossier/Passer_une_commande/PasserCommande'
import Créer_une_ordonnance from '../../pages/Profil_Patient/Acces_Dossier/Créer_une_ordonnance/CreerOrdonnance'
import Modifier_le_profil from '../../pages/Dropbox_Pages/Modifier_le_profil/ModifierProfil'
import Params from '../../pages/Dropbox_Pages/Params/Params'
import NousContacter from '../../pages/Dropbox_Pages/NousContacter/NousContacter'

  class App extends React.Component 
  {
    constructor(props)
    {
        super(props);
        this.state = {
            
        }
    }
    render()
    {    
      return(
        <Router>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Welcome" component={Welcome}/>
            <Route path="/Signup" component={Signup}/>
            <Route path="/forgetpassword" component={ForgetPassword}/>

            <Route path="/inscription" component={Inscription}/>
            
            <Route path="/profil/Accueil" component={Accueil}/>
            <Route path="/profil/liste-patients" component={Patients}/>
            <Route path="/profil/dossier" component={Dossier}/>
            <Route path="/profil/patient" component={Patient}/>
            <Route path="/profil/profil" component={Profil}/>
            <Route path="/profil/situation-sociale" component={Dossier_Sociale}/>
            <Route path="/profil/facteurs-de-risques" component={Dossier_Risques}/>
            <Route path="/profil/antécédents-médicaux" component={Dossier_Antecedents}/>
            <Route path="/profil/Hygiène-de-vie" component={Dossier_Hygiène}/>
            <Route path="/profil/graphique" component={Diagramme}/>

            <Route path="/NousContacter" component={NousContacter}/>
            <Route path="/profil/SuivreLetraitement" component={SuivreLetraitement}/>
            <Route path='/Params' component ={Params}/>
            <Route path='/profil/Diagnostic' component ={Diagnostic}/>
            <Route path='/Modifier_le_profil' component ={Modifier_le_profil}/>
            <Route path='/profil/Contacter_le_patient' component ={Contacter_le_patient}/>
            <Route path='/profil/Passer_une_commande' component={Passer_une_commande}/>
            <Route path='/profil/Créer_une_ordonnance' component={Créer_une_ordonnance}/>
            <Route component={ErrorPage} />
          
          </Switch>
      </Router>
        )
    }
      
  }
export default App;