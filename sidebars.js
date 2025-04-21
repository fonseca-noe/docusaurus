// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Inicio',
      customProps: {
        icon: 'fa:FaHome', // Ícono para "Inicio"
      },
    },
    {
      type: 'category',
      label: 'Tutorial Básico',
      customProps: {
        icon: 'fa:FaBook', // Ícono para categoría "Tutorial Básico"
      },
      items: [
        {
          type: 'doc',
          id: 'tutorial-basics/create-a-blog-post',
          label: 'Create a Blog Post',
          customProps: {
            icon: 'fa:FaBlog',
          },
        },
        {
          type: 'doc',
          id: 'tutorial-basics/create-a-document',
          label: 'Create a Document',
          customProps: {
            icon: 'fa:FaFileAlt',
          },
        },
        {
          type: 'doc',
          id: 'tutorial-basics/create-a-page',
          label: 'Create a Page',
          customProps: {
            icon: 'fa:FaFileAlt',
          },
        },
        {
          type: 'doc',
          id: 'tutorial-basics/deploy-your-site',
          label: 'Deploy your Site',
          customProps: {
            icon: 'fa:FaRocket',
          },
        },
        {
          type: 'doc',
          id: 'tutorial-basics/markdown-features',
          label: 'Markdown Features',
          customProps: {
            icon: 'fa:FaFileAlt',
          },
        },
        {
          type: 'doc',
          id: 'tutorial-basics/congratulations',
          label: 'Congratulations',
          customProps: {
            icon: 'fa:FaSmile',
          },
        },
      ],
    },
    {
      type: 'category',
      label: 'Extras',
      customProps: {
        icon: 'fa:FaTools', // Ícono para categoría "Extras"
      },
      items: [
        {
          type: 'doc',
          id: 'tutorial-extras/manage-docs-versions',
          label: 'Manage Docs Versions',
          customProps: {
            icon: 'fa:FaCogs',
          },
        },
        {
          type: 'doc',
          id: 'tutorial-extras/translate-your-site',
          label: 'Translate your Site',
          customProps: {
            icon: 'fa:FaLanguage',
          },
        },
      ],
    },
    {
      type: 'category',
      label: 'prueba',
      customProps: {
        icon: 'fa:FaFolderOpen',
      },
      items: [
        {
          type: 'doc',
          id: 'prueba/ejemplo1',
          label: 'Ejemplo 1',
          customProps: {
            icon: 'fa:FaCode',
          },
        },
      ],
    },
  ],
};

export default sidebars;
