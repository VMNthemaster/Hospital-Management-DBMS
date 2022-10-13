module.exports = (sequelize, DataTypes) => {
    const Doctor = sequelize.define("Doctor", {
       DoctorId: {
        primaryKey: true,
        required: true,
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement: true
       },
       Name: {
        type:  DataTypes.STRING,
        allowNull : false,
        required: true
       },
       PatientIds: {
        type: DataTypes.STRING,
        allowNull: false 
       },
       Speciality: {
        type: DataTypes.STRING,
        allowNull: false
       },
       Contact: {
        type: DataTypes.STRING(10),
        allowNull: false
       }


    })
    
    return Doctor
}

