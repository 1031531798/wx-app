// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tabbarActive: 0,
    color: "#7A7E83",
    selectedColor: "rgb(238, 10, 36)",
    tabList: [
      // {iconPath: '/src/image/home.png', selectedIconPath: '/src/image/home-active.png', pagePath: '/pages/index/index', tabText: '首页'},
      // {iconPath: '/src/image/menu.png', selectedIconPath: '/src/image/menu-active.png', pagePath: '/pages/menu/menu', tabText: '点餐'},
      // {iconPath: '/src/image/order.png', selectedIconPath: '/src/image/order-active.png', pagePath: '/pages/order/order', tabText: '订单'},
      // {iconPath: '/src/image/user.png', selectedIconPath: '/src/image/user-active.png', pagePath: '/pages/user/user', tabText: '我的'}
      {iconPath: 'home-o', selectedIconPath: '', pagePath: '/pages/index/index', tabText: '首页'},
      {iconPath: 'cart-o', selectedIconPath: '', pagePath: '/pages/menu/menu', tabText: '点餐'},
      {iconPath: 'balance-list-o', selectedIconPath: '', pagePath: '/pages/order/order', tabText: '订单'},
      {iconPath: 'user-o', selectedIconPath: '', pagePath: '/pages/user/user', tabText: '我的'}
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab (e) {
      const index = e.detail
      const url = this.data.tabList[index].pagePath
      if (index === 1) {
        wx.navigateTo({
          url: '/pages/menu/menu',
        })
        return
      }
      wx.switchTab({
        url: url,
        success: () => {
          console.log(index)
          this.setData({
            tabbarActive: index
          })
        }
      })
    }
  }
})
