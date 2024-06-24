const mongoose = require('mongoose')

const employee_Shcema = mongoose.Schema(
    {
        employee_name: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true
    }
)

const employee = mongoose.model('Employee',employee_Shcema)

module.exports = employee