const { doc_Services } = require("../services");

const doc_controller_post = async(req,res) => {
    try {

        const new_doc = await doc_Services.create_doc(req.body)

            if (!new_doc) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_doc
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const doc_controller_get = async(req,res) => {
    try {

        const list = await doc_Services.create_doc_list()

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

const doc_controller_delete = async(req,res) => {
    try {

        const id = req.params.docid
        const result = await doc_Services.delete_doc(id)

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


const doc_controller_update = async(req,res) => {
    try {
        const id = req.params.doc_id
        const data = req.body

        const result = await doc_Services.update_doc(id,data)

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
    doc_controller_post,
    doc_controller_get,
    doc_controller_delete,
    doc_controller_update
}