import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewMedicines = () => {
    const [allMedicines, setAllMedicines] = useState([])
    useEffect(() => {
        // write query here and display the data as table
        const getallMedicines = async () => {
          const url = `http://localhost:5000/medicines`
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
            setAllMedicines(data.allMedicines)
          } else {
            console.log(data.message)
          }
        })
      }, [])
      return (
        <div className="bg">
          <div className="flex flex-col w-[95%] justify-center items-center px-[2vw] py-[2vh] gap-x-[5vw] gap-y-[5vh] h-[100%]">
            <h2 className="text-3xl font-serif underline">Medicines Information</h2>
            <table className="border-collapse table-auto bg-[#7be29e] cursor-default">
              <tbody>
                <tr>
                  <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">Medicine ID</th>
                  <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">Name</th>
                  <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">Expiry Date</th>
                  <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">Mnf Date</th>
                  <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">Price</th>
                  <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">Issued By</th>
                  <th className="border-collapse border-[1.5px] border-black font-serif px-[1vw] py-[1vh] text-xl">Quantity</th>
                </tr>
                {allMedicines && allMedicines.length > 0 &&
                  allMedicines.map((medicine) => {
                    return (
                      <tr key={medicine.PatientId}>
                        <td className='px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono'>{medicine.OrdeerNo}</td>
                        <td className='px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono'>{medicine.name}</td>
                        <td className='px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono'>{medicine.ExpDate}</td>
                        <td className='px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono'>{medicine.MnfDate}</td>
                        <td className='px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono'>{medicine.Price}</td>
                        <td className='px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono'>{medicine.IssuedBy}</td>
                        <td className='px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono'>{medicine.Quantity}</td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )
}

export default ViewMedicines