import { usePosts } from "../context/postContext";
import { Link } from "react-router-dom";
import { PostCard } from "../components/PostCard";
import { VscEmptyWindow } from "react-icons/vsc";
import ParticlesBackground from "../components/particlesBackground";



export function HomePage() {
  const { posts } = usePosts();
  
  const renderPost = () => {
    if (posts.length === 0)
      return (
        <div className="flex flex-col justify-center items-center">
          <VscEmptyWindow className="w-48 h-48 text-black" />
          <h1 className="text-black text-2xl">There are no posts</h1>
        </div>
      );

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    );
  };

  return (
    <div style={{zIndex:9999}}>
      
      <h1 className=" font-serif flex justify-center text-xl underline-offset-8 text-amber-300 " >Welcome Designer</h1>
      <header className="flex justify-between items-center my-4">
        <h1 className="text-2xl text-black font-bold">
          Posts ({posts.length})
        </h1>
        <Link className="bg-red-500 rounded px-4 py-2 text-white hover:bg-red-800" to={"/"}>Logout</Link>
        
        <Link
          to="/new"
          className="bg-indigo-600 px-4 py-2 text-white hover:bg-red-500"
        >
          Create Post
        </Link>
      </header>
        
      {renderPost()}
      
    </div>
  );
}

