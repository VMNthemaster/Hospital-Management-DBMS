module.exports = (sequelize, DataTypes) => {
    const Bill = sequelize.define("Bill", {
        Id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: DataTypes.INTEGER
        },
        TotalCost: DataTypes.DECIMAL,
        RoomCost: DataTypes.DECIMAL,
        StaffCost: DataTypes.DECIMAL,
        MedicineCost: DataTypes.DECIMAL

    })

    return Bill
}