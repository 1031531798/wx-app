// pages/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopData:{
      shopName:'极岛面栈'
    },
    navIndex: 0,
    navList: [
      {id: 0,label:'今日折扣'},
      {id: 1,label:'热门菜品'},
      {id: 2,label:'炒饭炒面'},
      {id: 3,label:'海鲜汤面'},
      {id: 4,label:'家常小炒'},
      {id: 5,label:'荤素搭配'},
      {id: 6,label:'活鱼生鲜'},
      {id: 7,label:'海鲜贝类'},
      {id: 8,label:'饮料'},
      {id: 9,label:'米饭'},
      {id: 10,label:'餐具'}
    ],
    orderList: [
      [
        {id:0, price:12,title:'海鲜炒饭',imageURL: '/src/image/hxcf.jfif'},
        {id:1, price:12,title:'牛肉炒饭',imageURL: '/src/image/pgcf.jfif'},
        {id:2, price:12,title:'炒年糕',imageURL: '/src/image/ng.jpg'},
        {id:3, price:12,title:'海鲜炒饭',imageURL: '/src/image/hsng.jfif'}
      ],
      [
        {id:4, price:12,title:'干锅包菜',imageURL: '/src/image/ggbc.jpg'},
        {id:5, price:12,title:'酸辣土豆丝',imageURL: '/src/image/tds.jpg'},
        {id:6, price:12,title:'葱爆羊肉',imageURL: '/src/image/cbyr.jpg'}
      ],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ],
    orderNum: 12,
    priceTotal: 0,
    scrollHeight:0,
    navIndex:0,
    shoppingList:[],
    orderNull: false
  },
  scrollBottom: function () {
    console.log("到底部了")
  },
  changeMenu: function (event) {
    if (this.data.orderList[event.detail].length > 0) {
      this.setData({
        orderNull:false
     })
    }else {
      console.log("此页暂无")
      console.log(this.data.orderList[event.detail])
      this.setData({
        orderNull:true
     })
    }
    this.setData({
      navIndex:event.detail
   })
  },
  clickNav: function (event) {
  },
  selected: function(){
    console.log('选好了')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
  
})