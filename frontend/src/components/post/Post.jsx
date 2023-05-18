import "./post.css";
import {MenuOpen, MoreVert} from "@mui/icons-material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { format } from "timeago.js";
import { AuthContext } from "../../context/AuthContext";

  const Post = ({post}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [like,setLike] = useState(post.likes.length);
  const [isLiked,setIsLiked] = useState(false)
  const[user,setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user:currentUser} = useContext(AuthContext)
 
     // delete post 
   const deletePost = async () => {
  try {
    const response = await axios.delete(`/posts/${post._id}`);
    console.log('Delete response:', response);
    // Suppression réussie, effectuez des actions supplémentaires si nécessaire
  } catch (error) {
    console.log(error);
    // Gérer l'erreur lors de la suppression du post
  }
};


  useEffect(()=>{
    setIsLiked(post.likes.includes(currentUser._id))
  },[currentUser._id, post.likes]);

  useEffect(() =>{
    const fetchUser = async () =>{
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();

  },[post.userId]);

  const likeHandler = () =>{
      try {
        axios.put("/posts/" + post._id + "/like", { userId:currentUser._id})
      } 
      catch (err) {
        
      }
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

 

  return (
    
    <div>
       <div className="post">
         <div className="postWrapper">
            <div className="postTop">

            <div className="postTopLeft">
              <Link to={`/profile/${user.username}`}>
              <img 
              className="postProfileImg" 
              src= {
                user.profilePicture 
                ? PF + user.profilePicture 
                : PF + "person/noAvatar2.jpg"
              }
               alt=""
               />
              </Link>
              

              <span className="postUsername">
              {user.username}
              </span>
              <span className="postDate">{format(post.createdAt)}</span>
            </div>


            
            <div className="postTopRight">
            {currentUser && post.userId === currentUser._id && (
              <div>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <MoreVert onClick={() => setMenuOpen(!menuOpen)} />
                {menuOpen && <button onClick={deletePost}>delete</button>}
              </div>
            )}
          </div>
            </div>
            <div className="postCenter">
              <span className="postText">{post?.desc}</span>
               <img className="postImg" src={PF+post.img} alt=""/>
            </div>
            <div className="postBottom">

               <div className="postBottomLeft">
                 <img  className="likeIcon" 
                 src="/assets/like.jpg" 
                 onClick={likeHandler} alt=""/>

                 <img className="likeIcon" 
                 src="/assets/heart.jpg" 
                 onClick={likeHandler} alt=""/>
                 
                 <span className="postLikeCounter">{like} people like it</span>
               </div>

               <div className="postBottomRight">
                  <span className="postCommentText">{post.comment} comments</span>
               </div>
            </div>
         </div>
       </div>
       
        <div>
         
        </div>
      
    
    
    </div>
  )
}

export default Post