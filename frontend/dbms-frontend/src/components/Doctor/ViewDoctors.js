import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewDoctors = () => {
  const [allDoctors, setAllDoctors] = useState([])
  useEffect(() => {
    // write query here and display the data as table
    const getAllDoctors = async () => {
      const url = `http://localhost:5000/doctors`
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

    getAllDoctors().then((data) => {
      if (data.success) {
        setAllDoctors(data.allDoctors)
      } else {
        console.log(data.message)
      }
    })
  }, [])

  return (
    <div className="bg">
      <div className="flex flex-col w-1/2 justify-center items-center px-[2vw] py-[2vh] gap-x-[5vw] gap-y-[5vh] h-[100%]">
        <h2 className="text-3xl font-serif underline">Doctors Information</h2>
        <table className="border-collapse table-auto bg-[#f48389] cursor-default">
          <tbody>
            <tr>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">Doctor ID</th>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">Name</th>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">Contact</th>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">Speciality</th>
            </tr>
            {allDoctors && allDoctors.length > 0 &&
              allDoctors.map((doctor) => {
                return (
                  <tr key={doctor.DoctorId}>
                    <td className='px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono'>{doctor.DoctorId}</td>
                    <td className='px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono'>{doctor.Name}</td>
                    <td className='px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono'>{doctor.Contact}</td>
                    <td className='px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono'>{doctor.Speciality}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewDoctors
