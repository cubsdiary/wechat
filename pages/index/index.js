//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    phone: null,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    storeName: null,
    checkStoreId: null
  },
  goMap: function () {
    wx.navigateTo({
      url: '../store/store'
    })
  },
  onLoad: function () {
    var _self = this
    wx.getStorage({
      key: 'seleStoreId',
      success: function (res) {
        _self.setData({
          checkStoreId: res.data
        })
      },
    });
    wx.getStorage({
      key: 'storeList',
      success: function (res) {
        res.data.forEach((item, index) => {
          if (item.id === _self.data.checkStoreId) {
            _self.setData({
              storeName: item.name.substring(7)
            })
          }
        })
      }
    });
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
