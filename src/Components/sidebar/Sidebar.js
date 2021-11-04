import "./Sidebar.css"
import {
    Home,
    Person,
    PersonAdd,
    People,
    Call,
    Build,
    ExitToApp,
    DateRange,
    Computer
  } from "@material-ui/icons";

export default function sidebar(){
    return(
       <div className="sidebar">
           <div className="sidebarWrapper">
               <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Dashboard
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Home className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <DateRange className="sidebarIcon"/>
                            Agenda
                        </li>
                        <li className="sidebarListItem">
                            <PersonAdd className="sidebarIcon"/>
                            Nouveau Patient
                        </li>
                        <li className="sidebarListItem">
                            <People className="sidebarIcon"/>
                            Liste des Patients
                        </li>
                        <li className="sidebarListItem">
                            <Computer className="sidebarIcon"/>
                            Séminaires
                        </li>
                        <li className="sidebarListItem">
                            <ExitToApp className="sidebarIcon"/>
                            Déconnexion
                        </li>
                    </ul>
               </div>
               
           </div>

       </div>

    )
}
