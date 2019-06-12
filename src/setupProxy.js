
const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
  app.use(proxy('/app', { 
      target: 'http://cnodejs.org/api/v1/topics',
      "changeOrigin": true ,
      secure: false,
      pathRewrite: {
        "^/app": "/"
    }
    })),
    app.use(proxy('/apc', { 
      target: 'http://cnodejs.org/api/v1/topic',
      "changeOrigin": true ,
      secure: false,
      pathRewrite: {
        "^/apc": "/"
    }
    })),
    app.use(proxy('/user', { 
      target: 'http://cnodejs.org/api/v1/user',
      "changeOrigin": true ,
      secure: false,
      pathRewrite: {
        "^/user": "/"
    }
    }))
}