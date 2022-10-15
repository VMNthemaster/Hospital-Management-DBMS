import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddRoom = () => {
  const navigate = useNavigate()
  const [roomDetails, setRoomDetails] = useState({
    Id: '',
    type: '',
    isOccupied: '',
    RoomCharge: '',
  })

  const sendRequestToBackend = async () => {
    const url = `http://localhost:5000/rooms/addRoom`
    const res = await axios
      .post(url, {
        Id: roomDetails.Id,
        type: roomDetails.type,
        isOccupied: roomDetails.isOccupied,
        RoomCharge: roomDetails.RoomCharge,
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
    setRoomDetails((prevInfo) => {
      return {
        ...prevInfo,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendRequestToBackend().then((data) => {
      navigate('/rooms/view')
    })
  }

  return (
    <div className="bg">
      <div className="flex flex-col w-1/2 justify-center items-center px-[2vw] py-[2vh] gap-x-[5vw] gap-y-[5vh] h-[100vh]">
        <h2 className="text-3xl font-serif underline">Add Room</h2>
        <form className="w-[80%] flex flex-col px-3 py-4 border-2 border-black rounded-md gap-y-4 bg-gray-200">
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#107b87] text-xl" htmlFor="Id">
              Room ID:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="Id"
              value={roomDetails.Id}
            />
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#107b87] text-xl" htmlFor="type">
              Type:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="type"
              value={roomDetails.type}
            />       
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#107b87] text-xl" htmlFor="isOccupied">
              Is Occupied:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="isOccupied"
              value={roomDetails.isOccupied}
              placeholder='true/false'
            />       
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#107b87] text-xl" htmlFor="RoomCharge">
              Room Charge:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="RoomCharge"
              value={roomDetails.RoomCharge}
            />       
          </div>
          <button onClick={handleSubmit} className="px-2 py-1 border-2 border-black w-[30%] mx-auto rounded-md bg-[#30acba]"> 
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddRoom
