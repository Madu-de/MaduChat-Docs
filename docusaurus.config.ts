import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'MaduChat',
  tagline: 'An open source social media application',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://maduchat-docs.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Madu-de', // Usually your GitHub org/user name.
  projectName: 'MaduChat', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          docItemComponent: "@theme/ApiItem",
          editUrl:
            'https://github.com/Madu-de/MaduChat-Docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    'docusaurus-theme-openapi-docs'
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api", // plugin id
        docsPluginId: "classic", // id of plugin-content-docs or preset for rendering docs
        config: {
          api: { // the <id> referenced when running CLI commands
            specPath: "api-endpoints/endpoints.yaml", // path to OpenAPI spec, URLs supported
            outputDir: "docs/api", // output directory for generated files
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
            showSchemas: true,
          },
        },
      }
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'MaduChat',
      logo: {
        alt: 'MaduChat Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        },
        /* Remove comment, if versions exist
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              to: '/versions', 
              label: 'All versions'
            }
          ],
          dropdownActiveClassDisabled: true,
        },
        */
        {
          href: 'https://github.com/Madu-de/MaduChat',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Frontend',
              to: '/category/frontend',
            },
            {
              label: 'Backend',
              to: '/category/backend',
            },
            {
              label: 'API',
              to: '/api/maduchat-api',
            },
          ],
        },
        {
          title: 'Repositories',
          items: [
            {
              label: 'MaduChat',
              href: 'https://github.com/Madu-de/MaduChat',
            },
            {
              label: 'MaduChat-CLI',
              href: 'https://github.com/Madu-de/MaduChat-CLI',
            },
            {
              label: 'MaduChat-Docs',
              href: 'https://github.com/Madu-de/MaduChat-Docs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Contributors❤️',
              to: 'docs/contributors'
            },
            {
              label: 'My Github profile',
              href: 'https://github.com/Madu-de',
            },
            {
              label: 'License',
              href: 'https://www.gnu.org/licenses/agpl-3.0.de.html'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MaduChat`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
