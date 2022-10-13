module.exports = (sequelize, DataTypes) => {
    const Medicine = sequelize.define("Medicine", {
        Id:  {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ExpDate: DataTypes.DATE,
        MnfDate: DataTypes.DATE,
        Price: DataTypes.INTEGER,
        IssuedBy: DataTypes.STRING,
        OrdeerNo: DataTypes.INTEGER
    })

    return Medicine
}