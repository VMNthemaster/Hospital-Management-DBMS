import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const AddDoctor = () => {
    const navigate = useNavigate()
  const [doctorDetails, setDoctorDetails] = useState({
    Name: '',
    Speciality: '',
    Contact: '',
    DoctorId: '',
  })

  const sendRequestToBackend = async () => {
    const url = `http://localhost:5000/doctors/addDoctor`
    const res = await axios
      .post(url, {
        Name: doctorDetails.Name,
        Speciality: doctorDetails.Speciality,
        Contact: doctorDetails.Contact,
        DoctorId: Number(doctorDetails.DoctorId),
      })
      .catch((err) => {
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
    setDoctorDetails((prevInfo) => {
      return {
        ...prevInfo,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendRequestToBackend().then((data) => {
      navigate('/doctors/view')
    })
  }

  return (
    <div className="bg">
      <div className="flex flex-col w-1/2 justify-center items-center px-[2vw] py-[2vh] gap-x-[5vw] gap-y-[5vh] h-[100vh]">
        <h2 className="text-3xl font-serif underline">Add Doctor</h2>
        <form className="w-[80%] flex flex-col px-3 py-4 border-2 border-black rounded-md gap-y-4 bg-gray-200">
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#e35f66] text-xl" htmlFor="DoctorId">
              Doctor ID:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="DoctorId"
              value={doctorDetails.DoctorId}
            />
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#e35f66] text-xl" htmlFor="Name">
              Name:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="Name"
              value={doctorDetails.Name}
            />       
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#e35f66] text-xl" htmlFor="Contact">
              Contact:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="Contact"
              value={doctorDetails.Contact}
            />       
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#e35f66] text-xl" htmlFor="Speciality">
              Speciality:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="Speciality"
              value={doctorDetails.Speciality}
            />       
          </div>
          <button onClick={handleSubmit} className="px-2 py-1 border-2 border-black w-[30%] mx-auto rounded-md bg-[#e35f66]"> 
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddDoctor
