const mongoose = require('mongoose')

const Upload = new mongoose.Schema(
    {
        userId: {type: Number, required: true},
        id: {type: Number, required: true, unique:true},
        title: {type: String, required: true},
        body:{type: String},
    },
    {collection: 'uploaded-data'}

)

const model = mongoose.model('UploadedData', Upload)

module.exports = model