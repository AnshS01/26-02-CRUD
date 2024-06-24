const express = require('express')
const { admin_Controller } = require('./../../controller')

const router = express.Router()

router.post('/create-admin',
    admin_Controller.create_controller_post
)

router.get('/list-admin',
    admin_Controller.create_controller_get
)

router.put('/update-admin/:adminid',
    admin_Controller.create_controller_update
)


module.exports = router