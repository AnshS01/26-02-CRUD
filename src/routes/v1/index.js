const express = require('express')
const bookRoutes = require('./book.routes')
const movieRoutes = require('./movie.routes')
const seriesRoutes = require('./series.routes')
const cartoonsRoutes = require('./cartoons.routes')
const gameRoutes = require('./game.routes')
const docRoutes = require('./doc.routes')
const bioRoutes = require('./bio.routes')
const employeeRoutes = require('./employee.routes')
const adminRoutes = require('./admin.routes')

const router = express()

router.use('/book',bookRoutes)
router.use('/movie',movieRoutes)
router.use('/series',seriesRoutes)
router.use('/cartoons',cartoonsRoutes)
router.use('/game',gameRoutes)
router.use('/doc',docRoutes)
router.use('/bio',bioRoutes)
router.use('/employee',employeeRoutes)
router.use('/admin',adminRoutes)

module.exports = router