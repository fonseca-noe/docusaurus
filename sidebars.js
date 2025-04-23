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
        icon: 'fa:FaHome', 
      },
    },
    {
      type: 'category',
      label: 'DevTools',
      link: {
        type: 'generated-index',
          description: '5 minutos para aprender los conceptos más importantes del inspector',
          slug: '/herramientas-dev', 
      },
      customProps: {
        icon: 'fa:FaFolderOpen',
      },
      items: [
        {
          type: 'doc',
          id: 'inspector/elementos',
          label: 'Interfaz de Elementos',
          customProps: {
            icon: 'fa:FaCode', 
          },
        },
        {
          type: 'doc',
          id: 'inspector/consola',
          label: 'Interfaz de Consola',
          customProps: {
            icon: 'bs:BsFillTerminalFill', 
          },
        },
        {
          type: 'doc',
          id: 'inspector/fuentes',
          label: 'Interfaz de Fuentes',
          customProps: {
            icon: 'fa:FaFont', 
          },
        },
        {
          type: 'doc',
          id: 'inspector/red',
          label: 'Interfaz de Red',
          customProps: {
            icon: 'fa:FaNetworkWired', 
          },
        },
        {
          type: 'doc',
          id: 'inspector/rendimiento',
          label: 'Interfaz de Rendimiento',
          customProps: {
            icon: 'fa:FaTachometerAlt', 
          },
        },
        {
          type: 'doc',
          id: 'inspector/memoria',
          label: 'Interfaz de Memoria',
          customProps: {
            icon: 'fa:FaMicrochip', 
          },
        },
        {
          type: 'doc',
          id: 'inspector/aplicacion',
          label: 'Interfaz de Aplicación',
          customProps: {
            icon: 'fa:FaCubes', 
          },
        },
        {
          type: 'doc',
          id: 'inspector/lightHouse',
          label: 'Interfaz de Light House',
          customProps: {
            icon: 'fa:FaLightbulb', 
          },
        },
        {
          type: 'doc',
          id: 'inspector/grabadora',
          label: 'Interfaz Grabadora',
          customProps: {
            icon: 'fa:FaVideo', 
          },
        }
      ],
    },
  ],
};

export default sidebars;
