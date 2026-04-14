import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Get In <span className="text-green-600">Touch</span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have questions or want to collaborate? Drop us a message and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-6 bg-green-50 rounded-2xl flex items-center gap-4 border border-green-100">
              <div className="bg-green-600 p-3 rounded-lg text-white">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Email Us</h3>
                <p className="text-gray-600 text-sm">support@greenblog.com</p>
              </div>
            </div>

            <div className="p-6 bg-green-50 rounded-2xl flex items-center gap-4 border border-green-100">
              <div className="bg-green-600 p-3 rounded-lg text-white">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Our Location</h3>
                <p className="text-gray-600 text-sm">Kurukshetra University, Haryana</p>
              </div>
            </div>

            <div className="p-6 bg-green-50 rounded-2xl flex items-center gap-4 border border-green-100">
              <div className="bg-green-600 p-3 rounded-lg text-white">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Phone</h3>
                <p className="text-gray-600 text-sm">+91 98765 43210</p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-xl">
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea 
                  rows="5" 
                  placeholder="How can we help you?" 
                  className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="md:col-span-2 bg-green-600 text-white font-bold py-4 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;