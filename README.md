# 项目介绍
该项目由EricChao搭建的uni-app模版项目

# 启动项目


在终端执行

`npm i`下载项目依赖

`npm run dev:${type}`其中type如下启动对应小程序。具体文档可以去uni-app官网去查阅 

```
 "dev:app": "uni -p app",
 "dev:app-android": "uni -p app-android",
 "dev:app-ios": "uni -p app-ios",
 "dev:custom": "uni -p",
 "dev:h5": "uni",
 "dev:h5:ssr": "uni --ssr",
 "dev:mp-alipay": "uni -p mp-alipay",                                         - dev启动支付宝小程序
 "dev:mp-baidu": "uni -p mp-baidu",                                           - dev启动百度小程序
 "dev:mp-jd": "uni -p mp-jd",                                                 - dev启动京东小程序
 "dev:mp-kuaishou": "uni -p mp-kuaishou",                                     - dev启动快手小程序
 "dev:mp-lark": "uni -p mp-lark",                                                                 
 "dev:mp-qq": "uni -p mp-qq",                                                 - dev启动QQ小程序
 "dev:mp-toutiao": "uni -p mp-toutiao",                                       - dev启动今日头条小程序
 "dev:mp-weixin": "uni -p mp-weixin",                                         - dev启动微信小程序
 "dev:mp-xhs": "uni -p mp-xhs",                                               - dev启动小红书小程序
 "dev:quickapp-webview": "uni -p quickapp-webview",
 "dev:quickapp-webview-huawei": "uni -p quickapp-webview-huawei",
 "dev:quickapp-webview-union": "uni -p quickapp-webview-union",
```

# 打包

`npm run build:${type}`其中type如下打包对应小程序。具体文档可以去uni-app官网去查阅 

# 项目使用的第三方包
- css预处理less
- prettier格式化代码
- vuex全局状态管理
- dcloud原生组件已使用npm安装可以直接使用具体看[官网文档](https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html)

