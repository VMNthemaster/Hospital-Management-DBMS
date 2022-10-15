import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewBills = () => {
  const [allBills, setAllBills] = useState([])
  const [updateAvailability, setUpdateAvailability] = useState({
    prevBillId: '',
    newBillId: '',
  })
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    // write query here and display the data as table
    const getAllPatients = async () => {
      const url = `http://localhost:5000/bills`
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
        setAllBills(data.allBills)
      } else {
        console.log(data.message)
      }
    })
  }, [])

  const sendRequestToBackend = async () => {
    const url = `http://localhost:5000/bills/changeBillId`
    const res = await axios
      .patch(url, {
        prevBillId: updateAvailability.prevBillId,
        newBillId: updateAvailability.newBillId,
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
    setUpdateAvailability((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendRequestToBackend().then((data) => {
      if (data.success) {
        setShowMessage(true)
        setTimeout(() => {
          setShowMessage(false)
        }, 3000)
      }
    })
  }

  return (
    <div className="bg">
      <div className="flex flex-col w-[50%] justify-center items-center px-[2vw] py-[2vh] gap-x-[5vw] gap-y-[5vh] min-h-[100vh]">
        <h2 className="text-3xl font-serif underline">Bills Information</h2>
        <table className="border-collapse table-auto bg-[#d1a390] cursor-default">
          <tbody>
            <tr>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">
                Bill ID
              </th>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">
                Room Cost
              </th>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">
                Staff Cost
              </th>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">
                Medicine Cost
              </th>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">
                Total Cost
              </th>
            </tr>
            {allBills &&
              allBills.length > 0 &&
              allBills.map((bill) => {
                return (
                  <tr key={bill.Id}>
                    <td className="px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono">
                      {bill.Id}
                    </td>
                    <td className="px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono">
                      {bill.RoomCost}
                    </td>
                    <td className="px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono">
                      {bill.StaffCost}
                    </td>
                    <td className="px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono">
                      {bill.MedicineCost}
                    </td>
                    <td className="px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono">
                      {bill.TotalCost}
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>

        {/* change bill id */}
        <h2 className="text-3xl font-serif underline">Update Bill ID</h2>
        <form className="w-[70%] flex flex-col px-3 py-4 border-2 border-black rounded-md gap-y-4 bg-gray-200">
          <div className="flex justify-center gap-x-2 items-center">
            <label
              className="font-serif text-[#cf6537] text-xl"
              htmlFor="prevBillId"
            >
              Previous Bill ID:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="prevBillId"
              value={updateAvailability.prevBillId}
            />
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label
              className="font-serif text-[#cf6537] text-xl"
              htmlFor="newBillId"
            >
              New Bill ID:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="newBillId"
              value={updateAvailability.newBillId}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="px-2 py-1 border-2 border-black w-[30%] mx-auto rounded-md bg-[#d87e58]"
          >
            Update
          </button>
          {showMessage && <h2 className="text-center">Records updated</h2>}
        </form>
      </div>
    </div>
  )
}

export default ViewBills
