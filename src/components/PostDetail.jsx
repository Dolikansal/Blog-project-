import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // User details fetch karna localStorage se
  const user = JSON.parse(localStorage.getItem("user"));
  const isSubscribed = user?.isSubscribed || false;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`https://blog-project-1-21ox.onrender.com/api/posts/${id}`);
        setPost(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Post fetch error:", err);
        setLoading(false);
      }
    };
    fetchPost();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-green-600"></div>
    </div>
  );

  if (!post) return (
    <div className="text-center py-20 bg-white text-gray-800 min-h-screen">
      <p className="text-xl font-semibold">Post nahi mili!</p>
      <button onClick={() => navigate('/')} className="text-green-600 mt-4 underline font-medium">
        Back to Home
      </button>
    </div>
  );

  // Subscription Logic: Check if post is premium and user is not subscribed
  const showLockedUI = post.isPremium && !isSubscribed;

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="h-1 bg-green-100 sticky top-0 z-50">
        <div className="h-full bg-green-600 w-full transition-all duration-500"></div>
      </div>

      <nav className="container mx-auto px-4 py-6">
        <button 
          onClick={() => navigate(-1)} 
          className="group flex items-center text-gray-500 hover:text-green-600 transition-colors font-medium"
        >
          <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
          Back to Articles
        </button>
      </nav>

      <article className="container mx-auto px-4 max-w-4xl">
        <header className="mb-10 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <span className="px-4 py-1 rounded-full bg-green-50 text-green-700 text-sm font-bold uppercase tracking-wider border border-green-100">
                {post.category}
            </span>
            {post.isPremium && (
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center gap-1 border border-amber-200">
                    🔒 PREMIUM
                </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-500 border-b border-gray-100 pb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xs">
                {post.author ? post.author[0] : 'A'}
              </div>
              <span className="font-semibold text-gray-800">Admin</span>
            </div>
            <span className="hidden md:block">•</span>
            <time className="text-sm italic">
              {new Date(post.createdAt).toLocaleDateString('en-US', { 
                year: 'numeric', month: 'long', day: 'numeric' 
              })}
            </time>
          </div>
        </header>

        {post.coverImage && (
          <div className={`rounded-3xl overflow-hidden shadow-2xl mb-12 border border-gray-100 ${showLockedUI ? 'grayscale-[0.5] blur-[2px]' : ''}`}>
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-auto object-cover max-h-[600px]" 
            />
          </div>
        )}

        {/* --- Main Content Section --- */}
        <div className="relative">
          {showLockedUI ? (
            <div className="relative">
              {/* Fake preview content with gradient fade */}
              <div className="text-gray-400 select-none pointer-events-none leading-[1.8] text-lg md:text-xl font-serif h-48 overflow-hidden mask-fade-bottom">
                {post.content.substring(0, 250)}...
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
              </div>

              {/* Locked UI Overlay */}
              <div className="bg-green-50 rounded-3xl p-8 md:p-12 text-center border border-green-100 shadow-inner mt-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Upgrade to Premium</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Aap yeh exclusive article nahi padh sakte kyunki yeh sirf premium members ke liye hai.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => navigate('/services')} 
                    className="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition shadow-lg"
                  >
                    View Pricing
                  </button>
                  <button 
                    onClick={() => navigate('/')} 
                    className="border border-green-600 text-green-600 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-gray-700 leading-[1.8] text-lg md:text-xl whitespace-pre-wrap font-serif">
              {post.content}
            </div>
          )}
        </div>

        {!showLockedUI && (
          <footer className="mt-16 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <p className="font-bold text-gray-800">Share this post:</p>
              <div className="flex gap-2 text-sm">
                <span className="px-4 py-2 rounded-full bg-gray-50 hover:bg-green-50 hover:text-green-600 cursor-pointer transition-all border border-gray-100">Facebook</span>
                <span className="px-4 py-2 rounded-full bg-gray-50 hover:bg-green-50 hover:text-green-600 cursor-pointer transition-all border border-gray-100">Twitter</span>
              </div>
            </div>
          </footer>
        )}
      </article>
    </div>
  );
};

export default PostDetail;