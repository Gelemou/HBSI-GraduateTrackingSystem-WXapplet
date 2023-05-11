// pages/components/sfShow/sfShow.js
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
    background: []
  },
  created:function() {
    let that = this;
    http.request("/graduate/wx/getExcellentGraduateList", { pageNum: 1, pageSize: 4 }).then((res) => {
      that.setData({ background: res.result.list });
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onSwitch() {
      wx.switchTab({
        url: '/pages/show/show',
      })
    }
  }
})
