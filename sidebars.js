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
      label: 'DevTools',
      link: {
        type: 'generated-index',
          description: '5 minutos para aprender los conceptos más importantes del inspector',
          slug: '/herramientas-dev', // Opcional: la ruta personalizada
      },
      customProps: {
        icon: 'fa:FaFolderOpen',
      },
      items: [
        {
          type: 'doc',
          id: 'inspector/elementos',
          label: 'Elementos',
          customProps: {
            icon: 'fa:FaCode', // Código: HTML, DOM
          },
        },
        {
          type: 'doc',
          id: 'inspector/consola',
          label: 'Consola',
          customProps: {
            icon: 'bs:BsFillTerminalFill', // Terminal = consola
          },
        },
        {
          type: 'doc',
          id: 'inspector/fuentes',
          label: 'Fuentes',
          customProps: {
            icon: 'fa:FaFont', // Letra = fuentes
          },
        },
        {
          type: 'doc',
          id: 'inspector/red',
          label: 'Red',
          customProps: {
            icon: 'fa:FaNetworkWired', // Cable de red
          },
        },
        {
          type: 'doc',
          id: 'inspector/rendimiento',
          label: 'Rendimiento',
          customProps: {
            icon: 'fa:FaTachometerAlt', // Velocímetro
          },
        },
        {
          type: 'doc',
          id: 'inspector/memoria',
          label: 'Memoria',
          customProps: {
            icon: 'fa:FaMicrochip', // Memoria / chip
          },
        },
        {
          type: 'doc',
          id: 'inspector/aplicacion',
          label: 'Aplicación',
          customProps: {
            icon: 'fa:FaCubes', // Aplicaciones o módulos
          },
        },
        {
          type: 'doc',
          id: 'inspector/lightHouse',
          label: 'Light House',
          customProps: {
            icon: 'fa:FaLightbulb', // Farol o idea
          },
        },
        {
          type: 'doc',
          id: 'inspector/grabadora',
          label: 'Grabadora',
          customProps: {
            icon: 'fa:FaVideo', // Cámara de grabación
          },
        }
      ],
    },
  ],
};

export default sidebars;
