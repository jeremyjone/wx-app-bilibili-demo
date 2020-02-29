Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 被点击的导航index
    currentNavIndex: 0,
    // 首页导航数据
    navList: [],
    // 轮播图
    swiperList: [
      {
        id: 0,
        pic: "http://i0.hdslb.com/bfs/archive/33bdf4170550881d70a5979cf8824ec44a3be9b4.jpg"
      },
      {
        id: 1,
        pic: "http://i2.hdslb.com/bfs/archive/86c8b8f963d59cb465a9f7e26d5ca3adb7d842a9.jpg"
      },
      {
        id: 2,
        pic: "http://i2.hdslb.com/bfs/archive/45fc8f12fe13a05944ad10315ed6b396a82db90f.jpg"
      },
      {
        id: 3,
        pic: "http://i2.hdslb.com/bfs/archive/8f764c0e7a0d3ce52802ca82a212536b89c16469.jpg"
      }
    ],
    // 首页视频数据
    videoList: []
  },

  /**
   * 点击首页导航按钮事件
   */
  activeNav(e) {
    this.setData({
      currentNavIndex: e.target.dataset.index
    })
  },

  /**
   * 获取首页导航数据
   */
  getNavList() {
    const that = this;
    // 利用小程序内置发送请求的方法获取数据
    wx.request({
      url: 'https://www.fastmock.site/mock/b8bc02c97dcec6b6abfa867a78a605ed/bilibili/navList',
      success(res) {
        if (res.data.code == 0) {
          that.setData({
            navList: res.data.data.navList
          })
        }
      }
    })
  },

  /**
   * 获取首页的视频数据
   */
  getVideoList() {
    let that = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/b8bc02c97dcec6b6abfa867a78a605ed/bilibili/homeData',
      success(res) {
        if (res.data.code == 0) {
          that.setData({
            videoList: res.data.data.homeData
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取首页导航数据
    this.getNavList();
    // 获取首页视频数据
    this.getVideoList();
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