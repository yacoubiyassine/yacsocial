import "./closeFriend.css";

const CloseFriend = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div>
    <li className="sidebarFreind">
    <img className="sidebarFreindImg" src={user.profilePicture} alt=""/>
    <span className="sidebrFreindName">{user.username}</span>
   </li>
    </div>
  )
}

export default CloseFriend