const express = require('express')
const { bio_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-bio',
    bio_Controller.bio_controller_post
)

router.get('/list-bio',
    bio_Controller.bio_controller_get
)

router.delete('/delete-bio/:bioid',
    bio_Controller.bio_controller_delete
)

router.put('/update-bio/:bio_id',
    bio_Controller.bio_controller_update
)

module.exports = router