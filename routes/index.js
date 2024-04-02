const Router = require('express')
const router = new Router()
const selectRoutes = require('./selectRoutes')

router.use('/queries', selectRoutes)

module.exports=router