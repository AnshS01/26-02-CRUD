const { Series } = require('../model')

const create_series = (data) => {
    return Series.create(data)
}

const list_series = () => {
    return Series.find()
    // return series.findOne()
}

const delete_series = (id) => {
    return Series.findByIdAndDelete(id)
}

const update_series = (id,data) => {
    return Series.findByIdAndUpdate(id,data)
}

module.exports = {
    create_series,
    list_series,
    delete_series,
    update_series
}