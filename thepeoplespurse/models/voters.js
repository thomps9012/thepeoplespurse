module.exports = function(sequelize, DataTypes) {
    var Voter = sequelize.define("Voter", {
        tax_bracket: {
            type: DataTypes.INTEGER,
            // allowNull: false
        } 
    });
        return Voter;
    };