/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Pine',
  tagline: 'Small JavaScript-based task runner for node.js.',
  url: 'https://pinefile.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pinefile',
  projectName: 'pinefile.github.io',
  stylesheets: [
    'https://fonts.googleapis.com/css?family=IBM+Plex+Mono:500,700|Source+Code+Pro:500,700|Source+Sans+Pro:400,400i,700',
  ],
  themeConfig: {
    announcementBar: {
      id: 'work_in_progress',
      content: 'Work in progress, API may change before first stable release.',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
    },
    navbar: {
      title: 'Pine',
      logo: {
        alt: 'Pine Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'getting-started',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://www.npmjs.com/package/@pinefile/pine',
          label: 'npm',
          position: 'right',
        },
        {
          href: 'https://github.com/pinefile/pine',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `Copyright © 2020-${new Date().getFullYear()} Fredrik Forsmo and contributors`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/pinefile/pinefile.github.io/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
