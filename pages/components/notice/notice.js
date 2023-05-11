// pages/componets/newsCenter/newsCenter.js
const http = require("../../../utils/request")
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
    notice:[{
      newsId: 1,
      newsTitle: "阿萨法沙发",
      newsTime: "2022-12-01",
      imageSrc: "../../../public/0001.png"
    },
    {
      newsId: 2,
      newsTitle: "阿萨法沙发2",
      newsTime: "2022-12-01",
      imageSrc: "../../../public/0001.png"
    },
    {
      newsId: 3,
      newsTitle: "阿萨法沙发3",
      newsTime: "2022-12-01",
      imageSrc: "../../../public/0001.png"
    },
  ]
  },
  // 获取接口数据
  created:function() {
    let that = this;
    http.request("/news/wx/getListAll", {
      pageNum: 1, pageSize: 3, newsType: 1
    }).then((res) => {
      that.setData({notice: res.result.list});
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 跳转到二级页面
    onSwitch() {
      wx.navigateTo({
        url: '/pages/components/second/noticeDetail/noticeDetail',
      })
    }
  }
})
