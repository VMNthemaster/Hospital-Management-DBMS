import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CheckAmbulanceAvailabity = () => {
    const [allAvailableAmbulances, setAllAvailableAmbulances] = useState([])
    const [updateAvailability, setUpdateAvailability] = useState({
      numberPlate: '',
      isAvailable: ''
    })
    const [showMessage, setShowMessage] = useState(false)

    useEffect(() => {
      // write query here and display the data as table
      const getallMedicines = async () => {
        const url = `http://localhost:5000/ambulances/check`
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
        if (data.success) {
          setAllAvailableAmbulances(data.allAmbulances)
        } else {
          console.log(data.message)
        }
      })
    }, [])

    const handleChange = (e) => {
      setUpdateAvailability(prevValue => {
        return {
          ...prevValue,
          [e.target.name]: e.target.value
        }
      })
    }

    const sendRequestToBackend = async () => {
      const url = `http://localhost:5000/ambulances/update`
      const res = await axios.patch(url, {
        numberPlate: updateAvailability.numberPlate,
        isAvailable: updateAvailability.isAvailable
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
          <h2 className="text-3xl font-serif underline">Ambulances</h2>
          <table className="border-collapse table-auto bg-[#FCD144] cursor-default">
            <tbody>
              <tr>
                <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">Available Ambulances</th>
              </tr>
              {allAvailableAmbulances && allAvailableAmbulances.length > 0 &&
                allAvailableAmbulances.map((ambulance) => {
                  return (
                    <tr key={ambulance.NumberPlate}>
                      <td className='px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono'>{ambulance.NumberPlate}</td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
          <h2 className="text-3xl font-serif underline">Update availability</h2>
          <form className="w-[70%] flex flex-col px-3 py-4 border-2 border-black rounded-md gap-y-4 bg-gray-200">
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#8b6f16] text-xl" htmlFor="patientId">
              Number Plate:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="numberPlate"
              value={updateAvailability.numberPlate}
            />
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#8b6f16] text-xl" htmlFor="billId">
              Is Available:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="isAvailable"
              value={updateAvailability.isAvailable}
              placeholder='true/false'
            />
          </div>
          <button onClick={handleSubmit} className="px-2 py-1 border-2 border-black w-[30%] mx-auto rounded-md bg-[#FCD144]"> 
            Update
          </button>
          {showMessage && <h2 className='text-center'>Records updated</h2>}
        </form>
        </div>
      </div>
    )
}

export default CheckAmbulanceAvailabity