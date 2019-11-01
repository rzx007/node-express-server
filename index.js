const path = require('path');
const getIp = require('./config/ip')
const express = require('express');
const app = express();
app.get('/',function(req,res){
    console.log(req)
    // 读取静态html
    res.sendFile(path.resolve(__dirname,'public/index.html'))
})
getIp()
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3002, () => console.log(' app listening on port 3002!'))
