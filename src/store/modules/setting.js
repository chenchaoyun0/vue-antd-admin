export default {
  namespaced: true,
  state: {
    isMobile: false,
    theme: 'dark',
    layout: 'side',
    systemName: '开发调试工具集',
    copyright: '2019',
    // footerLinks: [
    //   {link: 'https://pro.ant.design', name: 'Pro首页'},
    //   {link: 'https://github.com/iczer/vue-antd-admin', icon: 'github'},
    //   {link: 'https://ant.design', name: 'Ant Design'}
    // ],
    multipage: true
  },
  mutations: {
    setDevice(state, isMobile) {
      state.isMobile = isMobile
    },
    setTheme(state, theme) {
      state.theme = theme
    },
    setLayout(state, layout) {
      state.layout = layout
    },
    setMultipage(state, multipage) {
      state.multipage = multipage
    }
  }
}
