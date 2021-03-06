# React 初学者教程 2: 创建第一个 React 应用
[zcty](http://zcfy.baomitu.com/article/building-your-first-react-app-1521.html)
注意：在如果在查看原文时，使用了「google浏览器的翻译」代码中会出现「<font>」标记，一定要彻底不用翻译，才不会出错
-------


现在，这里就是 React 的特殊性出现的地方。除了标准的 HTML、CSS 和 JavaScript 外，很多 React 代码都会用 JSX 编写。JSX 是一门可以让我们很容易混合 JavaScript 和 类似 HTML 的标记，来定义用户界面元素以及其功能的语言。这听起来很酷，但是问题是：浏览器是不知道如何处理 JSX的。

要用 React 创建 Web 应用，我们需要一种方式采用 JSX，并将它转换为浏览器可以理解的标准 JavaScript。
如果不这么做，React 应用就无法运行。目前将 JSX 转换为 JavaScript 有两种解决方案：

1. 围绕 Node 以及一些构建工具（比如 Webpack）来设置开发环境。在这种环境中，每次执行构建时，所有 JSX 被自动转换为 JS，放在磁盘上，让我们可以像标准 JavaScript 文件一样引用。
2. 让浏览器在运行时自动将 JSX 转换为 JavaScript。我们直接像 JavaScript 一样用 JSX，浏览器负责剩下的转换。

第一种解决方案，虽然开始有点复杂，有点费时，但是是当今现代 Web 开发的方式。除了把 JSX 编译（更精确的说是转译）为 JS 外，这种方法允许我们利用模块、更好的构建工具，以及让创建复杂 Web 应用变得稍微可管理的很多其它特征。

第二种解决方案提供了一种快速而直接的路径，开始花更多时间写代码，更少时间花在开发环境上。要用这个解决方案，我们要做的就是引用一个脚本文件。这个脚本文件负责在页面加载时，将 JSX 转换为 JS，然后我们的 React 应用就开始活起来，这样就不需要折腾开发环境。

在 React 入门阶段，我们打算用第二种方案。那么为什么我们不一直用第二种方案呢？原因是，浏览器每次要花时间把 JSX 翻译为 JS，这对性能是有影响的。在学习如何使用 React 时，这是完全可以接受的，但是在部署应用程序实际使用时，这肯定是完全不能接受的。所以后面我们会在已经熟悉了 React 后，再用第一解决方案，即设置开发环境。

