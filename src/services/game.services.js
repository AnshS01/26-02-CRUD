const { Game } = require('../model')

const create_game = (data) => {
    return Game.create(data)
}

const create_game_list = () => {
    return Game.find()
    // return game.findOne()
}

const delete_game = (id) => {
    return Game.findByIdAndDelete(id)
}

const update_game = (id,data) => {
    return Game.findByIdAndUpdate(id,data)
}

module.exports = {
    create_game,
    create_game_list,
    delete_game,
    update_game
}