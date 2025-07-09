# 🚀 Developer Portfolio com Snake Game

Um portfólio moderno e interativo para desenvolvedores, desenvolvido com React, TypeScript e TailwindCSS. Apresenta um design inspirado no VS Code, com um jogo da cobrinha totalmente funcional e diversas seções temáticas com informações profissionais.

![Visualização do portfólio](https://i.postimg.cc/50XhgqZV/Captura-de-tela-2025-07-09-111616.png)

## ✨ características

### 🎮 Elementos interativos

- **Snake Game**:  Jogo de cobra totalmente jogável com controles de teclado
- **Dynamic Navigation**: Transições suaves entre seções
- **Respomsive Design**:  Otimizado para todos os tamanhos de dispositivos
- **VS Code Tema**: Tema escuro profissional inspirado no VS Code

### 📱 Seções

- **_Home**: Seção de boas-vindas com conteúdo de heróis e jogo
- **_Sobre-mim**: Exibição de informações pessoais no estilo do explorador de arquivos
- **_projetos**: Apresentação de projetos filtráveis ​​com tags de tecnologia
- **_contato**: Formulário de contato interativo 

### 🛠️ Recursos técnicos

- ⚡ **Vite**: Processo de desenvolvimento e construção extremamente rápido
- 🔧 **TypeScript**: Segurança de tipo completo e melhor experiência do desenvolvedor
- 🎨 **Tailwind CSS**: Framework CSS utilitário para estilo rápido
- 📦 **Component Architecture**: Componentes React modulares e reutilizáveis
- 🎯 **Modern Hooks**: Utiliza os padrões mais recentes do React e as melhores práticas

## 🚀 Começando

### Pré-requisitos
- Node.js (versão 16 ou superior)
- gerenciador de pacotes npm ou yarn

### Instalação

1. **Clonar o repositório**
    ```bash
    git clone https://github.com/DevJoseMatheus/portfolio.git
    cd portfolio
    ```

2. **Instalar dependências**
    ```bash
    npm install
    ```

3. **Iniciar servidor de desenvolvimento**
    ```bash
    npm run dev
    ```

4. **Abrir no navegador**

    Navigate to `http://localhost:5173` 

## 🏗️ Estrutura do Projeto

```
src/
├── components/           # React components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Welcome section
│   ├── SnakeGame.tsx    # Interactive Snake game
│   ├── AboutMe.tsx      # About section with file explorer
│   ├── Projects.tsx     # Projects showcase
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Site footer
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🎮 Controles do jogo Snake

- **Teclas de seta**: Controlam a direção da cobra
- **Iniciar/Pausar**: Alternar estado do jogo
- **Pular**: Reiniciar jogo
- **Objetivo**: Coletar alimentos para crescer e aumentar a pontuação

## 🛠️ Tech Stack

### Frontend

- **React 18** - React moderno com ganchos e componentes funcionais
- **TypeScript** - Verificação de tipo estático para melhor qualidade de código
- **Tailwind CSS** - Framework CSS utilitário em primeiro lugar
- **Lucide React** - Ícones lindos e personalizáveis

### Development Tools

- **Vite** - Ferramentas de frontend de última geração
- **ESLint** - Linting e formatação de código
- **PostCSS** - Processamento CSS com Autoprefixer

### Styling & Design

- **Fire Code Font** - Fonte monoespaçada para aparência de código
- **Dark Theme** - Esquema profissional de cores escuras
- **Responsive Grid** - Design responsivo que prioriza dispositivos móveis
- **Smooth Animations** - Transições CSS e efeitos de foco

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---------|-------------|
| `npm run dev` | Inicie o servidor de desenvolvimento com hot reload |
| `npm run build` | Crie um pacote de produção otimizado |
| `npm run preview` | Pré-visualizar a produção localmente |
| `npm run lint` | Execute o ESLint para verificações de qualidade do código |

## 🎨 Personalização

### Personalizando Conteúdo

1. **Atualizar informações pessoais** em `src/components/Hero.tsx`
2. **Modificar sobre o conteúdo** em `src/components/AboutMe.tsx`
3. **Adicione seus projetos** em `src/components/Projects.tsx`
4. **Atualizar detalhes de contato** em `src/components/Contact.tsx`

### Personalização de estilo

- **Cores**: Modificar classes de cores do Tailwind em todos os componentes
- **Fontes**: Atualizar importações de fontes em `src/index.css`
- **Layout**: Ajuste as classes de grade e flexbox nos componentes
- **Animações**: personalize classes de transição e durações

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify

1. Construa o projeto: `npm run build`
2. Carregar o `dist` pasta para Netlify
3. Configurar definições de compilação: Comando de compilação `npm run build`, Publicar diretório `dist`

### Deploy to Vercel

1. Conecte seu repositório GitHub ao Vercel
2. O Vercel detectará automaticamente a configuração do Vite
3. Implantar com configurações padrão

## 🤝 Contribuindo

1. Bifurque o repositório
2. Crie um recurso branch: `git checkout -b feature/amazing-feature`
3. Commit mudanças: `git commit -m 'Add amazing feature'`
4. Push para branch: `git push origin feature/amazing-feature`
5. Abra uma solicitação pull

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🙏 Agradecimentos

- Inspiração de design na interface do VS Code
- Ícones fornecidos por [Lucide React](https://lucide.dev/)
- Imagens de [Pexels](https://www.pexels.com/)
- Construído com [Vite](https://vitejs.dev/) e [React](https://reactjs.org/)

---

**Feitor por José Matheus**

*Sinta-se à vontade para marcar este repositório com uma estrela se ele for útil para você*