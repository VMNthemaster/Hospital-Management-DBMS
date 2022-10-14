import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CheckAmbulanceAvailabity = () => {
    const [allAvailableAmbulances, setAllAvailableAmbulances] = useState([])

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
          console.log(data)
        if (data.success) {
          setAllAvailableAmbulances(data.allAmbulances)
        } else {
          console.log(data.message)
        }
      })
    }, [])

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
        </div>
      </div>
    )
}

export default CheckAmbulanceAvailabity