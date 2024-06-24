const { employee_Services } = require("../services");

const employee_controller_post = async(req,res) => {
    try {

        const new_employee = await employee_Services.create_employee(req.body)

            if (!new_employee) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_employee
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const employee_controller_get = async(req,res) => {
    try {

        const list = await employee_Services.create_employee_list()

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

const employee_controller_delete = async(req,res) => {
    try {

        const id = req.params.employeeid
        const result = await employee_Services.delete_employee(id)

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


const employee_controller_update = async(req,res) => {
    try {
        const id = req.params.employee_id
        const data = req.body

        const result = await employee_Services.update_employee(id,data)

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
    employee_controller_post,
    employee_controller_get,
    employee_controller_delete,
    employee_controller_update
}