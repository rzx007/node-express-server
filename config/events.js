const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

// emit 用于触发事件
// on 用于添加将在事件触发时执行的回调函数
// once()：添加一次性监听器
// removeListener()/ off()：从事件中删除事件监听器
// removeAllListeners()：删除事件的所有侦听器

// 创建一个start事件
eventEmitter.on('start',(number )=>{
    console.log(`started${number}`);
    
})

// 触发事件
eventEmitter.emit('start',12);
// 返回事件名称
console.log(eventEmitter.eventNames());
