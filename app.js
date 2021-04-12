

App({
  onLaunch: function () {
    // 请求缓存数据
    // 本地缓存无则请求openid
    wx.login({
      success: function (res) {
        console.log("***********")
        console.log(res.code)
        console.log("***********")
        // url http://localhost:8080/user/getOpenId?code=
      }
    })
    // 映射对应的userid
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (res) {
          console.log("***********")
          console.log(res.code)
          console.log("***********")
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})