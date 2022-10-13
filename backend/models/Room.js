module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define("Room", {
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
        },
        RoomCharge: DataTypes.DECIMAL

    })

    return Room
}