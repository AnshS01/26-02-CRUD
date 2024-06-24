const mongoose = require('mongoose')

const bio_Shcema = mongoose.Schema(
    {
        bio_auth: {
            type: String,
            trim: true
        },
        bio_name: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true
    }
)

const bio = mongoose.model('Bio',bio_Shcema)

module.exports = bio