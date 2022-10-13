module.exports = (sequelize, DataTypes) => {
    const Rooms = sequelize.define("Rooms", {
        Id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isOccupied: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }

    })

    return Rooms
}