module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false

        }
    })

    return Posts
}