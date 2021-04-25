const app = getApp();
Page({
  data: {
    userId:'occfm1XR2rLSUu7nZKvyDnpVVk_s',
    array:[]
  },
  onLoad: function (options) {
    this.load()
  },
  // ListTouch触摸开始
  ListTouchStart(e) {
    this.setData({
      ListTouchStart: e.touches[0].pageX
    })
  },

  // ListTouch计算方向
  ListTouchMove(e) {
    this.setData({
      ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
    })
  },

  // ListTouch计算滚动
  ListTouchEnd(e) {
    if (this.data.ListTouchDirection =='left'){
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    } else {
      this.setData({
        modalName: null
      })
    }
    this.setData({
      ListTouchDirection: null
    })
  },
  // 生词移出函数
  remove:function(e){
    var index = parseInt(e.target.dataset.index)
    wx.request({
      url: 'http://localhost:8080/word/removeNote',
      data:{
        userId:this.data.userId,
        wordId:parseInt(this.data.array[index].id)
      },
      success:(res)=>{
        console.log(res)
      }
    })
    // this.data.array.splice(index,1)
    this.load()
    // this.setData({
    //   array:this.data.array
    // })
    
    
  },
  load:function(){
    wx.request({
      url: 'http://localhost:8080/word/notewords',
      data:{
        userId:this.userId
      },
      success:(res)=>{
        this.setData({
          array:res.data
        })
      }
    })
  }
})