import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
export function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { singup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await singup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className=" my-20 w-full max-w-xs m-auto">
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="bg-gray-600 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label htmlFor="email"  className="block text-white text-sm font-bold mb-2">Email</label>

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

        <div className="mb-4">
        <label className="text-white" htmlFor="password">Occupation</label>
        <select  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="designer">Designer</option>
          <option value="investor">Investor</option>
        </select >
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Register</button>
      </form>
    </div>
  );
}
