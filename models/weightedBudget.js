module.exports = function(sequelize, DataTypes) {
    var WeightedBudget = sequelize.define("WeightedBudget", {
        tax_bracket: {
            type: DataTypes.INTEGER,
            // allowNull: false
        }, 
        agriculture:{
            type: DataTypes.INTEGER
            // allowNull: false
        },
        commerce: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        communication: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        defense: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        education: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        election: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        energy: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        environmental_protection: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        equal_employment: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        health_human_services: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        homeland_security: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        housing_urban_development: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        interior: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        justice: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        labor: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        nasa: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        social: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        state: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        trade: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        transportation: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        treasury: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        veterans_affairs: {
            type: DataTypes.INTEGER,
            // allowNull: false
        }
    });

    //Vote association
    // Vote.associate = function (models) {
    //     Vote.belongsTo(models.Voter);
    //     Budget.belongsTo(models.Vote);
    // }

    return WeightedBudget;
};