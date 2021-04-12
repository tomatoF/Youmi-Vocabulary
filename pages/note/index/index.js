const app = getApp();
Page({
  data: {
    array: [{
      word: 'master',
      desc:'n. 主人；硕士；专家 vt. 控制；精通 adj. 主要的；主人的；精通的'
    }, {
      word: 'confidence',
      desc:'n. 信任；把握；信心；知心话 adj. 骗得信任的'
    }, {
      word: 'belief',
      desc:'n. 信念；信仰；相信'
    }, {
      word: 'compile',
      desc:'vt. 编译；编制；编纂'
    }, {
      word: 'theory',
      desc:'n. 学说；理论；原理；意见'
    }, {
      word: 'courage',
      desc:'n. 勇气；胆量'
    }]
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
})