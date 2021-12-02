const express = require('express')
const app = express()

app.get('/hello',(req, res)=>{
    res.send('hello world')

})

app.listen(2307, () => {
    console.log('Server started on 2307')
})