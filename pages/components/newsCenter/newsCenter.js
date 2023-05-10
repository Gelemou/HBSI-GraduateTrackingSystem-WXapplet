// pages/componets/newsCenter/newsCenter.js
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
    news:[{
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

  /**
   * 组件的方法列表
   */
  methods: {
    onSwitch() {
      wx.switchTab({
        url: '../../show/show',
        success() {
          console.log("成功");
        },
        fail() {
          console.log("失败");
        }
      })
    }
  }
})
