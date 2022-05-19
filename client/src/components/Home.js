import { useAuth } from "../context/authContext";
 export function Home() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>Loadig...</h1>;

  return (
    <div className="z-50 my-20 w-full max-w-xs m-auto text-black ">
      <div className="bg-gray-600 rounded shadow-md px-8 pt-6 pb-8 mb-4">
        <h1 className="text-x1 mb-4">
          Bienvenid@" {user.displayName || user.email}"!l
        </h1>

        <button
          onClick={handleLogout}
          className="text-black px-4 py-2 rounded hover:bg-slate-300 bg-slate-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
