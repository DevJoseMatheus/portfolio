import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Folder, File, Mail, Phone, X, Code, GitBranch } from 'lucide-react';

const AboutMe = () => {
  const [expandedFolders, setExpandedFolders] = useState({
    'personal-info': true,
    'bio': true,
    'interests': true,
    'education': true,
    'highschool': true,
    'university': true,
    'contacts': true
  });

  const [selectedFile, setSelectedFile] = useState('email');
  const [openTabs, setOpenTabs] = useState(['email']);
  const [typingText, setTypingText] = useState('');
  const [currentLine, setCurrentLine] = useState(1);

  // Efeito de digitação para o código
  useEffect(() => {
    const content = fileContent[selectedFile as keyof typeof fileContent] || '';
    let index = 0;
    setTypingText('');
    
    const timer = setInterval(() => {
      if (index < content.length) {
        setTypingText(content.slice(0, index + 1));
        if (content[index] === '\n') {
          setCurrentLine(prev => prev + 1);
        }
        index++;
      } else {
        clearInterval(timer);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [selectedFile]);

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folder]: !prev
    }));
  };

  const openFile = (fileName: string) => {
    setSelectedFile(fileName);
    setCurrentLine(1);
    if (!openTabs.includes(fileName)) {
      setOpenTabs(prev => [...prev, fileName]);
    }
  };

  const closeTab = (fileName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newTabs = openTabs.filter(tab => tab !== fileName);
    setOpenTabs(newTabs);
    
    if (selectedFile === fileName && newTabs.length > 0) {
      setSelectedFile(newTabs[newTabs.length - 1]);
    }
  };

  const fileContent = {
    bio: `/**
* 🚀 Sobre José Matheus
*
* Desenvolvedor Full-Stack apaixonado com mais de 1 mes de experiência
* criando aplicações web lindas e escaláveis.
*
* 💡 Especialização:
* - Ecossistema React.js e Next.js
* - TypeScript e JavaScript Moderno
* - Backends Node.js
*
* 🎯 Missão: Construindo experiências digitais que importam
*
* "Código é poesia escrita em lógica"
*/`,
    interests: `/**
* 🎨 Interesses e Paixões
*
* 💻 Tecnologia:
* - Desenvolvimento e Arquitetura Web
* - Desenvolvimento de Aplicativos Mobile (React Native)
* - DevOps e Automação
*
* 🎮 Hobbies:
* - Jogos e Desenvolvimento de Jogos
* - Fotografia e Arte Digital
* - Contribuição em Código Aberto
* - Blog de Tecnologia e Mentoria
*
* 🌍 Estilo de Vida:
* - Viagens e Intercâmbio Cultural
* - Aprendizado Contínuo
* - Construção de Comunidade
*/`,
    highschool: `/**
* 🏫 Excelência no Ensino Médio
*
* 🏆 Conquistas:
* - Orador da turma (GPA 4.0)
* - Sociedade Nacional de Honra
* - Vencedor da Olimpíada de Matemática e Ciências
*
* 💻 Programação Inicial:
* - Primeiro site aos 22 anos
*/`,
    university: `/**
* 🎓 Experiência Universitária
*
* 📖 Excelência Acadêmica:
* - Graduação em Ciência da Computação
* - Lista do Reitor (6 semestres)
* - Pesquisa em Tecnologias Web
*/`,
    email: `/**
* 📧 Contato por e-mail
*
* Principal: dev.josematheus@gmail.com
*
* 📱 Tempo de resposta: Geralmente em até 24 horas
* 🌍 Fuso horário: Brasília (BRT)
*
* Sinta-se à vontade para entrar em contato para:
* - Colaborações em projetos
*/`,
    phone: `/**
* 📞 Contato por telefone
*
* Celular: (87) 9 8831-4622
*
* 🕐 Horário de atendimento:
* - Segunda a sexta: 9h - 18h (horário padrão do leste dos EUA)
* - Fins de semana: com hora marcada
*
* 💬 Métodos de contato preferenciais:
* 1. E-mail (resposta mais rápida)
* 2. Mensagem no Twitter
*
* 🌐 Encontre-me também em:
* - GitHub: @DevJoseMatheus
* - Twitter: @DevJosematheus
*/`
};

  const getFileIcon = (fileName: string) => {
    if (fileName === 'email') return <Mail size={14} className="text-blue-400" />;
    if (fileName === 'phone') return <Phone size={14} className="text-green-400" />;
    return <File size={14} className="text-gray-400" />;
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-gray-900">
      {/* Sidebar com gradiente sutil */}
      <div className="w-80 bg-gradient-to-b from-gray-800 to-gray-850 border-r border-gray-700 flex flex-col shadow-2xl">
        {/* Header melhorado */}
        <div className="px-4 py-4 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-gray-750">
          <div className="flex items-center space-x-2">
            <Code size={16} className="text-blue-400" />
            <h3 className="text-white font-semibold text-sm">_Sobre-mim</h3>
            <div className="flex-1"></div>
            <GitBranch size={14} className="text-gray-400" />
          </div>
        </div>
        
        {/* File Tree com animações */}
        <div className="flex-1 p-3 text-sm overflow-y-auto">
          <div className="space-y-2">
            {/* Personal Info Folder */}
            <div className="group">
              <button
                onClick={() => toggleFolder('personal-info')}
                className="flex items-center space-x-2 w-full text-left hover:bg-gray-700/50 p-2 rounded-lg transition-all duration-200 group-hover:shadow-lg"
              >
                {expandedFolders['personal-info'] ? 
                  <ChevronDown size={16} className="text-gray-400 transition-transform duration-200" /> : 
                  <ChevronRight size={16} className="text-gray-400 transition-transform duration-200" />
                }
                <Folder size={16} className="text-orange-400" />
                <span className="text-orange-400 font-medium">Informações-Pessoais</span>
                <div className="flex-1"></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </button>
              
              {expandedFolders['personal-info'] && (
                <div className="ml-6 space-y-1 mt-2 animate-in slide-in-from-top-2 duration-300">
                  {/* Bio Folder */}
                  <div className="group">
                    <button
                      onClick={() => toggleFolder('bio')}
                      className="flex items-center space-x-2 w-full text-left hover:bg-gray-700/50 p-2 rounded-lg transition-all duration-200"
                    >
                      {expandedFolders['bio'] ? 
                        <ChevronDown size={16} className="text-gray-400" /> : 
                        <ChevronRight size={16} className="text-gray-400" />
                      }
                      <Folder size={16} className="text-orange-400" />
                      <span className="text-orange-400">Bio</span>
                    </button>
                    
                    {expandedFolders['bio'] && (
                      <div className="ml-6 mt-1">
                        <button
                          onClick={() => openFile('bio')}
                          className={`flex items-center space-x-2 w-full text-left p-2 rounded-lg transition-all duration-200 ${
                            selectedFile === 'bio' 
                              ? 'bg-blue-600/20 text-white border border-blue-500/30 shadow-lg' 
                              : 'hover:bg-gray-700/50 text-gray-300'
                          }`}
                        >
                          <File size={14} className="text-gray-400" />
                          <span className="text-sm">Bio.txt</span>
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {/* Interests Folder */}
                  <div>
                    <button
                      onClick={() => toggleFolder('interests')}
                      className="flex items-center space-x-2 w-full text-left hover:bg-gray-700/50 p-2 rounded-lg transition-all duration-200"
                    >
                      {expandedFolders['interests'] ? 
                        <ChevronDown size={16} className="text-gray-400" /> : 
                        <ChevronRight size={16} className="text-gray-400" />
                      }
                      <Folder size={16} className="text-orange-400" />
                      <span className="text-orange-400">Interesses</span>
                    </button>
                    
                    {expandedFolders['interests'] && (
                      <div className="ml-6 mt-1">
                        <button
                          onClick={() => openFile('interests')}
                          className={`flex items-center space-x-2 w-full text-left p-2 rounded-lg transition-all duration-200 ${
                            selectedFile === 'interests' 
                              ? 'bg-blue-600/20 text-white border border-blue-500/30 shadow-lg' 
                              : 'hover:bg-gray-700/50 text-gray-300'
                          }`}
                        >
                          <File size={14} className="text-gray-400" />
                          <span className="text-sm">Interesses.txt</span>
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {/* Education Folder */}
                  <div>
                    <button
                      onClick={() => toggleFolder('education')}
                      className="flex items-center space-x-2 w-full text-left hover:bg-gray-700/50 p-2 rounded-lg transition-all duration-200"
                    >
                      {expandedFolders['education'] ? 
                        <ChevronDown size={16} className="text-gray-400" /> : 
                        <ChevronRight size={16} className="text-gray-400" />
                      }
                      <Folder size={16} className="text-orange-400" />
                      <span className="text-orange-400">educação</span>
                    </button>
                    
                    {expandedFolders['education'] && (
                      <div className="ml-6 space-y-1 mt-1">
                        <button
                          onClick={() => toggleFolder('highschool')}
                          className="flex items-center space-x-2 w-full text-left hover:bg-gray-700/50 p-2 rounded-lg transition-all duration-200"
                        >
                          {expandedFolders['highschool'] ? 
                            <ChevronDown size={16} className="text-gray-400" /> : 
                            <ChevronRight size={16} className="text-gray-400" />
                          }
                          <Folder size={16} className="text-orange-400" />
                          <span className="text-orange-400">Ensino-Médio</span>
                        </button>

                        {expandedFolders['highschool'] && (
                        <div className="ml-6 mt-1">
                          <button
                            onClick={() => openFile('highschool')}
                            className={`flex items-center space-x-2 w-full text-left p-2 rounded-lg transition-all duration-200 ${
                              selectedFile === 'highschool' 
                                ? 'bg-blue-600/20 text-white border border-blue-500/30 shadow-lg' 
                                : 'hover:bg-gray-700/50 text-gray-300'
                            }`}
                          >
                            <File size={14} className="text-gray-400" />
                            <span className="text-sm">EnsinoMédio.txt</span>
                          </button>
                        </div>
                      )}
                        
                        <button
                          onClick={() => toggleFolder('university')}
                          className="flex items-center space-x-2 w-full text-left hover:bg-gray-700/50 p-2 rounded-lg transition-all duration-200"
                        >
                          {expandedFolders['university'] ? 
                            <ChevronDown size={16} className="text-gray-400" /> : 
                            <ChevronRight size={16} className="text-gray-400" />
                          }
                          <Folder size={16} className="text-orange-400" />
                          <span className="text-orange-400">Universidade</span>
                        </button>

                        {expandedFolders['university'] && (
                        <div className="ml-6 mt-1">
                          <button
                            onClick={() => openFile('university')}
                            className={`flex items-center space-x-2 w-full text-left p-2 rounded-lg transition-all duration-200 ${
                              selectedFile === 'university' 
                                ? 'bg-blue-600/20 text-white border border-blue-500/30 shadow-lg' 
                                : 'hover:bg-gray-700/50 text-gray-300'
                            }`}
                          >
                            <File size={14} className="text-gray-400" />
                            <span className="text-sm">Universidade.txt</span>
                          </button>
                        </div>
                      )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            {/* Contacts Folder */}
            <div className="group">
              <button
                onClick={() => toggleFolder('contacts')}
                className="flex items-center space-x-2 w-full text-left hover:bg-gray-700/50 p-2 rounded-lg transition-all duration-200"
              >
                {expandedFolders['contacts'] ? 
                  <ChevronDown size={16} className="text-gray-400" /> : 
                  <ChevronRight size={16} className="text-gray-400" />
                }
                <Folder size={16} className="text-orange-400" />
                <span className="text-orange-400 font-medium">Contatos</span>
                <div className="flex-1"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </button>
              
              {expandedFolders['contacts'] && (
                <div className="ml-6 space-y-1 mt-2">
                  <button
                    onClick={() => openFile('email')}
                    className={`flex items-center space-x-2 w-full text-left p-2 rounded-lg transition-all duration-200 ${
                      selectedFile === 'email' 
                        ? 'bg-blue-600/20 text-white border border-blue-500/30 shadow-lg' 
                        : 'hover:bg-gray-700/50 text-gray-300'
                    }`}
                  >
                    <Mail size={14} className="text-blue-400" />
                    <span className="text-sm">Email.txt</span>
                    {selectedFile === 'email' && (
                      <div className="flex-1"></div>
                    )}
                  </button>
                  
                  <button
                    onClick={() => openFile('phone')}
                    className={`flex items-center space-x-2 w-full text-left p-2 rounded-lg transition-all duration-200 ${
                      selectedFile === 'phone' 
                        ? 'bg-blue-600/20 text-white border border-blue-500/30 shadow-lg' 
                        : 'hover:bg-gray-700/50 text-gray-300'
                    }`}
                  >
                    <Phone size={14} className="text-green-400" />
                    <span className="text-sm">Telefone.txt</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex">
        {/* Code Editor melhorado */}
        <div className="flex-1 bg-gray-900 flex flex-col">
          {/* Tab Bar com gradiente */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-750 border-b border-gray-700 flex items-center shadow-lg">
            {openTabs.map((tab,) => (
              <div
                key={tab}
                onClick={() => setSelectedFile(tab)}
                className={`flex items-center space-x-2 px-4 py-3 border-r border-gray-700 cursor-pointer transition-all duration-200 relative group ${
                  selectedFile === tab 
                    ? 'bg-gray-900 text-white shadow-lg' 
                    : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-750'
                }`}
              >
                {getFileIcon(tab)}
                <span className="text-sm font-medium">{tab}.txt</span>
                {openTabs.length > 1 && (
                  <button
                    onClick={(e) => closeTab(tab, e)}
                    className="text-gray-400 hover:text-red-400 ml-2 p-1 rounded hover:bg-gray-600 transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <X size={12} />
                  </button>
                )}
                {selectedFile === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Code Content com efeito de digitação */}
          <div className="flex-1 p-6 overflow-auto bg-gradient-to-br from-gray-900 to-gray-950">
            <div className="flex">
              {/* Line Numbers melhorados */}
              <div className="text-gray-500 text-sm mr-6 select-none font-mono">
                {typingText.split('\n').map((_, index) => (
                  <div 
                    key={index} 
                    className={`leading-7 text-right pr-3 py-0.5 transition-all duration-200 ${
                      index + 1 === currentLine ? 'text-blue-400 bg-blue-400/10 rounded' : ''
                    }`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
              
              {/* Code com syntax highlighting melhorado */}
              <div className="text-sm leading-7 whitespace-pre font-mono flex-1">
                <div className="text-green-400 relative">
                  {typingText}
                  <span className="animate-pulse text-white">|</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;