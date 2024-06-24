const { cartoons_Services } = require("../services");

const cartoons_controller_post = async(req,res) => {
    try {

        const new_cartoons = await cartoons_Services.create_cartoons(req.body)

            if (!new_cartoons) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_cartoons
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const cartoons_controller_get = async(req,res) => {
    try {

        const list = await cartoons_Services.create_cartoons_list()

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

const cartoons_controller_delete = async(req,res) => {
    try {

        const id = req.params.cartoonsid
        const result = await cartoons_Services.delete_cartoons(id)

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


const cartoons_controller_update = async(req,res) => {
    try {
        const id = req.params.cartoons_id
        const data = req.body

        const result = await cartoons_Services.update_cartoons(id,data)

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
    cartoons_controller_post,
    cartoons_controller_get,
    cartoons_controller_delete,
    cartoons_controller_update
}