import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CheckRoomAvailability = () => {
    const [allAvailableRooms, setAllAvailableRooms] = useState([])
    const [updateAvailability, setUpdateAvailability] = useState({
      roomNo: '',
      isOccupied: ''
    })
    const [showMessage, setShowMessage] = useState(false)

    useEffect(() => {
        // write query here and display the data as table
        const getallMedicines = async () => {
          const url = `http://localhost:5000/rooms/check`
          const res = await axios.get(url).catch((err) => {
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
    
        getallMedicines().then((data) => {
            console.log(data)
          if (data.success) {
            setAllAvailableRooms(data.allRooms)
          } else {
            console.log(data.message)
          }
        })
      }, [])

    const sendRequestToBackend = async () =>  {
      const url = `http://localhost:5000/rooms/update`
      const res = await axios.patch(url, {
        roomNo: updateAvailability.roomNo,
        isOccupied: updateAvailability.isOccupied
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
      setUpdateAvailability(prevValue => {
        return {
          ...prevValue,
          [e.target.name]: e.target.value
        }
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      sendRequestToBackend().then(data => {
        if(data.success){
          setShowMessage(true)
          setTimeout(() => {
          setShowMessage(false)
          }, 3000);
        }
      })
    }

      return (
        <div className="bg">
          <div className="flex flex-col w-[50%] justify-center items-center px-[2vw] py-[2vh] gap-x-[5vw] gap-y-[5vh] h-[100%]">
            <h2 className="text-3xl font-serif underline">Rooms</h2>
            <table className="border-collapse table-auto bg-[#89e3ed] cursor-default">
              <tbody>
                <tr>
                  <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">Available Rooms</th>
                  <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">Room Type</th>

                </tr>
                {allAvailableRooms && allAvailableRooms.length > 0 &&
                  allAvailableRooms.map((room) => {
                    return (
                      <tr key={room.Id}>
                        <td className='px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono'>{room.Id}</td>
                        <td className='px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono'>{room.type}</td>

                      </tr>
                    )
                  })}
              </tbody>
            </table>

            {/* update room availability */}
            <h2 className="text-3xl font-serif underline">Update availability</h2>
          <form className="w-[70%] flex flex-col px-3 py-4 border-2 border-black rounded-md gap-y-4 bg-gray-200">
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#148c9a] text-xl" htmlFor="roomNo">
              Room Number:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="roomNo"
              value={updateAvailability.roomNo}
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
              value={updateAvailability.isOccupied}
              placeholder='true/false'
            />
          </div>
          <button onClick={handleSubmit} className="px-2 py-1 border-2 border-black w-[30%] mx-auto rounded-md bg-[#89e3ed]"> 
            Update
          </button>
          {showMessage && <h2 className='text-center'>Records updated</h2>}
        </form>
          </div>
        </div>
      )
}

export default CheckRoomAvailability