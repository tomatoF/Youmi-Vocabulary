const wordList = require('../../data/word-list.js')
var list = require('../../data/word-list.js')
var content = ""
var i=0
var batch = []


Page({
    data: {
        // 需要查询是否为生词
        userId:'occfm1XR2rLSUu7nZKvyDnpVVk_s'
    },
    onLoad: function (options) {
        wx.request({
          url: 'http://localhost:8080/word/next',
          data: {
            userId:1,
            worId:1
          },
          method: 'GET',
          success: (res) => {
            batch=res.data
            this.content = batch[i].word
            this.worId=batch[i].id
            this.setData({
                content: batch[i].word,
                pron: batch[i].america_pronunciation,
                definition: batch[i++].meaning,
            })
          }
        })

        

    },
    show: function () {
        this.setData({
            showNot: true
        })
    },

    next: function () {
        this.setData({
            showNot: false
        })
        this.content = batch[i].word
        this.setData({
            content: batch[i++].word,
            pron: batch[i++].america_pronunciation,
            definition: batch[i++].meaning,
            favored:false
        })
    },
    read: function (e) {
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true
        innerAudioContext.src = 'http://dict.youdao.com/dictvoice?type=0&audio=' + this.content
        innerAudioContext.onPlay(() => {
          console.log('开始播放')
        })
        innerAudioContext.onError((res) => {
          console.log(res.errMsg)
          console.log(res.errCode)
        })
    
    },
    // 添加生词本函数
    favor:function(e){
        
        if(!this.favored){
            wx.request({
                url: 'http://localhost:8080/word/addNote',
                data:{
                    userId:this.data.userId,
                    wordId:this.worId
                },
                success :(res)=>{
                    this.setData({
                        favored:!this.favored
                    })
                    console.log("succ")
                }
              })
        }
        
    }
})