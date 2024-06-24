const { movie_Services } = require("../services");

const movie_controller_post = async(req,res) => {
    try {

        const new_movie = await movie_Services.create_movie(req.body)

            if (!new_movie) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_movie
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const movie_controller_get = async(req,res) => {
    try {

        const list = await movie_Services.list_movie()

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

const movie_controller_delete = async(req,res) => {
    try {

        const id = req.params.movieid
        const result = await movie_Services.delete_movie(id)

        res.status(200).json({
            success: true,
            message: 'Deleted'
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


const movie_controller_update = async(req,res) => {
    try {
        const id = req.params.movie_id
        const data = req.body

        const result = await movie_Services.update_movie(id,data)

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
    movie_controller_post,
    movie_controller_get,
    movie_controller_delete,
    movie_controller_update
}