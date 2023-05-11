// pages/components/sfActivity/sfActivity.js
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
    background: [1,1,1],
  },
  created:function() {
    let that = this;
    http.request("/activity/getListImgAll", { pageNum: 1,  pageSize: 10}).then((res) => {
      that.setData({ background: res.result.list })
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onSwitch() {
      wx.switchTab({
        url: '/pages/activities/activities',
      })
    }
  }
})
