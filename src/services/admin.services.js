const { Admin } = require("../model")

const create_admin_post = (data) => {
    return Admin.create(data)
}

const create_admin_get = () => {
    return Admin.find()
}

const create_admin_put = (id,data) => {
    return Admin.findByIdAndUpdate(id,data)
}

const create_admin_delete = (id) => {
    return Series.findByIdAndDelete(id)
}

module.exports = {
    create_admin_post,
    create_admin_get,
    create_admin_put,
    create_admin_delete
}