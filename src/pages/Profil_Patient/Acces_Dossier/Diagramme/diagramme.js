import React, { useState, useContext, useEffect,Fragment } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../../Components/Navbar/Navbar'

class Diagramme extends React.Component
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
            <Fragment>
                <Navbar/>
 
                <div className="container-fluid">
                    
                    <h5 className="mx-5 pb-4" style={{paddingTop: 100}}> Consulter le graphique</h5>
                    <div class="card mx-5 p-2" style={{borderRadius: 20, 
                        backgroundColor: '#1E87FD', borderWidth: 0, color: 'white',
                        height: 600}}>
                        <div class="card-body text-center">
                            <h6>graphique à venir ...</h6>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Diagramme