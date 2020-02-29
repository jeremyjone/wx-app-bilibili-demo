// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoId: 0,
    // 写一个模拟数据，没有那么多视频。。。
    videoInfo: {
      id: 1,
      title: "测试视频，别找了，就这一个能看的，剩下都是forbidden，懒得找了。。",
      author: "jeremyjone",
      view: 21465,
      reply: 88888,
      date: "2020-02-29",
      // url: "http://vfx.mtime.cn/Video/2019/03/18/mp4/190318214226685784.mp4"
      url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
    },
    recommentList: []
  },

  /**
   * 获取推荐列表
   */
  getRecommentList() {
    const that = this;
    // 利用小程序内置发送请求的方法获取数据
    wx.request({
      url: 'https://www.fastmock.site/mock/b8bc02c97dcec6b6abfa867a78a605ed/bilibili/getRecommendList',
      success(res) {
        if (res.data.code == 0) {
          that.setData({
            recommentList: res.data.data.recommendData
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      videoId: options.id
    });

    // 获取推荐列表
    this.getRecommentList();
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