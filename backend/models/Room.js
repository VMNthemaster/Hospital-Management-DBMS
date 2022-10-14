module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define("Room", {
        Id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isOccupied: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        RoomCharge: DataTypes.INTEGER

    })

    return Room
}