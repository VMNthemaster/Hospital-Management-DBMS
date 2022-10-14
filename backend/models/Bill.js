module.exports = (sequelize, DataTypes) => {
    const Bill = sequelize.define("Bill", {
        Id: {
            primaryKey: true,
            allowNull: false,
            type: DataTypes.INTEGER
        },
        TotalCost: DataTypes.INTEGER,
        RoomCost: DataTypes.INTEGER,
        StaffCost: DataTypes.INTEGER,
        MedicineCost: DataTypes.INTEGER

    })

    return Bill
}