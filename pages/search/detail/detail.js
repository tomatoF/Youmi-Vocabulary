// pages/settings/detail/detail.js
var word = "we"
Page({
  data:{},
  
  onLoad:function(option){
    var that = this;
    this.word=option.src
    that.setData({
      content: option.src,
      audio: "aaa",
      pron: "kɒnfɪdəns",
      definition: option.dst
  })},
  read: function (e) {
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = 'http://dict.youdao.com/dictvoice?type=0&audio=' + this.word
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
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