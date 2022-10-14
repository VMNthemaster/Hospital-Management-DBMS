module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    PatientId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      required: true,
    },
    // Personal Info
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    ContactNo: DataTypes.STRING(10),
    EmergencyContact: DataTypes.STRING(10),
    AdmittedOn: DataTypes.DATE,
    ReleasedOn: DataTypes.DATE,
    Disease: DataTypes.STRING,
    BillId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'bills', // 'bills' refers to table name
        key: 'Id', // 'id' refers to column name in fathers table
      },
    },
    DoctorDoctorId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'doctors',
          key: 'DoctorId', 
        },
      },
      RoomId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'rooms', 
          key: 'Id', 
        },
      },
  })

  return Patient
}
