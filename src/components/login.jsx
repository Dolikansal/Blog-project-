import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://blog-project-1-21ox.onrender.com/api/auth/login", formData);
      
      // User data local storage mein save karo taaki refresh pe log out na ho
      localStorage.setItem("user", JSON.stringify(res.data.user));
      
      alert("Welcome back, " + res.data.user.username);
      navigate("/"); // Home page par redirect
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-green-500">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-500 mt-2">Log in to your green blog account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" name="email" placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                onChange={handleChange} required 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" name="password" placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                onChange={handleChange} required 
              />
            </div>

            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg shadow-lg transition-all transform hover:-translate-y-1">
              Log In
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-600">
            Don't have an account? 
            <Link to="/signup" className="text-green-600 font-semibold hover:underline ml-1">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;