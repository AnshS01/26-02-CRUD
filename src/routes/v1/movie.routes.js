const express = require('express')
const { movie_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-movie',
    movie_Controller.movie_controller_post
)

router.get('/list-movie',
    movie_Controller.movie_controller_get
)

router.delete('/delete-movie/:movieid',
    movie_Controller.movie_controller_delete
)

router.put('/update-movie/:movie_id',
    movie_Controller.movie_controller_update
)

module.exports = router