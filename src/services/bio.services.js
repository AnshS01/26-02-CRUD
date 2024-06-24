const { Bio } = require('../model')

const create_bio = (data) => {
    return Bio.create(data)
}

const create_bio_list = () => {
    return Bio.find()
    // return bio.findOne()
}

const delete_bio = (id) => {
    return Bio.findByIdAndDelete(id)
}

const update_bio = (id,data) => {
    return Bio.findByIdAndUpdate(id,data)
}

module.exports = {
    create_bio,
    create_bio_list,
    delete_bio,
    update_bio
}