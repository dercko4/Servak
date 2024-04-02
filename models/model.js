const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Teachers = sequelize.define('teachers',{
    id_teacher: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    FIO: {type: DataTypes.STRING},
    job_title: {type: DataTypes.STRING},
    work_experience_in_specialty: {type: DataTypes.INTEGER},
    studying_at_a_university: {type: DataTypes.BOOLEAN},
    diploma_specialization: {type: DataTypes.BOOLEAN},
    diploma_of_professional_retraining: {type: DataTypes.BOOLEAN},
    experience_in_scientific_and_practical_activities: {type: DataTypes.BOOLEAN},
    qualification: {type: DataTypes.STRING},
    image_path: {type: DataTypes.STRING}
},
{
    createdAt: false,
    updatedAt: false
})

const Lessons_Teachers = sequelize.define('lessons_teachers', {
    id_wire: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    lesson: {type: DataTypes.STRING}
},
{
    createdAt: false,
    updatedAt: false
})

const Table = sequelize.define('tables', {
    id_table: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date_table: {type: DataTypes.DATE, primaryKey: true},
    number_para: {type: DataTypes.SMALLINT},
    audience_number: {type: DataTypes.INTEGER},
    group: {type: DataTypes.STRING}
},
{
    timestamps: true,
    createdAt: false,
    updatedAt: false
})

Teachers.hasMany(Lessons_Teachers)
Lessons_Teachers.belongsTo(Teachers)

Teachers.hasMany(Table)
Table.belongsTo(Teachers)

Lessons_Teachers.hasMany(Table)
Table.belongsTo(Lessons_Teachers)

module.exports=
{
    Teachers,
    Lessons_Teachers,
    Table
}





