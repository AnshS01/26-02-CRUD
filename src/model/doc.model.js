const mongoose = require('mongoose')

const doc_Shcema = mongoose.Schema(
    {
        doc_name: {
            type: String,
            trim: true
        },
        doc_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

const doc = mongoose.model('Doc',doc_Shcema)

module.exports = doc