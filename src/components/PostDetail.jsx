import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Backend se single post fetch karna
        const res = await axios.get(`https://blog-project-1-21ox.onrender.com/api/posts/${id}`);
        console.log("Fetching from:", res);
        setPost(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Post fetch error:", err);
        setLoading(false);
      }
    };
    fetchPost();
    // Page load hote hi top par scroll ho jaye
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-aqua">
       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-aqua"></div>
    </div>
  );

  if (!post) return (
    <div className="text-center py-20 bg-[#0a0a0a] text-white min-h-screen">
      <p>Post nahi mili!</p>
      <button onClick={() => navigate('/')} className="text-aqua mt-4 underline">Back to Home</button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="text-cyan-400 mb-8 flex items-center gap-2 hover:text-cyan-300 transition">
           ← Back
        </button>

        {/* Category Badge */}
        <span className="bg-cyan-900/30 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-cyan-800/50">
          {post.category}
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center text-gray-500 text-sm mb-8 border-b border-gray-800 pb-6">
          <span>Published on: {new Date(post.createdAt).toLocaleDateString()}</span>
        </div>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="rounded-2xl overflow-hidden mb-10 shadow-2xl border border-gray-800">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-auto object-cover max-h-[500px]" 
            />
          </div>
        )}

        {/* Main Content */}
        <div className="prose prose-invert max-w-none prose-cyan leading-relaxed text-lg whitespace-pre-wrap">
          {post.content}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;