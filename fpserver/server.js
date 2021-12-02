const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')

mongoose.connect('mongodb+srv://financepeer:financepeer@cluster0.bqeef.mongodb.net/FPDatabase?retryWrites=true&w=majority')

app.use(cors())
app.use(express.json())

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try{
        const user = await User.create(req.body)
        res.json({status:"ok"})

    }catch(e){
        res.json({status:"error", error: 'Duplicate email'})

    }
})

app.get('/hello',(req, res)=>{
    res.send('hello world')
    res.json({status:"ok"})

})

app.listen(2307, () => {
    console.log('Server started on 2307')
})