var Sequelize = require('sequelize');

module.exports = function connection(){ 
    const sequelize = new Sequelize('mydb', 'mydb', '1111', {
        host: 'localhost',
        dialect: 'postgres',

        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });
      
    sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });
    
    return sequelize;
}();