import { useState } from "react";
import { useAuth } from "../context/authContext"
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, singGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      navigate("/posts");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    await singGoogle();
    navigate("/posts");
  };

  return (
    <div className=" my-20 w-full max-w-xs m-auto">

      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="bg-gray-600 shadow-md rounded px-8 pt-10 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-white text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="email@gmail.com"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="text-white" htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="******"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Login
        </button>
      </form>
      <p className="justify-between text-sm flex my-4">
        No Tienes Una Cuenta? <Link className="text-blue underline " to="/register">Registrate</Link>
      </p>
      <button
        onClick={handleGoogleLogin}
        className="w-full py-2 px-4 border-gray-300 rounded border-2 shadow-md text-black hover:bg-slate-200 bg-slate-100"
      >
        Entrar con Google
      </button>
    </div>
  );
}
