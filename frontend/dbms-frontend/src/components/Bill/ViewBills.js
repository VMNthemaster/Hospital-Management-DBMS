import React, { useEffect, useState } from 'react'
import axios from 'axios'


const ViewBills = () => {
  const [allBills, setAllBills] = useState([])

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

  return (
    <div className="bg">
      <div className="flex flex-col w-[50%] justify-center items-center px-[2vw] py-[2vh] gap-x-[5vw] gap-y-[5vh] min-h-[100vh]">
        <h2 className="text-3xl font-serif underline">Bills Information</h2>
        <table className="border-collapse table-auto bg-[#d1a390] cursor-default">
          <tbody>
            <tr>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">Bill ID</th>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">Room Cost</th>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">Staff Cost</th>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">Medicine Cost</th>
              <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">Total Cost</th>
            </tr>
            {allBills && allBills.length > 0 &&
              allBills.map((bill) => {
                return (
                  <tr key={bill.Id}>
                    <td className='px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono'>{bill.Id}</td>
                    <td className='px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono'>{bill.RoomCost}</td>
                    <td className='px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono'>{bill.StaffCost}</td>
                    <td className='px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono'>{bill.MedicineCost}</td>
                    <td className='px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono'>{bill.TotalCost}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewBills