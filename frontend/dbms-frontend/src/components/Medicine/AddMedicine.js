import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddMedicine = () => {
  const navigate = useNavigate()
  const [medicineDetails, setMedicineDetails] = useState({
    Id: '',
    name: '',
    ExpDate: '',
    MnfDate: '',
    Price: '',
    IssuedBy: '',
    OrdeerNo: 999,
    Quantity: '',
  })

  const sendRequestToBackend = async () => {
    const url = `http://localhost:5000/medicines/addMedicine`
    const res = await axios
      .post(url, {
        Id: Number(medicineDetails.Id),
        name: medicineDetails.name,
        ExpDate: medicineDetails.ExpDate,
        MnfDate: medicineDetails.MnfDate,
        Price: Number(medicineDetails.Price),
        IssuedBy: medicineDetails.IssuedBy,
        OrdeerNo: medicineDetails.OrdeerNo,
        Quantity: Number(medicineDetails.Quantity),
      })
      .catch((err) => {
        console.log(err)
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
    setMedicineDetails((prevInfo) => {
      return {
        ...prevInfo,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendRequestToBackend().then((data) => {
      console.log(data)
      navigate('/medicines/view')
    })
  }

  return (
    <div className="bg">
      <div className="flex flex-col w-1/2 justify-center items-center px-[2vw] py-[2vh] gap-x-[5vw] gap-y-[5vh] h-[100vh]">
        <h2 className="text-3xl font-serif underline">Add Medicine</h2>
        <form className="w-[80%] flex flex-col px-3 py-4 border-2 border-black rounded-md gap-y-4 bg-gray-200">
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#117432] text-xl" htmlFor="Id">
              Medicine ID:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="Id"
              value={medicineDetails.Id}
            />
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#117432] text-xl" htmlFor="name">
              Name:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="name"
              value={medicineDetails.name}
            />       
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#117432] text-xl" htmlFor="ExpDate">
              Expiry Date:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="ExpDate"
              value={medicineDetails.ExpDate}
              placeholder='YYYY-DD-MM'
            />       
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#117432] text-xl" htmlFor="MnfDate">
              Mnf Date:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="MnfDate"
              value={medicineDetails.MnfDate}
              placeholder='YYYY-DD-MM'
            />       
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#117432] text-xl" htmlFor="Price">
            Price:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="Price"
              value={medicineDetails.Price}
            />       
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#117432] text-xl" htmlFor="IssuedBy">
            Issued By:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="IssuedBy"
              value={medicineDetails.IssuedBy}
            />       
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <label className="font-serif text-[#117432] text-xl" htmlFor="Quantity">
            Quantity:{' '}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-md outline-none px-1 py-1"
              type="text"
              name="Quantity"
              value={medicineDetails.Quantity}
            />       
          </div>

          <button onClick={handleSubmit} className="px-2 py-1 border-2 border-black w-[30%] mx-auto rounded-md bg-[#2ad162]"> 
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddMedicine
