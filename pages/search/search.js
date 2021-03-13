
Page({
  data: {

  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载

  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: '', // 分享标题
      desc: '', // 分享描述
      path: '' // 分享路径
    }
  },
  word: function(e)
  {
    this.setData({
      searchWord: e.detail.value
    }

    )
  },
  search: function (e) {
    var that = this
    var content = this.data.searchWord
    var md5 = require('./md5')
    var appid = '20210312000724963';
    var key = '_6q5zPN8lmZfq0A2uCzA';
    var salt = 1435660288;
    var str1 = appid + content + salt +key;
    var sign = md5.hexMD5(str1)
    wx.request({

      url: 'http://api.fanyi.baidu.com/api/trans/vip/translate?q=' + content+'&from=en&to=zh&appid='+appid+'&salt=1435660288&sign='+sign,
      data: {},
      method: 'GET',
      success: function (res) {
        console.log(res)

        var msg = res.errMsg
        if (msg == "request:ok") {
          wx.navigateTo({
            url: './detail/detail?content=' + content,
            success: function (res) {
              // success
            },
            fail: function () {
              // fail
            },
            complete: function () {
              // complete
            }
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '对不起，查询不到该词信息',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        }

      },
      fail: function () {
      },
      complete: function () {
      }
    })

  },

  help: function () {
    wx.showModal({
      title: '提示',
      content: '输入单词后点击回车键即可查询',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  }
})