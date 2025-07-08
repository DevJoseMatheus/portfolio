import { useState } from 'react';
import { ChevronDown, ChevronRight, Folder, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [expandedFolders, setExpandedFolders] = useState({
    'projects': true,
    'react': true,
    'html': true,
    'tailwindcss': true,
    'css': false,
    'vue': false,
    'angular': false,
    'gatsby': false,
    'flutter': false
  });

  const [selectedFilters, setSelectedFilters] = useState(['React']);

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folder]: !prev[folder]
    }));
  };

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const projects = [
    {
      id: 1,
      title: '',
      description: '',
      link: '',
      image: '',
      technologies: ['', ''],
      category: ''
    },
  ];

  const filteredProjects = selectedFilters.length > 0 
    ? projects.filter(project => 
        selectedFilters.some(filter => project.technologies.includes(filter))
      )
    : projects;

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-gray-900">
      {/* Sidebar */}
      <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col">
        {/* Header */}
        <div className="px-4 py-4 border-b border-gray-700">
          <h3 className="text-white font-semibold text-sm">_Projetos</h3>
        </div>
        
        {/* Filter Tree */}
        <div className="flex-1 p-3 text-sm overflow-y-auto">
          <div className="space-y-2">
            {/* Projects Folder */}
            <div>
              <button
                onClick={() => toggleFolder('projects')}
                className="flex items-center space-x-2 w-full text-left hover:bg-gray-700/50 p-2 rounded transition-colors"
              >
                {expandedFolders['projects'] ? 
                  <ChevronDown size={16} className="text-gray-400" /> : 
                  <ChevronRight size={16} className="text-gray-400" />
                }
                <Folder size={16} className="text-orange-400" />
                <span className="text-orange-400 font-medium">Projetos</span>
              </button>
              
              {expandedFolders['projects'] && (
                <div className="ml-6 space-y-1 mt-2">
                  {/* React */}
                  <div>
                    <button
                      onClick={() => toggleFolder('react')}
                      className="flex items-center space-x-2 w-full text-left hover:bg-gray-700/50 p-2 rounded transition-colors"
                    >
                      {expandedFolders['react'] ? 
                        <ChevronDown size={16} className="text-gray-400" /> : 
                        <ChevronRight size={16} className="text-gray-400" />
                      }
                      <Folder size={16} className="text-orange-400" />
                      <span className="text-orange-400">React</span>
                    </button>
                    
                    {expandedFolders['react'] && (
                      <div className="ml-6 space-y-1 mt-1">
                        <label className="flex items-center space-x-2 p-2 hover:bg-gray-700/50 rounded cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedFilters.includes('React')}
                            onChange={() => toggleFilter('React')}
                            className="w-4 h-4 text-orange-400 bg-gray-700 border-gray-600 rounded focus:ring-orange-400 focus:ring-2"
                          />
                          <span className="text-gray-300">React</span>
                        </label>
                      </div>
                    )}
                  </div>
                  
                  {/* HTML */}
                  <div>
                    <button
                      onClick={() => toggleFolder('html')}
                      className="flex items-center space-x-2 w-full text-left hover:bg-gray-700/50 p-2 rounded transition-colors"
                    >
                      {expandedFolders['html'] ? 
                        <ChevronDown size={16} className="text-gray-400" /> : 
                        <ChevronRight size={16} className="text-gray-400" />
                      }
                      <Folder size={16} className="text-orange-400" />
                      <span className="text-orange-400">HTML</span>
                    </button>

                    {expandedFolders['html'] && (
                      <div className="ml-6 space-y-1 mt-1">
                        <label className="flex items-center space-x-2 p-2 hover:bg-gray-700/50 rounded cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedFilters.includes('html')}
                            onChange={() => toggleFilter('html')}
                            className="w-4 h-4 text-orange-400 bg-gray-700 border-gray-600 rounded focus:ring-orange-400 focus:ring-2"
                          />
                          <span className="text-gray-300">HTML</span>
                        </label>
                      </div>
                    )}
                  </div>
                  
                  {/* CSS */}
                  <div>
                    <button
                      onClick={() => toggleFolder('css')}
                      className="flex items-center space-x-2 w-full text-left hover:bg-gray-700/50 p-2 rounded transition-colors"
                    >
                      {expandedFolders['css'] ? 
                        <ChevronDown size={16} className="text-gray-400" /> : 
                        <ChevronRight size={16} className="text-gray-400" />
                      }
                      <Folder size={16} className="text-orange-400" />
                      <span className="text-orange-400">Css</span>
                    </button>

                    {expandedFolders['css'] && (
                      <div className="ml-6 space-y-1 mt-1">
                        <label className="flex items-center space-x-2 p-2 hover:bg-gray-700/50 rounded cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedFilters.includes('css')}
                            onChange={() => toggleFilter('css')}
                            className="w-4 h-4 text-orange-400 bg-gray-700 border-gray-600 rounded focus:ring-orange-400 focus:ring-2"
                          />
                          <span className="text-gray-300">Css</span>
                        </label>
                      </div>
                    )}
                  </div>
                  
                  {/* tailwindcss */}
                  <div>
                    <button
                      onClick={() => toggleFolder('tailwindcss')}
                      className="flex items-center space-x-2 w-full text-left hover:bg-gray-700/50 p-2 rounded transition-colors"
                    >
                      {expandedFolders['tailwindcss'] ? 
                        <ChevronDown size={16} className="text-gray-400" /> : 
                        <ChevronRight size={16} className="text-gray-400" />
                      }
                      <Folder size={16} className="text-orange-400" />
                      <span className="text-orange-400">Tailwindcss</span>
                    </button>

                    {expandedFolders['tailwindcss'] && (
                      <div className="ml-6 space-y-1 mt-1">
                        <label className="flex items-center space-x-2 p-2 hover:bg-gray-700/50 rounded cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedFilters.includes('tailwindcss')}
                            onChange={() => toggleFilter('tailwindcss')}
                            className="w-4 h-4 text-orange-400 bg-gray-700 border-gray-600 rounded focus:ring-orange-400 focus:ring-2"
                          />
                          <span className="text-gray-300">TailwindCss</span>
                        </label>
                      </div>
                    )}
                  </div>

                  {/* Vue */}
                  <div>
                    <button
                      onClick={() => toggleFolder('vue')}
                      className="flex items-center space-x-2 w-full text-left hover:bg-gray-700/50 p-2 rounded transition-colors"
                    >
                      {expandedFolders['vue'] ? 
                        <ChevronDown size={16} className="text-gray-400" /> : 
                        <ChevronRight size={16} className="text-gray-400" />
                      }
                      <Folder size={16} className="text-orange-400" />
                      <span className="text-orange-400">Vue</span>
                    </button>

                    {expandedFolders['vue'] && (
                      <div className="ml-6 space-y-1 mt-1">
                        <label className="flex items-center space-x-2 p-2 hover:bg-gray-700/50 rounded cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedFilters.includes('vue')}
                            onChange={() => toggleFilter('vue')}
                            className="w-4 h-4 text-orange-400 bg-gray-700 border-gray-600 rounded focus:ring-orange-400 focus:ring-2"
                          />
                          <span className="text-gray-300">Vue</span>
                        </label>
                      </div>
                    )}
                  </div>
                  
                  {/* Angular */}
                  <div>
                    <button
                      onClick={() => toggleFolder('angular')}
                      className="flex items-center space-x-2 w-full text-left hover:bg-gray-700/50 p-2 rounded transition-colors"
                    >
                      {expandedFolders['angular'] ? 
                        <ChevronDown size={16} className="text-gray-400" /> : 
                        <ChevronRight size={16} className="text-gray-400" />
                      }
                      <Folder size={16} className="text-orange-400" />
                      <span className="text-orange-400">Angular</span>
                    </button>

                    {expandedFolders['angular'] && (
                      <div className="ml-6 space-y-1 mt-1">
                        <label className="flex items-center space-x-2 p-2 hover:bg-gray-700/50 rounded cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedFilters.includes('angular')}
                            onChange={() => toggleFilter('angular')}
                            className="w-4 h-4 text-orange-400 bg-gray-700 border-gray-600 rounded focus:ring-orange-400 focus:ring-2"
                          />
                          <span className="text-gray-300">Angular</span>
                        </label>
                      </div>
                    )}
                  </div>
                  
                  {/* Gatsby */}
                  <div>
                    <button
                      onClick={() => toggleFolder('gatsby')}
                      className="flex items-center space-x-2 w-full text-left hover:bg-gray-700/50 p-2 rounded transition-colors"
                    >
                      {expandedFolders['gatsby'] ? 
                        <ChevronDown size={16} className="text-gray-400" /> : 
                        <ChevronRight size={16} className="text-gray-400" />
                      }
                      <Folder size={16} className="text-orange-400" />
                      <span className="text-orange-400">Gatsby</span>
                    </button>

                    {expandedFolders['gatsby'] && (
                      <div className="ml-6 space-y-1 mt-1">
                        <label className="flex items-center space-x-2 p-2 hover:bg-gray-700/50 rounded cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedFilters.includes('gatsby')}
                            onChange={() => toggleFilter('gatsby')}
                            className="w-4 h-4 text-orange-400 bg-gray-700 border-gray-600 rounded focus:ring-orange-400 focus:ring-2"
                          />
                          <span className="text-gray-300">Gatsby</span>
                        </label>
                      </div>
                    )}
                  </div>
                  
                  {/* Flutter */}
                  <div>
                    <button
                      onClick={() => toggleFolder('flutter')}
                      className="flex items-center space-x-2 w-full text-left hover:bg-gray-700/50 p-2 rounded transition-colors"
                    >
                      {expandedFolders['flutter'] ? 
                        <ChevronDown size={16} className="text-gray-400" /> : 
                        <ChevronRight size={16} className="text-gray-400" />
                      }
                      <Folder size={16} className="text-orange-400" />
                      <span className="text-orange-400">Flutter</span>
                    </button>

                    {expandedFolders['flutter'] && (
                      <div className="ml-6 space-y-1 mt-1">
                        <label className="flex items-center space-x-2 p-2 hover:bg-gray-700/50 rounded cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedFilters.includes('flutter')}
                            onChange={() => toggleFilter('flutter')}
                            className="w-4 h-4 text-orange-400 bg-gray-700 border-gray-600 rounded focus:ring-orange-400 focus:ring-2"
                          />
                          <span className="text-gray-300">Flutter</span>
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 bg-gray-900">
        {/* Header with breadcrumb */}
        <div className="border-b border-gray-700 p-4">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-white">Projetos</span>
            {selectedFilters.length > 0 && (
              <>
                <span className="text-gray-500">/</span>
                <span className="text-orange-400">{selectedFilters.join(', ')}</span>
              </>
            )}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300 hover:shadow-xl group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-blue-400 font-semibold text-lg group-hover:text-blue-300 transition-colors">
                      Projetos {project.id} // {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Button */}
                  <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded transition-colors duration-200 flex items-center justify-center space-x-2 group">
                    <a href={project.link} className='text-sm font-medium'>Ver-Projeto</a>
                    <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Nenhum projeto encontrado para os filtros selecionados.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;