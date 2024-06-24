const { series_Services } = require("../services");

const series_controller_post = async(req,res) => {
    try {

        const new_series = await series_Services.create_series(req.body)

            if (!new_series) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_series
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const series_controller_get = async(req,res) => {
    try {

        const list = await series_Services.create_series()

            if (!list) {
                throw new Error('Not Found...!')
            }

        res.status(200).json({
            success: true,
            data: list
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const series_controller_delete = async(req,res) => {
    try {

        const id = req.params.seriesid
        const result = await series_Services.delete_series(id)

        res.status(200).json({
            id: id,
            success: true
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


const series_controller_update = async(req,res) => {
    try {
        const id = req.params.series_id
        const data = req.body

        const result = await series_Services.update_series(id,data)

        if(!result){
            throw new Error("Not updated")
        }

        res.status(200).json({
            success: true,
            message: "Updated",
            data: data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


module.exports = {
    series_controller_post,
    series_controller_get,
    series_controller_delete,
    series_controller_update
}