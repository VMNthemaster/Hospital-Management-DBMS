import React, {} from 'react'
import {useNavigate} from "react-router-dom"


const LandingPage = () => {
    const navigate = useNavigate()
  return (
    <div className="bg">
      <div className="flex w-1/2 justify-center items-center px-[2vw] py-[2vh] gap-x-[5vw] gap-y-[5vh] flex-wrap h-[100vh]">
    {/* doctors */}
        <div className="doctors w-[33%] h-[20vh] bg-[#FE7179] flex flex-col rounded-t-md">
          <div className="title h-[25%] flex justify-center items-center border-2 border-black rounded-t-md">
            <h2 className=" text-center  text-white font-semibold font-serif ">Doctors</h2>
          </div>
          <div className="options flex h-[75%] ">
            <div onClick={() => navigate('/doctors/add')} className="w-[50%] border-2 border-black h-full flex justify-center items-center cursor-pointer">
              <h2 className="text-center text-white font-semibold font-serif">Add Doctor</h2>
            </div>
            <div onClick={() => navigate('/doctors/view')} className="w-[50%] border-2 border-black h-full flex justify-center items-center cursor-pointer">
              <h2 className="text-center text-white font-semibold font-serif ">View Doctors</h2>
            </div>
          </div>
        </div>

    {/* patients */}
    <div className="patients w-[33%] h-[20vh] bg-[#bda5ed] flex flex-col rounded-t-md">
          <div className="title h-[25%] flex justify-center items-center border-2 border-black rounded-t-md">
            <h2 className=" text-center text-white font-semibold font-serif  ">Patients</h2>
          </div>
          <div className="options flex h-[75%] ">
            <div onClick={() => navigate('/patients/add')} className="w-[50%] border-2 border-black h-full flex justify-center items-center cursor-pointer">
              <h2 className="text-center text-white font-semibold font-serif">Add Patient</h2>
            </div>
            <div onClick={() => navigate('/patients/view')} className="w-[50%] border-2 border-black h-full flex justify-center items-center cursor-pointer">
              <h2 className="text-center text-white font-semibold font-serif ">View Patients</h2>
            </div>
          </div>
        </div>

    {/* medicine */}
    <div className="medicine w-[33%] h-[20vh] bg-[#7be29e] flex flex-col rounded-t-md">
          <div className="title h-[25%] flex justify-center items-center border-2 border-black rounded-t-md">
            <h2 className=" text-center  text-white font-semibold font-serif ">Medicine</h2>
          </div>
          <div className="options flex h-[75%] ">
            <div onClick={() => navigate('/medicines/add')} className="w-[50%] border-2 border-black h-full flex justify-center items-center cursor-pointer">
              <h2 className="text-center text-white font-semibold font-serif">Add Medicine</h2>
            </div>
            <div onClick={() => navigate('/medicines/view')} className="w-[50%] border-2 border-black h-full flex justify-center items-center cursor-pointer">
              <h2 className="text-center text-white font-semibold font-serif">View Medicines</h2>
            </div>
          </div>
        </div>

    {/* ambulance */}
    <div className="ambulance w-[33%] h-[20vh] bg-[#FCD144] flex flex-col rounded-t-md">
          <div className="title h-[25%] flex justify-center items-center border-2 border-black rounded-t-md">
            <h2 className=" text-center  text-white font-semibold font-serif ">Ambulance</h2>
          </div>
          <div className="options flex h-[75%] ">
            <div onClick={() => navigate('/ambulances/add')} className="w-[50%] border-2 border-black h-full flex justify-center items-center cursor-pointer">
              <h2 className="text-center text-white font-semibold font-serif">Add ambulance</h2>
            </div>
            <div onClick={() => navigate('/ambulances/view')} className="w-[50%] border-2 border-black h-full flex justify-center items-center cursor-pointer">
              <h2 className="text-center text-white font-semibold font-serif">Check Availabilty</h2>
            </div>
          </div>
        </div>

        {/* rooms */}
        <div className="doctors bg-[#89e3ed] w-[33%] h-[20vh] flex flex-col rounded-t-md">
          <div className="title h-[25%] flex justify-center items-center border-2 border-black rounded-t-md">
            <h2 className=" text-center  text-white font-semibold font-serif ">Rooms</h2>
          </div>
          <div className="options flex h-[75%] ">
            <div onClick={() => navigate('/rooms/add')} className="w-[50%] border-2 border-black h-full flex justify-center items-center cursor-pointer">
              <h2 className="text-center text-white font-semibold font-serif">Add Rooms</h2>
            </div>
            <div onClick={() => navigate('/rooms/view')} className="w-[50%] border-2 border-black h-full flex justify-center items-center cursor-pointer ">
              <h2 className="text-center text-white font-semibold font-serif">Check Availabilty</h2>
            </div>
          </div>
        </div>

        {/* bill */}
        <div className="bill w-[33%] h-[20vh] bg-[#d1a390] flex flex-col rounded-t-md ">
          <div className="title h-[25%] flex justify-center items-center border-2 border-black rounded-t-md">
            <h2 className=" text-center  text-white font-semibold font-serif ">Bills</h2>
          </div>
          <div className="options flex h-[75%] ">
            <div onClick={() => navigate('/bills/add')} className="w-[50%] border-2 border-black h-full flex justify-center items-center cursor-pointer">
              <h2 className="text-center text-white font-semibold font-serif">Add Bill</h2>
            </div>
            <div onClick={() => navigate('/bills/view')} className="w-[50%] border-2 border-black h-full flex justify-center items-center cursor-pointer">
              <h2 className="text-center text-white font-semibold font-serif">View Bills</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
