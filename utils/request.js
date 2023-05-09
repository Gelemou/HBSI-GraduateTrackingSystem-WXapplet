const url = require("./server");
var serverUrl = url.SERVER_BASE_URL;
function request(url, requestData) {
  return new Promise((resolve,reject) => {
    wx.request({
      url: serverUrl + url,
      data: requestData,
      method: "post",
      header: {"content-type": "application/x-www-form-urlencoded"},
      success:function(res) {
        if (res.statusCode == 200) {
          resolve(res.data);
        } else {
          reject("未知错误");
        }
      },
      fail:function(err) {
        console.log(err);
      }
    })
  })
}
module.exports.request = request;