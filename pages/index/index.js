//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swipeSetting: {
      duration: 500,
      autoplay: true,
      interval: 5000,
      indicatorDots: false,
      circular: true,
      activeColor: '#ffc75f'
    },
    swipeList: [
      {src: '/src/image/lb1.jfif'},
      {src: '/src/image/lb2.jfif'},
      {src: '/src/image/lb3.jfif'}
    ],
    tabbarActive: 0,
  },
  onTabbarChange (event) {
    this.setData({ tabbarActive: event.detail });
    if (event.detail === 1) {
      wx.navigateTo({
        url: '../menu/menu',
      })
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  startOrder:function(){
    wx.navigateTo({
      url: '../menu/menu'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        tabbarActive: 0
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
