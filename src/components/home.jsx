import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // LocalStorage se user nikalna taaki subscription status check ho sake
  const currentUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("https://blog-project-1-21ox.onrender.com/api/posts/all");
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Kya aap sach mein is blog ko delete karna chahte hain?")) {
      try {
        // Note: Make sure backend delete endpoint is correct
        await axios.delete(`https://blog-project-1-21ox.onrender.com/api/posts/${id}`);
        setPosts(posts.filter((post) => post._id !== id));
        alert("Post delete ho gayi! 👍");
      } catch (err) {
        console.log("Delete karne mein error aaya:", err);
      }
    }
  };

  // --- FILTER LOGIC ---
  const filteredPosts = posts.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="bg-green-50 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Welcome to <span className="text-green-600">BLOGING World</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore the latest insights on technology, coding, and lifestyle.
            Join our community of developers and thinkers today.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/create-post" className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition shadow-lg">
              Create New Blog
            </Link>
            <Link to="/about" className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* --- SEARCH SECTION --- */}
      <div className="container mx-auto px-4 mt-10">
        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder="Search blogs by title or category..."
            className="w-full p-4 pl-12 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none shadow-sm transition-all"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute left-4 top-4 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
        </div>
      </div>

      {/* --- CATEGORY FILTER SECTION --- */}
      <div className="container mx-auto px-4 mt-8 flex flex-wrap justify-center gap-3">
        {["All", "Technology", "Coding", "Lifestyle", "Education"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border ${selectedCategory === cat
                ? "bg-green-600 text-white border-green-600 shadow-md"
                : "bg-white text-gray-600 border-gray-200 hover:border-green-400 hover:text-green-600"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Latest Articles</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((p) => (
              <div key={p._id} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col group">
                {/* --- Image Section --- */}
                <div className="h-48 bg-green-50 flex items-center justify-center overflow-hidden relative">
                  {p.isPremium && (
                    <div className="absolute top-3 right-3 bg-amber-400 text-black text-[10px] font-bold px-2 py-1 rounded-md z-10 shadow-sm flex items-center gap-1">
                      🔒 PREMIUM
                    </div>
                  )}
                  {p.coverImage ? (
                    <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <span className="text-green-600 font-bold uppercase">{p.category}</span>
                  )}
                </div>

                {/* --- Content Section --- */}
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-green-600 uppercase tracking-widest">{p.category}</span>
                    <span className="text-[10px] text-gray-400 font-medium">{new Date(p.createdAt).toDateString()}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2 group-hover:text-green-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {p.content}
                  </p>
                </div>

                {/* --- Footer Section (Subscription Logic) --- */}
                <div className="p-6 pt-0 mt-auto border-t border-gray-50">
                  <div className="flex justify-between items-center py-4">
                    {p.isPremium && !currentUser?.isSubscribed ? (
                      <div className="flex flex-col">
                        <span className="text-amber-600 text-[10px] font-bold tracking-tighter">LOCKED CONTENT</span>
                        <Link to="/services" className="text-green-600 font-bold text-sm hover:underline flex items-center gap-1">
                          Subscribe to Unlock →
                        </Link>
                      </div>
                    ) : (
                      <Link to={`/post/${p._id}`} className="text-green-600 font-bold text-sm hover:underline flex items-center gap-1">
                        Read Full Blog →
                      </Link>
                    )}

                    <div className="flex gap-3">
                      <Link to={`/edit/${p._id}`} className="text-gray-400 hover:text-green-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                      </Link>
                      <button
                        onClick={() => handleDelete(p._id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
              <p className="text-gray-500 text-lg italic">
                {searchQuery ? `"${searchQuery}" ke liye koi blog nahi mila.` : "Abhi tak koi blog nahi hai. Pehla blog aap likhiye!"}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;