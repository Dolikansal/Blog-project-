import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending Data:", formData); // Check karo data sahi hai ya nahi
    try {
      const res = await axios.post("https://blog-project-1-21ox.onrender.com/api/auth/register", formData);
      alert(res.data.msg);
      navigate("/");
    } catch (err) {
      // Ye line badlo taaki error console mein dikhe
      console.error("Backend Error Detail:", err.response ? err.response.data : err.message);
      alert(err.response?.data?.msg || "Backend error: " + err.message);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-green-500">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
            <p className="text-gray-500 mt-2">Join our green blogging community</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input 
                type="text" 
                name="username" 
                placeholder="johndoe" 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                onChange={handleChange} 
                required 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="name@example.com" 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                onChange={handleChange} 
                required 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                name="password" 
                placeholder="••••••••" 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                onChange={handleChange} 
                required 
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-600">
            Already have an account? 
            <Link to="/login" className="text-green-600 font-semibold hover:underline ml-1">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;