// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const navigate = useNavigate();
  
//   // LocalStorage se user ka data fetch karo
//   const userData = localStorage.getItem("user");
//   const user = userData ? JSON.parse(userData) : null;

//   // Logout ka logic: data clear karo aur redirect karo
//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     alert("Logged out successfully!");
//     navigate("/signup"); 
//     window.location.reload(); // Refresh zaroori hai protected routes update karne ke liye
//   };

//   return (
//     <nav className="bg-green-200 border-b-2 border-green-500 p-4 shadow-sm sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-green-600 tracking-tight">
//           BLOGING <span className="text-gray-800 font-semibold">World</span>
//         </Link>

//         {/* Desktop Navigation Links */}
//         <div className="hidden md:flex space-x-8 font-semibold text-gray-600">
//           <Link to="/" className="hover:text-green-600 transition">Home</Link>
//           <Link to="/about" className="hover:text-green-600 transition">About</Link>
//           <Link to="/services" className="hover:text-green-600 transition">Services</Link>
//           <Link to="/contact" className="hover:text-green-600 transition">Contact</Link>
//         </div>

//         {/* Right Side Actions */}
//         <div className="flex items-center space-x-4">
          
//           {/* 1. Create Blog sirf logged-in user ko dikhega */}
//           {user && (
//             <Link to="/create-post" className="text-green-700 font-bold hover:text-green-800 transition mr-2">
//               + Create Blog
//             </Link>
//           )}

//           {/* 2. Conditional Rendering: Signup vs User Info/Logout */}
//           {!user ? (
//             <Link 
//               to="/signup" 
//               className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition font-medium shadow-md"
//             >
//               Sign Up
//             </Link>
//           ) : (
//             <div className="flex items-center space-x-4">
//               {/* User ka naam display karna */}
//               <span className="text-green-800 font-bold hidden sm:inline italic">
//                 Hi, {user.username || "User"}!
//               </span>
              
