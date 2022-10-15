import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddPatient = () => {
  const navigate = useNavigate()
  const [patientDetails, setPatientDetails] = useState({
    PatientId: '',
    Name: '',
    ContactNo: '',
    EmergencyContact: '',
    AdmittedOn: '',
    ReleasedOn: '',
    Disease: '',
    DoctorDoctorId: '', // foreign key
    RoomId: '', // foreign key
  })

  const sendRequestToBackend = async () => {
    const url = `http://localhost:5000/patients/addPatient`
    const res = await axios
      .post(url, {
        PatientId: Number(patientDetails.PatientId),
        Name: patientDetails.Name,
        ContactNo: patientDetails.ContactNo,
        EmergencyContact: patientDetails.EmergencyContact,
        AdmittedOn: patientDetails.AdmittedOn,
        ReleasedOn: patientDetails.ReleasedOn,
        Disease: patientDetails.Disease,
        DoctorDoctorId: Number(patientDetails.DoctorDoctorId), // foreign key
        RoomId: Number(patientDetails.RoomId), // foreign key
      })
      .catch((err) => {
        console.log(err)
        return {
          data: {
            message: err.response.data.message,
            success: err.response.data.success,
          },
        }
      })
    const data = await res.data
    return data
  }

  const handleChange = (e) => {
    setPatientDetails((prevInfo) => {
      return {
        ...prevInfo,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendRequestToBackend().then((data) => {
      console.log(data)
      navigate('/patients/view')
    })
  }

  return (
    <div className="bg">
      <div className="flex flex-col w-1/2 justify-center items-center px-[2vw] py-[2vh] gap-x-[5vw] gap-y-[5vh] h-[100vh]">
        <h2 className="text-3xl font-serif underline">Add Patient</h2>
        <form className="w-[80%] flex flex-col px-3 py-4 border-2 border-black rounded-md gap-y-4 bg-gray-200">
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-violet-700 text-xl" htmlFor="PatientId">
              Patient ID:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="PatientId"
              value={patientDetails.PatientId}
            />
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-violet-700 text-xl" htmlFor="Name">
              Name:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="Name"
              value={patientDetails.Name}
            />       
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-violet-700 text-xl" htmlFor="ContactNo">
              Contact:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="ContactNo"
              value={patientDetails.ContactNo}
            />       
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-violet-700 text-xl" htmlFor="EmergencyContact">
              Emergenct Contact:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="EmergencyContact"
              value={patientDetails.EmergencyContact}
            />       
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-violet-700 text-xl" htmlFor="AdmittedOn">
            Admitted On:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="AdmittedOn"
              value={patientDetails.AdmittedOn}
              placeholder='DDDD-MM-YY'
            />       
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-violet-700 text-xl" htmlFor="ReleasedOn">
            Released On:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="ReleasedOn"
              value={patientDetails.ReleasedOn}
              placeholder='DDDD-MM-YY'
            />       
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-violet-700 text-xl" htmlFor="Disease">
            Disease:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="Disease"
              value={patientDetails.Disease}
            />       
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-violet-700 text-xl" htmlFor="DoctorDoctorId">
            Doctor Id:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="DoctorDoctorId"
              value={patientDetails.DoctorDoctorId}
            />       
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-violet-700 text-xl" htmlFor="RoomId">
            Room Id:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="RoomId"
              value={patientDetails.RoomId}
            />       
          </div>

          
          <button onClick={handleSubmit} className="px-2 py-1 border-2 border-black w-[30%] mx-auto rounded-md bg-violet-300"> 
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddPatient
