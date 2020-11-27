const path = require('path');
const express = require('express');
const {
    log
} = require('console');
const app = express();
//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.get('/', function (req, res) {
    // 读取静态html
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})
app.use(express.static(path.join(__dirname, 'public')))


app.use('/app', (req, res) => {
    res.send(`${req.baseUrl}Hello app`)
})

const port = process.env.PORT || 9999
const host = process.env.HOST || ''
app.listen(port, () => console.log(`server running @ http://${host ? host : 'localhost'}:${port}`))