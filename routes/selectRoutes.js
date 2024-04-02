const Router = require('express')
const selectController = require('../controller/selectController')
const routes = new Router()


routes.get('/select-teachers', selectController.select_teachers)
routes.get('/select-wires', selectController.select_lessons_teachers)
routes.get('/select-table', selectController.select_table)

module.exports=routes