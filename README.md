# 自动部署
```
// deploy/product.js

const SERVER = {
  host: '****', // ip
  port: 22, // 端口
  username: 'root', // 登录服务器的账号
  password: '******', // 登录服务器的账号
  path: '******', // 发布至静态服务器的项目路径
};

module.exports = SERVER;
```