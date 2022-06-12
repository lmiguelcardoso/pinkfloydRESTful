const Sequelize = require('sequelize');
const database = new Sequelize('pinkfloydapi', 'root', '123456',{
    host:"localhost",
    dialect: "mysql",
    timezone: "-03:00"
})



module.exports = database