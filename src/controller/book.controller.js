const { book_Services } = require("../services");

const book_controller_post = async(req,res) => {
    try {

        const new_book = await book_Services.create_book(req.body)

            if (!new_book) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_book
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const book_controller_get = async(req,res) => {
    try {

        const list = await book_Services.create_book_list()

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

const book_controller_delete = async(req,res) => {
    try {

        const id = req.params.bookid
        const result = await book_Services.delete_book(id)

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


const book_controller_update = async(req,res) => {
    try {
        const id = req.params.book_id
        const data = req.body

        const result = await book_Services.update_book(id,data)

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
    book_controller_post,
    book_controller_get,
    book_controller_delete,
    book_controller_update
}