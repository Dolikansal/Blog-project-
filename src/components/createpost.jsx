import React, { useState } from 'react';
import axios from 'axios';
import { PenSquare, Image as ImageIcon, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  // 1. States for form data
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Technology');
  const [coverImage, setCoverImage] = useState(''); // Added state for image
  const navigate = useNavigate();

  // 2. Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault(); // Page refresh rokne ke liye

    const newPost = {
      title,
      content,
      category,
      coverImage
    };

    try {
      // Backend URL (Make sure your backend is running on port 3001)
      const res = await axios.post("https://blog-project-1-21ox.onrender.com/api/posts/create", newPost);
      
      if (res.status === 200) {
        alert("Blog Published Successfully! 🎉");
        navigate("/"); // Redirect to Home
      }
    } catch (err) {
      console.error("Error saving post:", err);
      alert("Something went wrong. Please check if Backend is running.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-green-600 p-2 rounded-lg text-white">
            <PenSquare size={28} />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900">
            Create New <span className="text-green-600">Blog Post</span>
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* --- FIX: Added onSubmit here --- */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            
            {/* Blog Title */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Blog Title</label>
              <input 
                type="text" 
                value={title}
                placeholder="Enter a catchy title for your blog..."
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white focus:outline-none transition-all text-lg font-medium"
                onChange={(e) => setTitle(e.target.value)} 
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Category Selection */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                <select 
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white focus:outline-none transition-all" 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Technology">Technology</option>
                  <option value="Coding">Coding</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Education">Education</option>
                </select>
              </div>

              {/* Image URL Placeholder */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Cover Image URL</label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={coverImage}
                    placeholder="https://image-link.com"
                    className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white focus:outline-none transition-all"
                    onChange={(e) => setCoverImage(e.target.value)}
                  />
                  <ImageIcon className="absolute left-4 top-4 text-gray-400" size={20} />
                </div>
              </div>
            </div>

            {/* Blog Content Section */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Content</label>
              <textarea 
                rows="12" 
                value={content}
                placeholder="Start writing your story here. Share your knowledge with the world..."
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white focus:outline-none transition-all resize-none"
                onChange={(e) => setContent(e.target.value)}
                required
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-4 pt-4">
              <button 
                type="button" 
                className="px-6 py-3 text-gray-600 font-semibold hover:text-gray-900 transition"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="bg-green-600 text-white px-10 py-3 rounded-xl font-bold hover:bg-green-700 transition flex items-center gap-2 shadow-lg shadow-green-100"
              >
                Publish Now <Send size={18} />
              </button>
            </div>

          </form>
        </div>

        {/* Writing Tips */}
        <div className="mt-8 p-4 bg-green-50 border border-green-100 rounded-xl">
          <p className="text-sm text-green-800">
            <strong>Pro Tip:</strong> Use clear headings and short paragraphs to make your blog post easier to read.
          </p>
        </div>

      </div>
    </div>
  );
};

export default CreatePost;