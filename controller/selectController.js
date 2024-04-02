const {Teachers, Lessons_Teachers, Table} = require('../models/model')
const {QueryTypes} = require('sequelize')
const sequelize = require('../db')
class selectController
{
    async select_teachers(req, res)
    {
        const select_teachers = await Teachers.findAll()
        return res.json(select_teachers)
    }

    async select_lessons_teachers(req, res)
    {
        const select_wires = await Lessons_Teachers.findAll()
        return res.json(select_wires)
    }

    async select_table(req, res)
    {
        const select_table = await Table.findAll()
        return res.json(select_table)
    }
}

module.exports= new selectController()