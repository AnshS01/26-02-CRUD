const mongoose = require('mongoose')

const series_Shcema = mongoose.Schema(
    {
        series_name: {
            type: String,
            trim: true
        },
        series_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

const series = mongoose.model('Series',series_Shcema)

module.exports = series