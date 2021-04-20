const { description } = require('../../package')
const nav = require('./nav')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'LeetCode Solution',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      ...nav,
      {
        text: 'Github',
        link: 'https://github.com/chenxxzhe'
      }
    ],
    // nav: [
    //   {
    //     text: 'Solution',
    //     link: '/solution/',
    //   },
    //   {
    //     text: 'Thinking',
    //     link: '/thinking/'
    //   },
    //   {
    //     text: 'VuePress',
    //     link: 'https://v1.vuepress.vuejs.org'
    //   }
    // ],
    // sidebar: 'auto',
    // sidebar,
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['vuepress-plugin-auto-sidebar', {sidebarDepth: 3}]
  ]
}
