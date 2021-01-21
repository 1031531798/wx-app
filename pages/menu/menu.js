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
        {id:0, price:15,title:'海鲜炒饭',imageURL: '/src/image/hxcf.jfif',num:0,discount:0},
        {id:1, price:18,title:'牛肉炒饭',imageURL: '/src/image/pgcf.jfif',num:0,discount:0},
        {id:2, price:12,title:'炒年糕',imageURL: '/src/image/ng.jpg',num:0,discount:0},
        {id:3, price:15,title:'韩式年糕',imageURL: '/src/image/hsng.jfif',num:0,discount:0}
      ],
      [
        {id:4, price:21,title:'干锅包菜',imageURL: '/src/image/ggbc.jpg',num:0,discount:0},
        {id:5, price:16,title:'酸辣土豆丝',imageURL: '/src/image/tds.jpg',num:0,discount:0},
        {id:6, price:38,title:'葱爆羊肉',imageURL: '/src/image/cbyr.jpg',num:0,discount:0}
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
    shoppingList:{length:0},
    orderNull: false,
    shoppingListSize: 0
  },
  addItem: function (item) {
    // 通过获取自定义属性id和index id是商品唯一代码用来保存购物车数据 通过list数组更方便的进行数据的获取和保存，index用来获取菜单数据
    let index = item.target.dataset.index
    let id = item.target.dataset.shopid
    let list = this.data.shoppingList
    let model = this.data.orderList[this.data.navIndex][index]
    let priceTot = this.data.priceTotal
    // 添加购物车内容
    if(list[id] !== undefined){
      list[id] = model
      priceTot += list[id].price
      list[id].num += 1
      // 计算总价
      list['length'] += 1
    }else{
      model.num += 1
      priceTot += model.price
      list[id] = model
      list['length'] += 1
      // 计算总价
    }
    this.setData({
      shoppingList:list,
      shoppingListSize:list.length,
      priceTotal:priceTot
    })
    console.log(this.data.shoppingList)
  },
  // 取消购物车内物品
  delectItem:function(item){
    let id = item.target.dataset.shopid
    let list = this.data.shoppingList
    let priceTot = this.data.priceTotal
    list[id].num -= 1
    list['length'] -= 1
    this.setData({
      shoppingList:list,
      shoppingListSize:list.length,
      priceTotal:priceTot - list[id].price
    })
    console.log(priceTot)
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