const express = require('express')
const { cartoons_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-cartoons',
    cartoons_Controller.cartoons_controller_post
)

router.get('/list-cartoons',
    cartoons_Controller.cartoons_controller_get
)

router.delete('/delete-cartoons/:cartoonsid',
    cartoons_Controller.cartoons_controller_delete
)

router.put('/update-cartoons/:cartoons_id',
    cartoons_Controller.cartoons_controller_update
)

module.exports = router