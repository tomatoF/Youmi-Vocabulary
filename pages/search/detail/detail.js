// pages/settings/detail/detail.js
Page({
  data:{},
  onLoad:function(option){
    var word = option.content
    var md5 = require('../md5')
    var appid = '20210312000724963';
    var key = '_6q5zPN8lmZfq0A2uCzA';
    var salt = 1435660288;
    var str1 = appid + word + salt +key;
    var sign = md5.hexMD5(str1)

    var that = this;
        wx.request({
            url: 'http://api.fanyi.baidu.com/api/trans/vip/translate?q=' + word+'&from=en&to=zh&appid='+appid+'&salt=1435660288&sign='+sign,
            data: {},
            method: 'GET',
            success: function (res) {
                console.log(res)
                that.setData({
                    content: res.data.trans_result[0].src,
                    audio: "aaa",
                    pron: "bbb",
                    definition: res.data.trans_result[0].dst
                })
            },
            fail: function () {
            },
            complete: function () {
            }
        })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})