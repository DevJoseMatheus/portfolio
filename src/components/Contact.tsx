import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Folder, Mail, Phone, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [expandedFolders, setExpandedFolders] = useState({
    'contacts': true,
    'find-me-also-in': true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folder]: !prev
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contacts = [
    {
      icon: <Mail size={16} className="text-gray-400" />,
      label: 'dev.josematheus@gmail.com',
      type: 'email'
    },
    {
      icon: <Phone size={16} className="text-gray-400" />,
      label: '(87) 9 8831-4622',
      type: 'phone'
    }
  ];

  const socialLinks = [
    {
      icon: <ExternalLink size={16} className="text-gray-400" />,
      label: 'YouTube',
      url: 'https://www.youtube.com/@josematheus-dev'
    },
    {
      icon: <ExternalLink size={16} className="text-gray-400" />,
      label: 'Instagram',
      url: 'https://www.instagram.com/ujosematheus/'
    },
    {
      icon: <ExternalLink size={16} className="text-gray-400" />,
      label: 'Twitter',
      url: 'https://x.com/matheus31042002'
    }
  ];

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-gray-900">
      {/* Sidebar */}
      <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col">
        {/* Header */}
        <div className="px-4 py-4 border-b border-gray-700">
          <h3 className="text-white font-semibold text-sm">_Contato</h3>
        </div>
        
        {/* Contact Tree */}
        <div className="flex-1 p-3 text-sm overflow-y-auto">
          <div className="space-y-2">
            {/* Contacts Folder */}
            <div>
              <button
                onClick={() => toggleFolder('contacts')}
                className="flex items-center space-x-2 w-full text-left hover:bg-gray-700/50 p-2 rounded transition-colors"
              >
                {expandedFolders['contacts'] ? 
                  <ChevronDown size={16} className="text-gray-400" /> : 
                  <ChevronRight size={16} className="text-gray-400" />
                }
                <Folder size={16} className="text-orange-400" />
                <span className="text-orange-400 font-medium">Contato</span>
              </button>
              
              {expandedFolders['contacts'] && (
                <div className="ml-6 space-y-1 mt-2">
                  {contacts.map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-2 hover:bg-gray-700/50 rounded cursor-pointer text-gray-300"
                    >
                      {contact.icon}
                      <span className="text-sm">{contact.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Find me also in Folder */}
            <div>
              <button
                onClick={() => toggleFolder('find-me-also-in')}
                className="flex items-center space-x-2 w-full text-left hover:bg-gray-700/50 p-2 rounded transition-colors"
              >
                {expandedFolders['find-me-also-in'] ? 
                  <ChevronDown size={16} className="text-gray-400" /> : 
                  <ChevronRight size={16} className="text-gray-400" />
                }
                <Folder size={16} className="text-orange-400" />
                <span className="text-orange-400 font-medium">encontre-me-também-em</span>
              </button>
              
              {expandedFolders['find-me-also-in'] && (
                <div className="ml-6 space-y-1 mt-2">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="flex items-center space-x-2 p-2 hover:bg-gray-700/50 rounded cursor-pointer text-gray-300 hover:text-white transition-colors"
                    >
                      {link.icon}
                      <span className="text-sm">{link.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 bg-gray-900 flex">
        {/* Contact Form */}
        <div className="flex-1 p-8">
          <div className="max-w-2xl">
            <div className="mb-8">
              <h2 className="text-white text-2xl font-bold mb-2">_Contato</h2>
              <p className="text-gray-400">
                Tenho interesse em oportunidades de trabalho freelance. No entanto, se tiver alguma outra solicitação ou dúvida, não hesite em entrar em contato comigo.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                  _Nome:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400 transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  _Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400 transition-colors"
                  placeholder="Seu e-mail"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                  _mensagem:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400 transition-colors resize-none"
                  placeholder="Sua mensagem aqui..."
                />
              </div>
              
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-medium transition-colors duration-200"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;