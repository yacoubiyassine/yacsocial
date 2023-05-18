import "./profile.css"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { add_user, get_user } from "../../redux/action/UserAction";

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const {username} = useParams();

   useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?${username}`);
      setUser(res?.data);
    };
    fetchUser();
  },[username]);

  // const UserList = () =>{
  //   const dispatch = useDispatch()
  //   useEffect(()=>{
  //     dispatch(get_user)
  //   },[dispatch])
  //  const users=useSelector((state)=>state.users)
  //  const [name, setName] = useState("")
  //  const [desc, setDesc] = useState("")
  //  const HandlAdd=()=>{
  //   dispatch(add_user({name, desc}))
  //  }

  return (
    <>
    <Topbar />
    <div className='profile'>   
    <Sidebar />
    <div className="profileRight">
      <div className="profileRightTop">
         <div className="profileCover">

         <img 
         className="profileCoverImg" 
         src={
          user?.coverPicture
          ? PF + user?.coverPicture
          : PF + "/person/noCover.jpg"
      }
      alt=""
    />
    <img
                className="profileUserImg"
                src={
                  user?.profilePicture
                    ? PF + user?.profilePicture
                    : PF + "./person/noAvatar2.jpg"
                }
                alt=""
              />
      </div>

{/*
      <div>
       <input type="text" onChange={(e)=>setName(e.target.value)}></input>
        {users.map((el)=> <Profile el={el} key={el._id} />)}
        <button onClick={HandlAdd}>Add</button>
              </div>*/}

              
         <div className="profileInfo">
           <h4 className="profileInfoName">{user?.username}</h4>
           <span className="profileInfoDesc">{user?.desc}</span>
         </div>
      </div>
      <div className="profileRightBottom">
    
             <Feed  username={user?.username}/>
             <Rightbar user={user}/>
       </div> 
    </div>     
    
    </div>
    </>
 
    );
}            
export default Profile