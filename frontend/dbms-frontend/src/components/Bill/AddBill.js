import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddBill = () => {
  const navigate = useNavigate()
  const [billDetails, setBillDetails] = useState({
    Id: '',
    RoomCost: '',
    StaffCost: '',
    MedicineCost: '',
  })

  const sendRequestToBackend = async () => {
    const url = `http://localhost:5000/bills/addBill`
    const res = await axios
      .post(url, {
        Id: Number(billDetails.Id),
        RoomCost: Number(billDetails.RoomCost),
        StaffCost: Number(billDetails.StaffCost),
        MedicineCost: Number(billDetails.MedicineCost),
        TotalCost:
          Number(billDetails.RoomCost) +
          Number(billDetails.StaffCost) +
          Number(billDetails.MedicineCost),
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
    setBillDetails((prevInfo) => {
      return {
        ...prevInfo,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendRequestToBackend().then((data) => {
      navigate('/bills/view')
    })
  }

  return (
    <div className="bg">
      <div className="flex flex-col w-1/2 justify-center items-center px-[2vw] py-[2vh] gap-x-[5vw] gap-y-[5vh] h-[100vh]">
        <h2 className="text-3xl font-serif underline">Add Bill</h2>
        <form className="w-[80%] flex flex-col px-3 py-4 border-2 border-black rounded-md gap-y-4 bg-gray-200">
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#d87e58] text-xl" htmlFor="Id">
              Bill ID:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="Id"
              value={billDetails.Id}
            />
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label
              className="font-serif text-[#d87e58] text-xl"
              htmlFor="RoomCost"
            >
              Room Cost:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="RoomCost"
              value={billDetails.RoomCost}
            />
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label
              className="font-serif text-[#d87e58] text-xl"
              htmlFor="StaffCost"
            >
              Staff Cost:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="StaffCost"
              value={billDetails.StaffCost}
            />
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label
              className="font-serif text-[#d87e58] text-xl"
              htmlFor="MedicineCost"
            >
              Medicine Cost:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="MedicineCost"
              value={billDetails.MedicineCost}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="px-2 py-1 border-2 border-black w-[30%] mx-auto rounded-md bg-[#d87e58]"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddBill
