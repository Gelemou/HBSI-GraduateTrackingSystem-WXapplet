// pages/components/second/activeGlimplse/activeGlimplse.js
const http = require("../../../../utils/request");
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
    images: [],
  },
  created:function() {
    let that = this;
    http.request("/activity/getListImgAll", {pageNum: 1, pageSize: 4}).then((res) => {
      that.setData({ images: res.result.list });
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
