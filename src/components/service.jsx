import React from 'react';
import { PenTool, Users, Zap, ShieldCheck } from 'lucide-react'; // Icons ke liye

const Services = () => {
  const serviceList = [
    {
      title: "Blog Writing",
      description: "Humaray platform par aap apne thoughts aur tech stories ko beautifully likh aur publish kar sakte hain.",
      icon: <PenTool className="text-green-600" size={40} />,
    },
    {
      title: "Tech Community",
      description: "Baki developers ke sath connect karein, unke blogs padhein aur knowledge share karein.",
      icon: <Users className="text-green-600" size={40} />,
    },
    {
      title: "Fast Performance",
      description: "Vite aur React ki power se humara blog super fast load hota hai, taaki user experience seamless rahe.",
      icon: <Zap className="text-green-600" size={40} />,
    },
    {
      title: "Secure Platform",
      description: "Aapka data aur blogs secure rahenge humare JWT-based authentication system ke sath.",
      icon: <ShieldCheck className="text-green-600" size={40} />,
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-green-600">Services</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hum provide karte hain ek modern space jahan writing aur technology ka perfect blend milta hai.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((service, index) => (
            <div 
              key={index} 
              className="p-8 bg-green-50 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-green-600 rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to start your blogging journey?</h2>
          <p className="mb-8 opacity-90">Join GreenBlog today and share your first story with the world.</p>
          <button className="bg-white text-green-600 px-10 py-3 rounded-full font-bold hover:bg-gray-100 transition">
            Get Started Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default Services;