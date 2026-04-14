import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams(); // URL se ID nikalne ke liye
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Technology');

  // 1. Pehle purana data fetch karke form mein bharo
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`http://localhost:3001/api/posts/${id}`);
      setTitle(res.data.title);
      setContent(res.data.content);
      setCategory(res.data.category);
    };
    fetchPost();
  }, [id]);

  // 2. Update logic
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/posts/${id}`, {
        title, content, category
      });
      alert("Blog Update Ho Gaya! 🎉");
      navigate(`/post/${id}`); // Wapas blog page par bhej do
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6 bg-white p-8 rounded-2xl shadow-sm border">
        <h1 className="text-3xl font-bold text-green-600 mb-8">Edit Your Post</h1>
        <form onSubmit={handleUpdate} className="space-y-6">
          <input 
            type="text" value={title} 
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-green-500"
          />
          <select 
            value={category} onChange={(e) => setCategory(e.target.value)}
            className="w-full p-4 border rounded-xl"
          >
            <option value="Technology">Technology</option>
            <option value="Coding">Coding</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
          <textarea 
            rows="10" value={content} 
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-4 border rounded-xl"
          ></textarea>
          <button type="submit" className="bg-green-600 text-white px-10 py-3 rounded-xl font-bold hover:bg-green-700 shadow-lg">
            Update Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;