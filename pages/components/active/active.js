// pages/components/active/active.js
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
    activity: [],
  },
  created:function() {
    let that = this;
    http.request("/activity/getListAll", {pageNum: 1, pageSize: 4}).then((res) => {
      that.setData({ activity: res.result.list});
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
