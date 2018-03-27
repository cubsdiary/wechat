Page({

  /**
   * 页面的初始数据
   */
  data: {
    onceCode: true,
    submitBtn: false,
    userPhone: null,
    inputCode: null,
    focus: true,
    password: true,
    codeText: '获取验证码',
    timer: 60
  },

  /**
   * 生命周期函数--监听页面加载
   */
  modifyPhone: function () {
    wx.navigateBack({
      url: '../userphone/userphone',
    })
  },
  getCode: function (e) {
    var _self = this;
    var time = null;
    if (this.data.onceCode) {
      _self.setData({
        onceCode: false,
        codeText: _self.data.timer + 'S后重发'
      })
      time = setInterval(() => {
        if (_self.data.timer < 1) {
          _self.setData({
            timer: 60,
            onceCode: true,
            codeText: '获取验证码'
          })
          clearInterval(time)
        } else {
          _self.setData({
            codeText: (_self.data.timer--) + 'S后重发'
          })
        }
      }, 1000)
    }
  },
  getValue: function (e) {
    this.setData({
      inputCode: e.detail.value
    })
    if (e.detail.cursor == 6) {
      this.setData({
        submitBtn: true
      })
    } else {
      this.setData({
        submitBtn: false
      })
    }
  },
  goRegister: function () {
    wx.reLaunch({
      url: '../set_password/password'
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