Page({

  /**
   * 页面的初始数据
   */
  data: {
    resetBtn: false,
    submitBtn: false,
    userPhone: null,
    pwdValue: null,
    focus: true,
    inputPwd: null,
    password: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  modifyPhone: function () {
    wx.navigateBack({
      url: '../userphone/userphone',
    })
  },
  getValue: function (e) {
    var btn_2 = null;
    if (e.detail.cursor >= 6) {
      btn_2 = true;
    } else {
      btn_2 = false;
    }
    this.setData({
      submitBtn: btn_2,
      pwdValue: e.detail.value
    })
  },
  seenValue: function () {
    this.setData({
      password: !this.data.password,
      focus: true
    })
  },
  goLogin: function () {
    wx.reLaunch({
      url: '../index/index',
    })
  },
  onLoad: function (options) {
    this.setData({
      userPhone: options.phone
    })
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