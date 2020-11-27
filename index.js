const path = require('path');
const express = require('express');
const app = express();
//设置允许跨域访问该服务.
app.post('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
    // 读取静态html
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})


app.use('/app', (req, res) => {
    console.log(req.ip);
    res.json(req.query)
})

//处理404错误,访问未知路径
app.use(function (req, res, next) {
    res.send(404, 'Sorry cant find that!');
});
// 错误处理，多一个err参数
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.send(500, 'Something broke!');
});
console.log(app.get('env'));
const port = process.env.PORT || 8810
const host = process.env.HOST || ''
app.listen(port, () => console.log(`server running @ http://${host ? host : 'localhost'}:${port}`))