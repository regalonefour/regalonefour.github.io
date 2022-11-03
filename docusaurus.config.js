// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'R14 Documentation',
  tagline: 'Documentation for R14 Develoment resources',
  url: 'https://regalonefour.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/r14-favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'regalonefour', // Usually your GitHub org/user name.
  projectName: 'regalonefour.github.io', // Usually your repo name.
  deploymentBranch: 'deployment', 
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/regalonefour/regalonefour.github.io/blob/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/r14-white.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Resource Documentation',
          },
          {
            href: 'https://github.com/regalonefour/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resource Links',
            items: [
              {
                label: 'r14-evidence',
                href: 'https://r14-dev.tebex.io/package/5121858',
              },
              {
                label: 'r14-objects',
                href: 'https://r14-dev.tebex.io/package/5027078',
              },
              {
                label: 'r14-rx',
                href: 'https://github.com/regalonefour/r14-rx',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/Dj3nXTaUYZ',
              },
            ],
          },
          {
            title: 'R14',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/regalonefour',
              },
              {
                label: 'Ko-fi',
                href: 'https://ko-fi.com/regalonefour',
              },

            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} R14 Development, Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['lua'], 
      },
    }),
};

module.exports = config;
