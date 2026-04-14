import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Github, Mail, Feather } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 border-t-2 border-green-500 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Feather className="text-green-600" size={28} />
              <span className="text-2xl font-bold text-white tracking-tight">BLOGING World</span>
            </Link>
            <p className="text-white text-sm leading-relaxed">
              A premium space for developers and writers to share knowledge and grow together in the world of technology.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-green-300 font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white text-sm">
              <li><Link to="/" className="hover:text-green-300 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-green-300 transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-green-300 transition">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-green-300 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-green-300 font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-white text-sm">
              <li><Link to="/create-post" className="hover:text-green-300 transition">Write a Blog</Link></li>
              <li><Link to="/login" className="hover:text-green-300 transition">Join Community</Link></li>
              <li className="hover:text-green-300 cursor-pointer transition">Privacy Policy</li>
              <li className="hover:text-green-300 cursor-pointer transition">Terms of Service</li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-green-300 font-bold mb-6">Newsletter</h4>
            <p className="text-white text-sm mb-4">Stay updated with the latest tech trends.</p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500 text-sm"
              />
              <button className="bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-md">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Socials & Copyright */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white text-xs">
            © 2026 GreenBlog. Built with <span className="text-green-600">❤</span> by Kurukshetra Student.
          </p>
          
          <div className="flex items-center gap-6 text-white">
            <a href="#" className="hover:text-green-600 transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-green-600 transition"><Twitter size={20} /></a>
            <a href="#" className="hover:text-green-600 transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-green-600 transition"><Github size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;