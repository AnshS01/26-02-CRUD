const { Book } = require('../model')

const create_book = (data) => {
    return Book.create(data)
}

const create_book_list = () => {
    return Book.find()
    // return Book.findOne()
}

const delete_book = (id) => {
    return Book.findByIdAndDelete(id)
}

const update_book = (id,data) => {
    return Book.findByIdAndUpdate(id,data)
}

module.exports = {
    create_book,
    create_book_list,
    delete_book,
    update_book
}