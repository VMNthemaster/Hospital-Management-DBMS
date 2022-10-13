module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define("Patient", {
        PatientId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            required: true
        },
        // Personal Info
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        ContactNo: DataTypes.STRING(10),
        EmergencyContact: DataTypes.STRING(10),
        AdmittedOn: DataTypes.DATE,
        ReleasedOn: DataTypes.DATE,
        Disease: DataTypes.STRING,
        DoctorId: {
            type: DataTypes.INTEGER,
            // foreignKey : true,
            // references: {
            //     model: 'Doctor',
            //     referenceKey : 'DoctorId'
            // }
        },
        BillId: {
            type: DataTypes.INTEGER,
        },
        RoomId: DataTypes.INTEGER

    })

    return Patient
}