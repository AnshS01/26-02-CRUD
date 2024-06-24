const { bio_Services } = require("../services");

const bio_controller_post = async(req,res) => {
    try {

        const new_bio = await bio_Services.create_bio(req.body)

            if (!new_bio) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_bio
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const bio_controller_get = async(req,res) => {
    try {

        const list = await bio_Services.create_bio_list()

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

const bio_controller_delete = async(req,res) => {
    try {

        const id = req.params.bioid
        const result = await bio_Services.delete_bio(id)

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


const bio_controller_update = async(req,res) => {
    try {
        const id = req.params.bio_id
        const data = req.body

        const result = await bio_Services.update_bio(id,data)

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
    bio_controller_post,
    bio_controller_get,
    bio_controller_delete,
    bio_controller_update
}