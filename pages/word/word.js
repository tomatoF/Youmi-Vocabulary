var list = require('../../data/word-list.js')
var content = "we"

Page({
    data: {
    },
    onLoad: function (options) {

        var idx = Math.floor(Math.random() * 499) + 1
        var word = list.wordList[idx]
        this.content = word.content    
    
        this.setData({
            content: word.content,
            pron: word.pron,
            definition: word.definition,
            audio: word.audio
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
        var idx = Math.floor(Math.random() * 499) + 1
        var word = list.wordList[idx]    
    
        this.setData({
            content: word.content,
            pron: word.pron,
            definition: word.definition,
            audio: word.audio
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
    
    }
})