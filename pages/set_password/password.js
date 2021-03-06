Page({

  /**
   * 页面的初始数据
   */
  data: {
    submitBtn: false,
    inputValue: '',
    password: true,
    focus: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getPwd: function (e) {
    if (e.detail.cursor > 6) {
      this.setData({
        inputValue: e.detail.value,
        submitBtn: true
      })
    } else {
      this.setData({
        inputValue: e.detail.value,
        submitBtn: false
      })
    }
  },
  seenValue: function () {
    this.setData({
      password: !this.data.password,
      focus: true
    })
  },
  goLogin: function () {
    if (this.data.inputValue.length > 6) {
      wx.reLaunch({
        url: '../index/index',
      })
    }
  },
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