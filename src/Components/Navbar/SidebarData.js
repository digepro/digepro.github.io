import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as BsIcons from "react-icons/bs"

export const SidebarData = [
    {
        title: 'Accueil',
        path: '/profil/Accueil',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Patients',
        path: '/profil/liste-patients',
        icon: <BsIcons.BsFillPersonLinesFill />,
        cName: 'nav-text'
    },
    {
        title: 'Diagnostic',
        path: '/profil/Diagnostic',
        icon: <FaIcons.FaFileMedical />,
        cName: 'nav-text'
    },
    {
        title: 'Deconnexion',
        path:'/Login',
        icon: <AiIcons.AiOutlineLogout />,
        cName:'nav-text'
        },


]