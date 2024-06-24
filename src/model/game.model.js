const mongoose = require('mongoose')

const game_Shcema = mongoose.Schema(
    {
        game_name: {
            type: String,
            trim: true
        },
        game_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

const game = mongoose.model('Game',game_Shcema)

module.exports = game