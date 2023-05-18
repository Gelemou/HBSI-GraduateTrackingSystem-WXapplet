// pages/memory/memory.js
const http = require("../../utils/request");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classes: "",
    departmentName: [[]],
    department: "",
    yearData: [],
    multiIndex: [0,0],
    multiArray: [["2018", "2019", "2020", "2021","2022","2023"], ["计算机", "软件", "网络"]],
  },
  // 点击确定时修改当前选择的下标
  pickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      multiIndex: e.detail.value
    })
    let id = this.data.multiIndex[1] + 1;
    http.request("/classes/wx/getClassByDeptId", {departmentId: id}).then((res) => {
      this.setData({classes: res.result.list});
    })
    console.log(this.data.classes);
  },
  // 当选择的列发生变化时调用函数
  pickerColumnChange: function (e) {
    console.log("修改的列为:", e.detail.column, "值为:", e.detail.value);
    // 定义一个对象data,里面有两个键值对
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex,
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    // 根据当前修改的列
    switch (e.detail.column) {
      // 如果当前修改列的下标为0
      case 0:
        // 如果当前修改的是第一行的第一个
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = this.data.departmentName;
            break;
          case 1:
            data.multiArray[1] = this.data.departmentName;
            break;
          case 2:
            data.multiArray[1] = this.data.departmentName;
            break;
          case 3:
            data.multiArray[1] = this.data.departmentName;
            break;
          case 4:
            data.multiArray[1] = this.data.departmentName;
            break;   
          case 5:
            data.multiArray[1] = this.data.departmentName;
            break;  
        }
        data.multiIndex[1] = 0;
    }
    this.setData(data);
    this.setData({departmentName: []})
    // 当前选择的年份
    let year = data.multiArray[0][data.multiIndex[0]];
    // 根据当前选择的年份取数据
    http.request("/department/wx/getDepartmentByYear", {year: year}).then((res) => {
      this.setData({department: res.result.departmentList});
    })
    for (let i = 0;i < this.data.department.length;i++) {
      this.data.departmentName.push(this.data.department[i].departmentName);
    }
    console.log(this.data.departmentName);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})