import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Topbar = () => {
  const {user, dispatch} = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
  const history = useHistory();

const handleLogout  = async () => {
    localStorage.removeItem("user");
    window.location.reload()
   };

  return (
    <div className="topbarContainer">
       <div className="topbarLeft">

       <Link to="/" style={{textDecoration:"none"}}>
       <span className="logo">Yacsocial</span>
       </Link>
          
       </div>
       <div className="topbarCenter">
          <div className="searchbar">
          <Search className="searchIcon" />
           <input placeholder="Search for freind, post or video" 
           className="searchInput"/>
          </div>
       </div>
       <div className="topbarRight">
           <div className="topbarLinks">
              <span className="topbarLink">Homepage</span>
              <span className="topbarLink">Timeline</span>
               
           </div>
           <Link to="/login" className="topbarLogoutButton">
           <button onClick= {handleLogout}>Déconnexion</button>
         </Link>
           <div className="topbarIcons">
              <div className="topbarIconItem">
                 <Person />
                 <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconItem">
                 <Chat />
                 <span className="topbarIconBadge">2</span>
              </div>
              <div className="topbarIconItem">
                 <Notifications  />
                 <span className="topbarIconBadge">30</span>
              </div>
           </div>
           <Link to={`/profile/${user.username}`}>
         
           
           <img 
           src={
            user.profilePicture
             ? PF + user.profilePicture 
             : PF + "person/noAvatar2.jpg"
            } 
            alt=""
             className="topbarImg"
              />
           </Link>
          
       </div>
    
    </div>
    );
   };

   export default Topbar;
