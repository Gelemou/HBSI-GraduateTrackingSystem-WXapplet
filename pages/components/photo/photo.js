// pages/components/photo/photo.js
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
    // background: ["../../../public/0001.png", "../../../public/0002.png", "../../../public/11(2).png"]
    background: []
  },
  created:function() {
    let that = this;
    http.request("/classes/wx/getClassCovers", {pageNum: 1,pageSize: 20}).then((res) => {
      that.setData({ background: res.result.list });
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onSwitch() {
      wx.switchTab({
        url: '/pages/memory/memory',
      })
    }
  }
})
