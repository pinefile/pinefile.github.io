/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Pine',
  tagline: 'Small JavaScript-based task runner for node.js.',
  url: 'https://pinefile.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pinefile', // Usually your GitHub org/user name.
  projectName: 'pinefile.github.io', // Usually your repo name.
  stylesheets: [
    'https://fonts.googleapis.com/css?family=IBM+Plex+Mono:500,700|Source+Code+Pro:500,700|Source+Sans+Pro:400,400i,700',
  ],
  themeConfig: {
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
          href: 'https://github.com/pinefile/pine',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Fredrik Forsmo and contributors`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
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
