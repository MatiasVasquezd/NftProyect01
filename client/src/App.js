import { Routes, Route } from "react-router-dom";
import { HomePage, NotFoundPage, PostForm } from "./pages";
import { PostProvider } from "./context/postContext";
import { Toaster } from "react-hot-toast";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { AuthProvider } from "./context/authContext";
import { BlockedRoute } from "./components/BlockedRoute";
import { Sample } from "./pages/flipCard";
import ParticlesBackground from "./components/particlesBackground";


function App() {
  return (
    
    <div className=" bg-black min-h-screen flex items-center">
     
      <div className="px-10 container m-auto py-4">
       
        <AuthProvider>
          <PostProvider>
            <Routes>
            <Route path="/sample" element={<Sample />} />
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/posts" element={<BlockedRoute><HomePage /></BlockedRoute>} />
              <Route path="/new" element={<PostForm />} />
              <Route path="/:id" element={<PostForm />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Toaster />
          </PostProvider>
        </AuthProvider>
       
      </div>
    </div>
  );
}

export default App;
