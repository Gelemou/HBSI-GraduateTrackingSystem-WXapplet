// pages/components/second/activeNotice/activeNotice.js
const http = require("../../../../utils/request")
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
    notices: [],
  },
  created:function() {
    let that = this;
    http.request("/activity/getListAll", {pageNum: 1, pageSize: 4}).then((res) => {
      that.setData({ notices: res.result.list});
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
