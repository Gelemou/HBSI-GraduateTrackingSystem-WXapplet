// const { cursorTo } = require("readline");

// pages/activities/activities.js
Page({
  // 点击活动通知时切换样式和内容
  switchNotice() {
    this.setData({switchCurrent : 0});
  },
  switchGlimplse() {
    this.setData({switchCurrent : 1});
  },
  // 当switchCurrent改变时调用函数
  swiperChange(e) {
    this.setData({switchCurrent : e.detail.current});
  },
  data: {
    switchCurrent: 0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})