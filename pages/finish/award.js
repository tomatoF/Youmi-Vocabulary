Page({
  data: {
      // 需要查询是否为生词
      calendarConfig: {
        multi: true, // 是否开启多选,
        theme: 'elegant', // 日历主题，目前共两款可选择，默认 default 及 elegant，自定义主题色在参考 /theme 文件夹
        markToday: '今', // 当天日期展示不使用默认数字，用特殊文字标记
        
      }
  },
  onLoad: function (options) {

  },
})