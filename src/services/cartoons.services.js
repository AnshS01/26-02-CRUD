const { Cartoons } = require('../model')

const create_cartoons = (data) => {
    return Cartoons.create(data)
}

const create_cartoons_list = () => {
    return Cartoons.find()
    // return cartoons.findOne()
}

const delete_cartoons = (id) => {
    return Cartoons.findByIdAndDelete(id)
}

const update_cartoons = (id,data) => {
    return Cartoons.findByIdAndUpdate(id,data)
}

module.exports = {
    create_cartoons,
    create_cartoons_list,
    delete_cartoons,
    update_cartoons
}