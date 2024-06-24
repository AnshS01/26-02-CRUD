const { Doc } = require('../model')

const create_doc = (data) => {
    return Doc.create(data)
}

const create_doc_list = () => {
    return Doc.find()
    // return doc.findOne()
}

const delete_doc = (id) => {
    return Doc.findByIdAndDelete(id)
}

const update_doc = (id,data) => {
    return Doc.findByIdAndUpdate(id,data)
}

module.exports = {
    create_doc,
    create_doc_list,
    delete_doc,
    update_doc
}