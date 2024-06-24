const { game_Services } = require("../services");

const game_controller_post = async(req,res) => {
    try {

        const new_game = await game_Services.create_game(req.body)

            if (!new_game) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_game
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const game_controller_get = async(req,res) => {
    try {

        const list = await game_Services.create_game_list()

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

const game_controller_delete = async(req,res) => {
    try {

        const id = req.params.gameid
        const result = await game_Services.delete_game(id)

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


const game_controller_update = async(req,res) => {
    try {
        const id = req.params.game_id
        const data = req.body

        const result = await game_Services.update_game(id,data)

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
    game_controller_post,
    game_controller_get,
    game_controller_delete,
    game_controller_update
}