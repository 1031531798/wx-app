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
        {id:0, price:15,title:'海鲜炒饭',desc:'扇贝+鲜虾+酱油米饭',imageURL: '/src/image/hxcf.jfif',num:0,discount:0},
        {id:1, price:18,title:'牛肉炒饭',desc:'上好黄牛肉+小青菜+豆芽',imageURL: '/src/image/pgcf.jfif',num:0,discount:0},
        {id:2, price:12,title:'炒年糕',desc:'鸡蛋+肉丝+年糕',imageURL: '/src/image/ng.jpg',num:0,discount:0},
        {id:3, price:15,title:'韩式年糕',desc:'韩式风味年糕条',imageURL: '/src/image/hsng.jfif',num:0,discount:0}
      ],
      [
        {id:4, price:21,title:'干锅包菜',desc:'微辣 包菜 酸',imageURL: '/src/image/ggbc.jpg',num:0,discount:0},
        {id:5, price:16,title:'酸辣土豆丝',desc:'酸+微辣',imageURL: '/src/image/tds.jpg',num:0,discount:0},
        {id:6, price:38,title:'葱爆羊肉',desc:'大葱+羊肉 味道鲜美',imageURL: '/src/image/cbyr.jpg',num:0,discount:0}
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
    shoppingList:{list:{},length:0},
    orderNull: false,
    shoppingShow:false,
    shoppingListSize: 0,
    addAnimationData:{}
  },
  addItem: function (item) {
    console.log(item)
    // 通过获取自定义属性id和index id是商品唯一代码用来保存购物车数据 通过list数组更方便的进行数据的获取和保存，index用来获取菜单数据
    let index = item.target.dataset.index
    let id = item.target.dataset.shopid
    let list = this.data.shoppingList
    let model = this.data.orderList[this.data.navIndex][index]
    let priceTot = this.data.priceTotal
    // 添加购物车内容
    if(list['list'][id] !== undefined){
      list['list'][id] = model
      priceTot += list['list'][id].price
      list['list'][id].num += 1
      // 计算总价
      list['length'] += 1
    }else{
      model.num += 1
      priceTot += model.price
      list['list'][id] = model
      list['length'] += 1
      // 计算总价
    }
    this.setData({
      shoppingList:list,
      shoppingListSize:list.length,
      priceTotal:priceTot
    })
    this.addAnimation()
    console.log(this.data.shoppingList)
  },
  // 取消购物车内物品
  delectItem:function(item){
    let id = item.target.dataset.shopid
    let list = this.data.shoppingList
    let priceTot = this.data.priceTotal
    list['list'][id].num -= 1
    list['length'] -= 1
    this.setData({
      shoppingList:list,
      shoppingListSize:list.length,
      priceTotal:priceTot - list['list'][id].price
    })
    if(list['list'][id].num <= 0){
      delete list['list'][id]
    }
    console.log(this.data.shoppingList['list'])
  },
  // 点击左侧导航栏
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
  // 添加动画
  addAnimation(){
    let addItemAnimation = wx.createAnimation({
      duration: 50,
      timingFunction: 'linear',
    })
    addItemAnimation.scale(1.2).step()
    addItemAnimation.rotateZ(20).step()
    addItemAnimation.rotateZ(-20).step()
    addItemAnimation.scale(1).step()
    addItemAnimation.rotateZ(0).step()
    this.setData({
      addAnimationData : addItemAnimation.export()
    })
  },
  /**
   * 查看购物车
   */
  showShopping:function(){
    console.log(Object.keys(this.data.shoppingList.list))
    if(Object.keys(this.data.shoppingList.list).length === 0){
      this.setData({
        shoppingShow:false
      })
      return
    }
    this.setData({
      shoppingShow:!this.data.shoppingShow
    })
    console.log(this.data.shoppingShow)
  },
  /**
   * 在购物车内修改数量
   * 还未解决：1.item传入后的data数据不同问题
   * 2.购物车删除后不会同步问题
   */
  shoppingDetailChange:function(item){
    console.log(this.data.shoppingList)
    let id = item.target.dataset.id
    let num = this.data.shoppingList['list'][id].num
    if(item.detail > num){
      this.addItem(item)
    }else{
      this.delectItem(item)
    }
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