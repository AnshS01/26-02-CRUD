const express = require('express')
const { book_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-book',
    book_Controller.book_controller_post
)

router.get('/list-book',
    book_Controller.book_controller_get
)

router.delete('/delete-book/:bookid',
    book_Controller.book_controller_delete
)

router.put('/update-book/:book_id',
    book_Controller.book_controller_update
)

module.exports = router