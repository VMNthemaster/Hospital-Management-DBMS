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
        GeneralInfo: DataTypes.STRING,
        isAvailable: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Facilities: DataTypes.STRING
    })

    return Ambulance
}