import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-blue-700 transition-colors"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="bg-white p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-700 font-medium">Email</h4>
                    <a href="mailto:tejashwanidixit77@gmail.com" className="text-blue-600 hover:underline">
                      tejashwanidixit77@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-700 font-medium">Phone</h4>
                    <a href="tel:+91 6394650153" className="text-blue-600 hover:underline">
                      +91-6394650153
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-700 font-medium">Location</h4>
                    <p>Kanpur,Uttar Pradesh,India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md h-64">
              <h3 className="text-xl font-bold mb-4">Find Me Here</h3>
              <div className="w-full h-full bg-gray-200 rounded-md overflow-hidden">
                <img 
                  src="https://maps.googleapis.com/maps/api/staticmap?center=Guna,Madhya+Pradesh,India&zoom=13&size=600x300&key=YOUR_API_KEY" 
                  alt="Map showing Kanpur, UP, India" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;