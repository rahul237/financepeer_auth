const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const Uploaded = require('./models/uploaded.model')


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

app.post('/api/login', async (req, res) => {
    // console.log(req.body.email)
    try{
            const user = await User.findOne({
            email: req.body.email,
            password: req.body.password,

        })

        if(user){
            const token = jwt.sign({
                name: user.name,
                email:user.email,
            },
                'financepeer'


            )
            return res.json({status:'ok', user:token})
        }else{
            return res.json({status: 'error', user: false})
        }
    }catch(e){
        console.log(e);

    }

})

// app.get('/api/upload',(req, res)=>{
//     const token = req.headers['x-access-token']

//     try{
//         const decoded = jwt.verify(token, 'financepeer')
//         const email = decoded.email
//     }catch(e){
//         console.log(e)
//         res.json({status:'error', error:'invalid token'})
//     }

// })

app.post('/api/uploadjson', async (req, res) => {
    console.log(req.body)
    try{
        const user = await Uploaded.create(req.body)
        res.json({status:"ok"})



    }catch(e){
        res.json({status:"error", error: 'Duplicate id'})

    }
})

app.get('/api/viewuploads', async (req, res) => {
    // console.log(req.body)
    try{
        const result = await Uploaded.find().populate()
        res.json({data: result})



    }catch(e){
        res.json({status:"error", error: 'unable to get uploads'})

    }
})

app.listen(2307, () => {
    console.log('Server started on 2307')
})