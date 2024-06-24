const { Employee } = require('../model')

const create_employee = (data) => {
    return Employee.create(data)
}

const create_employee_list = () => {
    return Employee.find()
    // return employee.findOne()
}

const delete_employee = (id) => {
    return Employee.findByIdAndDelete(id)
}

const update_employee = (id,data) => {
    return Employee.findByIdAndUpdate(id,data)
}

module.exports = {
    create_employee,
    create_employee_list,
    delete_employee,
    update_employee
}