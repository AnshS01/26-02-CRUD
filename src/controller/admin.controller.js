const { admin_Services } = require("../services")

const create_controller_post = async(req,res) => {
    try {

        const new_admin = await admin_Services.create_admin_post(req.body)

        if (!new_admin) {
            throw new Error('Something Went Wrong')
        }

        res.status(400).json({
            success: true,
            error: 'Created...',
            data: new_admin
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

const create_controller_get = async(req,res) => {
    try {

        const new_admin = await admin_Services.create_admin_get()

        if (!new_admin) {
            throw new Error('Something Went Wrong')
        }

        res.status(400).json({
            success: true,
            data: new_admin
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

const create_controller_update = async(req,res) => {
    try {

        const id = req.params.adminid
        const data = req.body
        const new_admin = await admin_Services.create_admin_get(id,data)

        if (!new_admin) {
            throw new Error('Something Went Wrong')
        }

        res.status(400).json({
            success: true,
            data: data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

module.exports = {
    create_controller_post,
    create_controller_get,
    create_controller_update
}