import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddAmbulance = () => {
  const navigate = useNavigate()
  const [ambulanceDetails, setAmbulanceDetails] = useState({
    Type: '',
    NumberPlate: '',
    vehicleName: '',
    modelNumber: '',
    isAvailable: '',
    Facilities: '',
  })

  const sendRequestToBackend = async () => {
    const url = `http://localhost:5000/ambulances/addAmbulance`
    const res = await axios
      .post(url, {
        Type: ambulanceDetails.Type,
        NumberPlate: ambulanceDetails.NumberPlate,
        vehicleName: ambulanceDetails.vehicleName,
        modelNumber: ambulanceDetails.modelNumber,
        isAvailable: ambulanceDetails.isAvailable,
        Facilities: ambulanceDetails.Facilities,
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
    setAmbulanceDetails((prevInfo) => {
      return {
        ...prevInfo,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendRequestToBackend().then((data) => {
      navigate('/ambulances/view')
    })
  }

  return (
    <div className="bg">
      <div className="flex flex-col w-1/2 justify-center items-center px-[2vw] py-[2vh] gap-x-[5vw] gap-y-[5vh] h-[100vh]">
        <h2 className="text-3xl font-serif underline">Add Ambulance</h2>
        <form className="w-[80%] flex flex-col px-3 py-4 border-2 border-black rounded-md gap-y-4 bg-gray-200">
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#8b6f16] text-xl" htmlFor="NumberPlate">
              Number Plate:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="NumberPlate"
              value={ambulanceDetails.NumberPlate}
            />
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#8b6f16] text-xl" htmlFor="Type">
              Type:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="Type"
              value={ambulanceDetails.Type}
            />       
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#8b6f16] text-xl" htmlFor="vehicleName">
              Vehicle Name:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="vehicleName"
              value={ambulanceDetails.vehicleName}
            />       
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#8b6f16] text-xl" htmlFor="modelNumber">
              Model Number:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="modelNumber"
              value={ambulanceDetails.modelNumber}
            />       
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#8b6f16] text-xl" htmlFor="isAvailable">
              Is Available:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="isAvailable"
              value={ambulanceDetails.isAvailable}
              placeholder='true/false'
            />       
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#8b6f16] text-xl" htmlFor="Facilities">
              Facilities:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="Facilities"
              value={ambulanceDetails.Facilities}
            />       
          </div>
          <button onClick={handleSubmit} className="px-2 py-1 border-2 border-black w-[30%] mx-auto rounded-md bg-[#c59d1a]"> 
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddAmbulance
