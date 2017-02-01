//user model created using sequelize
//talks to the table user


 //build a user model in sequelize
/*var Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes){
 return sequelize.define('user',{
	user: Sequelize.STRING,
	passwordhash: Sequelize.STRING
		});
}; */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user', {
		username: DataTypes.STRING,
		passwordhash: DataTypes.STRING
	});
};