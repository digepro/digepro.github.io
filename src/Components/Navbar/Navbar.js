import React, {useState, useContext, useEffect,Fragment} from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"

import { SidebarData} from './SidebarData'
import './Navbar.css'
import {IconContext} from 'react-icons'
import {NavLink, Link } from 'react-router-dom'


function Navbar() {
    const[sidebar, setSidebar] = useState(false)
    
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value ={{color: '#fff'}}> 
            <div className="navbar fixed-top">
                <Link to='#' className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>

                <div className="nomSite">
                    MyPerio
                </div>
                
                <div className="dropdown" type="button" aria-expanded="false">
                    <div data-toggle="dropdown">
                        <button className="boutonHeader"><i class="fas fa-user"></i></button>
                    </div>
                    <ul className="dropdown-menu dropdown-menu-right">
                        <li><NavLink to="Modifier_le_profil" className="dropdown-item" >Modifier le profil</NavLink></li>
                        <li><NavLink to="/Params" class="dropdown-item" href="/Login" >Paramètre</NavLink></li>
                        <li><NavLink to="/NousContacter" className="dropdown-item" >Nous contacter</NavLink></li>
                        <li><hr className="dropdown-divider" /></li>
                        <NavLink to="/Login" className="dropdown-item">Déconnexion</NavLink>
                    </ul>
                </div>
            </div>

            
            <nav className={sidebar ? 'nav-menu active ' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item,index)=> {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path} className='menuicons'>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )

                    })}
                </ul>

                

            </nav>
            </IconContext.Provider>
        </>
    )
};

export default Navbar;
