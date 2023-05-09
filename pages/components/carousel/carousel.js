// pages/components/carousel/carousel.js
const server = require("../../../utils/server");
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
    background: ['/public/蒙版组 1.png', '/public/0001.png', '/public/0002.png'],
  },
  onLoad:function() {
    let that = this;
    http.request("/swiper/wx/getListAll", {pageNum: 1, pageSize: 3}).then((res) => {
      that.setData({background: res.result.list});
    })

    wx.request({
      url: `${ server.SERVER_BASE_URL }/swiper/wx/getListAll`,
      data: {pageNum: 1, pageSize: 3},
      method: "post",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success:function(res) {
        that.setData({background: res.data.result.list});
        console.log()
      },
      fail:function(err) {
        console.log(err);
      }
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
