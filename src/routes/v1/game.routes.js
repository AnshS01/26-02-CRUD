const express = require('express')
const { game_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-game',
    game_Controller.game_controller_post
)

router.get('/list-game',
    game_Controller.game_controller_get
)

router.delete('/delete-game/:gameid',
    game_Controller.game_controller_delete
)

router.put('/update-game/:game_id',
    game_Controller.game_controller_update
)

module.exports = router