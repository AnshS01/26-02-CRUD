const express = require('express')
const { doc_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-doc',
    doc_Controller.doc_controller_post
)

router.get('/list-doc',
    doc_Controller.doc_controller_get
)

router.delete('/delete-doc/:docid',
    doc_Controller.doc_controller_delete
)

router.put('/update-doc/:doc_id',
    doc_Controller.doc_controller_update
)

module.exports = router