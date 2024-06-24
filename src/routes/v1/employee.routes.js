const express = require('express')
const { employee_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-employee',
    employee_Controller.employee_controller_post
)

router.get('/list-employee',
    employee_Controller.employee_controller_get
)

router.delete('/delete-employee/:employeeid',
    employee_Controller.employee_controller_delete
)

router.put('/update-employee/:employee_id',
    employee_Controller.employee_controller_update
)

module.exports = router