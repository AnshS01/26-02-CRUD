const express = require('express')
const { series_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-series',
    series_Controller.series_controller_post
)

router.get('/list-series',
    series_Controller.series_controller_get
)

router.delete('/delete-series/:seriesid',
    series_Controller.series_controller_delete
)

router.put('/update-series/:series_id',
    series_Controller.series_controller_update
)

module.exports = router