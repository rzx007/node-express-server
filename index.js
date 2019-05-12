const path = require('path');
const express = require('express');
const app = express();
// app.get('/',function(req,res){
// res.sendfile(path.resolve(__dirname,'public/index.html'))
// })
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
