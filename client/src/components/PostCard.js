import toast from "react-hot-toast";
import { usePosts } from "../context/postContext";
import { useNavigate } from "react-router-dom";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { useRef, useState } from 'react';
import Modal from '../components/Modal'

export function PostCard({ post }) {
  const { deletePost } = usePosts();
  const navigate = useNavigate();
  const [show, setShow] = useState('hidden');
  const [selectedPost, setSelectedPost] = useState();
  const postHandler = (selectedPost) => {
    //if(open==='hidden')
    setSelectedPost(selectedPost);
    setShow('relative')
  }

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div>
          <p className="text-white">
            Do you want to delete?
🤔   <strong>{id}</strong>?
          </p>
          <div>
          
            <button
              className="bg-red-500 hover:bg-slate-500 px-3 py-2 text-sm text-white rounded-sm mx-2"
              onClick={(e) => {
                deletePost(id);
                toast.dismiss(t.id);
              }}
            >
            🗑️ Delete
            </button>
            <button
              className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        duration: "4000",
        style: {
          background: "#202020"
        }
      }
    );
  };
  const [likes, setLikes] = useState(0);
  const  likeHandle = () => {
    setLikes(likes+1);
  }
  const ref = useRef();
  return (
<>
<Flippy
flipOnHover={false} // default false
flipOnClick={true} // default false
flipDirection="horizontal" // horizontal or vertical
ref={ref} // to use toggle method like ref.curret.toggle()
// if you pass isFlipped prop component will be controlled component.
// and other props, which will go to div
 /// these are optional style, it is not necessary
>

<FrontSide  >
<div
      className="bg-zinc-800 text-white rounded-md  hover:bg-zinc-700 hover:cursor-pointer"
      onClick={(e)=>e.preventDefault()}
      
    > 
 

      <div className="px-4 py-7">
        <div className="flex justify-between items-center">
          <h3 className="text-md font-semibold">{post.title}</h3>
          <button
            className="bg-red-600 text-sm px-2 py-1 rounded-sm hover:bg-slate-500"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(post._id);
            }}
          >
            Delete
          </button>
          <div>
          <button 
          onClick={likeHandle }
          className="bg-blue-600 text-sm px-2 py-1 rounded-sm hover:bg-slate-500">Like {likes}</button>
          
        </div>
        
        </div>
       
      </div>
      <div>
      {post.image && <img src={post.image.url} alt={post.title} onClick={()=>postHandler(post)}/>}
          
      </div>
      

 <br />
 <button className="hover:cursor-pointer hover:text-blue-600 " onClick={() => { ref.current.toggle(); }}> Ver Detalles </button> 
  <button onClick={() => navigate(`/${post._id}`)}>Editar</button>
</div>
</FrontSide>
<BackSide className="rounded-md" style={{ backgroundColor: '#2b2d42'}}>
<p className="text-gray-400">{post.description}</p>
</BackSide>
</Flippy>

<div className={show}>
        <Modal post={selectedPost} setShow={setShow}/>
</div>
  
  </>


  );
}


