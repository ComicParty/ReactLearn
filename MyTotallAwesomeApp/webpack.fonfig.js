var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "dev");
//nodjs   path.resolve([from ...], to)
//将参数 to 位置的字符解析到一个绝对路径里。
var OUTPUT = path.resolve(__dirname, "output");
// 这里我们定义了两个变量 DEV、OUTPUT，
// 这两个变量指向项目中的同名文件夹。
// 在 config 对象中，有两个属性 entry 和 output，
// 这两个属性分别使用 DEV 和  OUTPUT 变量来帮助映射 index.jsx 文件到 myCode.js。

var config = {
  entry: DEV + "/index.jsx",
  output: {
    path: OUTPUT,
    filename: "myCode.js"
  },
  module: {
    loaders: [{
      include: DEV,
      loader: "babel-loader",
    }]
  }
};

module.exports = config;