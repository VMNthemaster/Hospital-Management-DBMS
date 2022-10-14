import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewPatients = () => {
  const [allPatients, setAllPatients] = useState([])
  const [updateInfo, setUpdateInfo] = useState({
    patientId: '',
    billId: '',
  })
  useEffect(() => {
    // write query here and display the data as table
    const getAllPatients = async () => {
      const url = `http://localhost:5000/patients`
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

    getAllPatients().then((data) => {
      console.log(data)
      if (data.success) {
        setAllPatients(data.allPatients)
      } else {
        console.log(data.message)
      }
    })
  }, [])

  const updateBillId = async () => {
    const url = `http://localhost:5000/patients/updateBill`
    const res = await axios.patch(url, {
      billId: Number(updateInfo.billId),
      patientId: Number(updateInfo.patientId)
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
    setUpdateInfo((prevInfo) => {
      return {
        ...prevInfo,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateBillId().then(data => {
      console.log(data)

    })
  }

  return (
    <div className="bg">
      <div className="flex flex-col w-[95%] justify-center items-center px-[2vw] py-[2vh] gap-x-[5vw] gap-y-[5vh] h-[100%]">
        <h2 className="text-3xl font-serif underline">Patients Information</h2>
        <table className="border-collapse table-auto bg-[#bda5ed] cursor-default">
          <tbody>
            <tr>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">
                Patient ID
              </th>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">
                Name
              </th>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">
                Emergency No.
              </th>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">
                Admitted On
              </th>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">
                Released On
              </th>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">
                Disease
              </th>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">
                Doctor ID
              </th>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">
                Room ID
              </th>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">
                Bill ID
              </th>
            </tr>
            {allPatients &&
              allPatients.length > 0 &&
              allPatients.map((patient) => {
                return (
                  <tr key={patient.PatientId}>
                    <td className="px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono">
                      {patient.PatientId}
                    </td>
                    <td className="px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono">
                      {patient.Name}
                    </td>
                    <td className="px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono">
                      {patient.ContactNo}
                    </td>
                    <td className="px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono">
                      {patient.EmergencyContact}
                    </td>
                    <td className="px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono">
                      {patient.AdmittedOn}
                    </td>
                    <td className="px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono">
                      {patient.Disease}
                    </td>
                    <td className="px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono">
                      {patient.DoctorDoctorId}
                    </td>
                    <td className="px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono">
                      {patient.RoomId}
                    </td>
                    <td className="px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono">
                      {patient.BillId}
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>

        {/* update billId */}
        <h2 className="text-3xl font-serif underline">Update Bill ID</h2>
        <form className="w-[30%] flex flex-col px-3 py-4 border-2 border-black rounded-md gap-y-4 bg-gray-200">
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-violet-700 text-xl" htmlFor="patientId">
              Patient ID:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="patientId"
              value={updateInfo.patientId}
            />
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-violet-700 text-xl" htmlFor="billId">
              Bill ID:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="billId"
              value={updateInfo.billId}
            />
          </div>
          <button onClick={handleSubmit} className="px-2 py-1 border-2 border-black w-[30%] mx-auto rounded-md bg-violet-300"> 
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default ViewPatients
