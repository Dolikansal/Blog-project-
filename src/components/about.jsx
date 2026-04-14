import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-green-600 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About BLOGING World</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto px-4">
          A platform built for creators, by creators. We believe in the power of sharing knowledge.
        </p>
      </section>

      {/* Content Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-green-600 pl-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              GreenBlog ek aisa space hai jahan technology, coding, aur life experiences ko ek saath laya jata hai. 
              Mera goal hai ki har student aur developer ke paas ek simple aur clean platform ho jahan wo apni voice share kar sakein.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Build with the **MERN Stack**, this project focuses on performance, security, and a seamless user experience.
            </p>
          </div>

          {/* Right Side: Features List */}
          <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
            <h3 className="text-xl font-bold text-green-700 mb-4">What makes us different?</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="bg-green-600 text-white rounded-full p-1 text-xs">✓</span>
                <span className="text-gray-700 font-medium">JWT Secure Authentication</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-green-600 text-white rounded-full p-1 text-xs">✓</span>
                <span className="text-gray-700 font-medium">Clean & Responsive UI/UX</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-green-600 text-white rounded-full p-1 text-xs">✓</span>
                <span className="text-gray-700 font-medium">Built with React & Vite</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-green-600 text-white rounded-full p-1 text-xs">✓</span>
                <span className="text-gray-700 font-medium">Community Driven Content</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Creator Section (Quick Bio) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">The Developer</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto italic">
            "I am a passionate Full Stack Developer currently exploring the depths of web development. 
            GreenBlog is my attempt to organize information beautifully."
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;