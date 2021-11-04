import React from 'react'
import profil from '../images/piopio.jpg'
import { Link } from 'react-router-dom'

class CardPatient extends React.Component
{
    render()
    {
        return(
            <div>
                <label for="search" >Rechercher un patient</label>
                <div class="input-group pb-2 mb-4">
                    <input id="search" class="form-control" type="search" placeholder="search" aria-label="Search" style={{backgroundColor: '#EFEFEF', border:0}} />
                        <span class="input-group-append">
                            <div class="input-group-text" type="button" style={{paddingBottom: 2, backgroundColor: '#EFEFEF', border:0}}>
                                <i class="fa fa-search" style={{color: "#1E87FD", marginTop: -4}}></i>
                            </div>
                        </span>
                </div>
                
                <div class="card mb-3" style={{borderRadius: 20, backgroundColor: '#F5F6FA', borderWidth: 0}}>
                    <div class="row g-0 align-items-center">
                        <div class="col-1 text-center mx-4">
                            <img className="rounded-circle " style={{maxWidth: 60}} src={profil} alt="profil"/>
                        </div>
                        <div class="col">
                            <Link to="/profil/accueil">
                                <div class="card-body">
                                    <h5 class="card-title">Ronald Richards</h5>
                                    <p class="card-text"><small class="text-muted">1901 Thornridge, Hawaii 81063</small></p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CardPatient;