//               <button 
//                 onClick={handleLogout} 
//                 className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition font-medium shadow-md shadow-red-100"
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  // LocalStorage state management
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  // UI States for Payment Modal
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false); // Cancel Subscription Modal State
  const [paymentMethod, setPaymentMethod] = useState('qr'); // 'qr' or 'upi'
  const [upiId, setUpiId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    navigate("/signup"); 
    window.location.reload();
  };

  // Simulated Success Handler
  const handleDummyPaymentSuccess = () => {
    if (paymentMethod === 'upi' && !upiId.includes('@')) {
      alert("Please enter a valid UPI ID (e.g., name@upi)");
      return;
    }

    setIsProcessing(true);

    // Simulate 2.5 seconds banking delay
    setTimeout(() => {
      setIsProcessing(false);
      setShowPaymentModal(false);

      // Local storage synchronization
      const updatedUser = { ...user, isSubscribed: true };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      
      alert("Transaction Completed! 🎉 ₹99 Received. Welcome to Premium Club!");
      window.location.reload(); // Refresh to update states
    }, 2500);
  };

  // Simulated Cancel Subscription Handler
  const handleCancelSubscription = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowCancelModal(false);

      const updatedUser = { ...user, isSubscribed: false };
      localStorage.setItem("user", JSON.stringify(updatedUser));

      alert("Subscription Canceled Successfully. We will miss you! 💔");
      window.location.reload();
    }, 2000);
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 p-4 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-black text-green-600 tracking-tight">
            BLOGING <span className="text-gray-800 font-semibold">World</span>
          </Link>

          <div className="hidden md:flex space-x-8 font-semibold text-gray-600">
            <Link to="/" className="hover:text-green-600 transition">Home</Link>
            <Link to="/about" className="hover:text-green-600 transition">About</Link>
            <Link to="/services" className="hover:text-green-600 transition">Services</Link>
            <Link to="/contact" className="hover:text-green-600 transition">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* GO PREMIUM BUTTON */}
            {user && !user.isSubscribed && (
              <button 
                onClick={() => setShowPaymentModal(true)}
                className="bg-amber-400 hover:bg-amber-500 text-neutral-900 px-4 py-2 rounded-xl font-bold transition shadow-sm animate-pulse"
              >
                ⭐ Go Premium (₹99)
              </button>
            )}

            {/* PRO ACTIVE BUTTON WITH CANCEL CLICK */}
            {user && user.isSubscribed && (
              <button 
                onClick={() => setShowCancelModal(true)}
                className="bg-green-600 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-xs font-black tracking-wider transition duration-300 group"
              >
                <span className="group-hover:hidden">PRO ACTIVE ✓</span>
                <span className="hidden group-hover:inline">CANCEL PREMIUM?</span>
              </button>
            )}

            {user && (
              <Link to="/create-post" className="text-green-700 font-bold hover:text-green-800 transition mr-2">
                + Create Blog
              </Link>
            )}

            {!user ? (
              <Link to="/signup" className="bg-green-600 text-white px-6 py-2 rounded-full font-medium shadow-md">
                Sign Up
              </Link>
            ) : (
              <div className="flex items-center space-x-4">
                <span className="text-green-800 font-bold hidden sm:inline italic">Hi, {user.username || "User"}!</span>
                <button onClick={handleLogout} className="bg-red-500 text-white px-5 py-2 rounded-full font-medium shadow-md">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* --- REALISTIC TRANSACTION SIMULATOR MODAL --- */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl w-full max-w-md border border-gray-100 shadow-2xl overflow-hidden transform transition-all scale-100">
            
            {/* Real Gateway Top Branding */}
            <div className="p-4 bg-slate-900 text-white flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                <span className="text-xs tracking-widest font-mono text-gray-400">SECURE GATEWAY</span>
              </div>
              <span className="text-xs text-gray-400">ID: TXN_{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>

            {/* Price Header */}
            <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-100 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Premium Membership</h3>
                <p className="text-xs text-gray-500">Blogging World Pro • 1 Month Access</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-slate-800">₹99.00</span>
                <p className="text-[10px] text-green-600 font-bold">Inclusive of GST</p>
              </div>
            </div>

            {/* Methods Selection Tabs */}
            <div className="flex border-b border-gray-100 bg-gray-50/50">
              <button 
                onClick={() => setPaymentMethod('qr')}
                className={`flex-1 py-3.5 text-center font-bold text-sm transition ${paymentMethod === 'qr' ? 'border-b-2 border-green-600 text-green-600 bg-white font-extrabold' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                📱 Instant QR Scan
              </button>
              <button 
                onClick={() => setPaymentMethod('upi')}
                className={`flex-1 py-3.5 text-center font-bold text-sm transition ${paymentMethod === 'upi' ? 'border-b-2 border-green-600 text-green-600 bg-white font-extrabold' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                💳 UPI ID / VPA
              </button>
            </div>

            {/* Main Content Area */}
            <div className="p-6">
              {isProcessing ? (
                <div className="py-12 flex flex-col items-center justify-center space-y-4">
                  <div className="w-14 h-14 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-gray-800">Processing Secure Payment...</p>
                    <p className="text-xs text-gray-400 mt-1">Do not press back or refresh this page.</p>
                  </div>
                </div>
              ) : (
                <>
                  {paymentMethod === 'qr' ? (
                    <div className="flex flex-col items-center justify-center space-y-4 py-2">
                      <div className="bg-white p-3 rounded-2xl border-2 border-dashed border-gray-300 shadow-inner relative group">
                        {/* Realistic Mock QR Code */}
                        <div className="w-44 h-44 bg-slate-900 flex flex-col p-3 rounded-xl justify-between items-center relative">
                          <div className="w-full flex justify-between">
                            <div className="w-10 h-10 border-4 border-white"></div>
                            <div className="w-10 h-10 border-4 border-white"></div>
                          </div>
                          {/* Inner details giving authentic look */}
                          <div className="w-12 h-12 border-2 border-green-400 flex items-center justify-center rounded">
                            <span className="text-[9px] font-bold text-white tracking-widest">BHIM</span>
                          </div>
                          <div className="w-full flex justify-between">
                            <div className="w-10 h-10 border-4 border-white"></div>
                            <div className="w-10 h-10 bg-white rounded-xs"></div>
                          </div>
                        </div>
                      </div>

                      {/* Fake Supported Apps Ribbon */}
                      <div className="flex space-x-3 items-center opacity-60 my-1">
                        <span className="text-[10px] font-bold px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded">GPay</span>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 bg-purple-100 text-purple-700 rounded">PhonePe</span>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 bg-cyan-100 text-cyan-700 rounded">Paytm</span>
                      </div>
                      
                      <p className="text-xs text-center font-medium text-gray-500 px-4">
                        Open any UPI app like PhonePe, GooglePay, or Paytm to scan and verify.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4 py-2">
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Virtual Payment Address (UPI ID)</label>
                        <div className="relative">
                          <input 
                            type="text"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                            placeholder="success@okaxis"
                            className="w-full p-3.5 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 font-mono text-sm tracking-wide"
                          />
                          <span className="absolute right-3 top-3.5 text-xs text-gray-400 font-bold">@upi</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 italic bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                        💡 Tip: Enter any demo ID containing '@' (e.g., test@paytm) to verify this simulator.
                      </p>
                    </div>
                  )}

                  {/* Actions buttons */}
                  <div className="flex gap-3 pt-4 mt-6 border-t border-gray-100">
                    <button 
                      onClick={() => setShowPaymentModal(false)}
                      className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl text-gray-600 font-bold transition text-sm"
                    >
                      Cancel Payment
                    </button>
                    <button 
                      onClick={handleDummyPaymentSuccess}
                      className="flex-1 py-3 bg-green-600 hover:bg-green-700 rounded-xl text-white font-extrabold transition text-sm shadow-md"
                    >
                      ⚡ Success Pay ₹99
                    </button>
                  </div>
                </>
              )}
            </div>
            
            {/* Footer Trust Badge */}
            <div className="bg-gray-50 p-3 text-center border-t border-gray-100">
              <p className="text-[10px] text-gray-400 font-medium">🛡️ 128-bit SSL Encryption Powered by MockGateway</p>
            </div>

          </div>
        </div>
      )}


      {/* --- CANCEL SUBSCRIPTION MODAL --- */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm border border-gray-200 shadow-2xl p-6 text-center">
            
            {isProcessing ? (
              <div className="py-6 flex flex-col items-center justify-center space-y-4">
                <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm font-bold text-gray-700">Canceling subscription plan...</p>
              </div>
            ) : (
              <>
                <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ⚠️
                </div>
                
                <h3 className="text-lg font-black text-gray-900">Cancel Premium Club?</h3>
                <p className="text-xs text-gray-500 mt-2 px-2">
                  Are you sure you want to end your subscription? You will instantly lose access to premium post layouts and priority perks.
                </p>

                <div className="flex gap-3 mt-6">
                  <button 
                    onClick={() => setShowCancelModal(false)}
                    className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-gray-700 font-bold text-sm transition"
                  >
                    Keep Premium ✨
                  </button>
                  <button 
                    onClick={handleCancelSubscription}
                    className="flex-1 py-2.5 bg-red-500 hover:bg-red-600 rounded-xl text-white font-bold text-sm transition shadow-sm"
                  >
                    Yes, Cancel It
                  </button>
                </div>
              </>
            )}

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;