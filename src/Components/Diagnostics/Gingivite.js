import React from 'react'
import { Link } from 'react-router-dom'

class Gingivite extends React.Component
{
    render()
    {
        return(
            <div className="sousPage">
                <center><h4>Diagnostic Gingivite : </h4>
                <div >
                <textarea type="text" className="zoneTexte"></textarea>
                </div>
                <div>
                    <button className="onglet">Joindre Photo</button>
                </div>
                </center>
            </div>
        );
    }
}
export default Gingivite;