// pages/componets/newsCenter/newsCenter.js
const http = require("../../../utils/request");
Component({
  
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    news:[]
  },
  created:function() {
    let that = this;
    http.request("/news/wx/getListAll", {pageNum: 1, pageSize: 3, newsType: 2}).then((res) => {
      that.setData({ news: res.result.list });
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onSwitch() {
      wx.navigateTo({
        url: '/pages/components/second/newsDetail/newsDetail',
      })
    }
  }
})
