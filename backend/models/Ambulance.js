module.exports = (sequelize, DataTypes) => {
    const Ambulance = sequelize.define("Ambulance", {
        Type: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        NumberPlate: {
            primaryKey: true,
            type: DataTypes.STRING(10),
            allowNull: false
        },
        vehicleName: DataTypes.STRING(25),
        modelNumber: DataTypes.STRING(25),
        isAvailable: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Facilities: {
            type: DataTypes.STRING
        }
    })

    return Ambulance
}