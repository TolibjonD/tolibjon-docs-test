import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Saidkodirov',
  tagline: 'Tolibjon, Frontend Developer at Drizo',
  favicon: 'img/logo.png',
  url: 'https://saidkodirov.uz',
  baseUrl: '/',

  organizationName: 'Tolibjon Saidkodirov', // Usually your GitHub org/user name.
  projectName: 'Tolibjon Saidqodirov', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'uz',
    locales: ['uz', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',         
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'https://saidkodirov.uz/_next/image?url=%2Fimages%2Fme-2.png&w=1920&q=75',
      navbar: {
        title: 'Tolibjon',
        logo: {
          alt: 'Tolibjon',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Darslar',
          },
          {
            href: 'https://github.com/TolibjonD',
            label: 'GitHub',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Tolibjon Saidkodirov`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
