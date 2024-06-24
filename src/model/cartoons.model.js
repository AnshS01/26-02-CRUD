const mongoose = require('mongoose')

const cartoons_Shcema = mongoose.Schema(
    {
        cartoons_name: {
            type: String,
            trim: true
        },
        cartoons_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

const cartoons = mongoose.model('Cartoons',cartoons_Shcema)

module.exports = cartoons