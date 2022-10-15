import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewMedicines = () => {
    const [allMedicines, setAllMedicines] = useState([])
    const [medicineName, setMedicineName] = useState('')
    const [search, setSearch] = useState({
      isAvailable: false,
      showMessage: false,
    })


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
          if (data.success) {
            setAllMedicines(data.allMedicines)
          } else {
            console.log(data.message)
          }
        })
      }, [])

      const handleChange = (e) => {
        setMedicineName(e.target.value)
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        const medicine = allMedicines.filter(med => {
          return med.name === medicineName
        })
        console.log(medicine)

        if(medicine.length !== 0){
          setSearch({
            isAvailable: true,
            showMessage: true,
          })
          setTimeout(() => {
            setSearch({
              isAvailable: true,
              showMessage: false,
            })
          }, 3000);
        }
        else{
          setSearch({
            isAvailable: false,
            showMessage: true,
          })
          setTimeout(() => {
            setSearch({
              isAvailable: false,
              showMessage: false,
            })
          }, 3000);
        }
      }

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
                      <tr key={medicine.Id} >
                        <td className='px-[1vw] py-[1vh] text-center text-white text-xl border-collapse border-[1.5px] border-black font-mono'>{medicine.Id}</td>
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

            {/* search medicine */}
            <h2 className="text-3xl font-serif underline">Search Medicine</h2>
            <form className="w-[40%] flex flex-col px-3 py-4 border-2 border-black rounded-md gap-y-4 bg-gray-200">
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-green-700 text-xl" htmlFor="medicineName">
              Medicine Name:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="medicineName"
              value={medicineName}
            />
          </div>
          <button onClick={handleSubmit} className="px-2 py-1 border-2 border-black w-[30%] mx-auto rounded-md bg-green-600 text-white"> 
            Search
          </button>
          {search.showMessage && <h2 className='text-center font-serif'>Medicine {search.isAvailable ? 'is available' : 'is not available'}</h2>}
        </form>

        

          </div>
        </div>
      )
}

export default ViewMedicines