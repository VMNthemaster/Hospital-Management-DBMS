module.exports = (sequelize, DataTypes) => {
    const Bill = sequelize.define("Bill", {
        Id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: DataTypes.INTEGER
        },
        BillInfo: DataTypes.STRING
    })

    return Bill
}