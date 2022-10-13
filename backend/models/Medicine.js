module.exports = (sequelize, DataTypes) => {
    const Medicine = sequelize.define("Medicine", {
        Id:  {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            required: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        ExpDate: DataTypes.DATE,
        MnfDate: DataTypes.DATE,
        Price: DataTypes.INTEGER,
        IssuedBy: DataTypes.STRING,
        OrdeerNo: DataTypes.INTEGER,
        Quantity: DataTypes.INTEGER
    })

    return Medicine
}