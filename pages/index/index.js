// index.js
// 获取应用实例
const app = getApp()

Page({
  onShareAppMessage() {
    return {
      title: "swiper",
      path: "pages/index/index"
    }
  },
  data: {
    background: ['/public/蒙版组 1.png', '/public/0001.png', '/public/0002.png'],
  },  
})
