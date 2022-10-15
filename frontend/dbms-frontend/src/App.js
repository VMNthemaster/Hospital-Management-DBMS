import React from 'react'
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import ViewDoctors from './components/Doctor/ViewDoctors';
import ViewPatients from './components/Patient/ViewPatients';
import ViewMedicines from './components/Medicine/ViewMedicines';
import CheckAmbulanceAvailabity from './components/Ambulance/CheckAmbulanceAvailabity';
import CheckRoomAvailability from './components/Rooms/CheckRoomAvailability';
import ViewBills from './components/Bill/ViewBills';
import AddDoctor from './components/Doctor/AddDoctor';
import AddPatient from './components/Patient/AddPatient';
import AddMedicine from './components/Medicine/AddMedicine';
import AddBill from './components/Bill/AddBill';
import AddAmbulance from './components/Ambulance/AddAmbulance';
import AddRoom from './components/Rooms/AddRoom';



function App() {
  return (
    <React.Fragment>
      <main>
        <Router>
          <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/doctors/view" element={<ViewDoctors />} />
                <Route path="/patients/view" element={<ViewPatients />} />
                <Route path="/medicines/view" element={<ViewMedicines />} />
                <Route path="/bills/view" element={<ViewBills />} />
                <Route path="/ambulances/view" element={<CheckAmbulanceAvailabity />} />
                <Route path="/rooms/view" element={<CheckRoomAvailability />} />

                <Route path='/doctors/add' element={<AddDoctor /> } />
                <Route path='/patients/add' element={<AddPatient />} />
                <Route path='/medicines/add' element={<AddMedicine /> } />
                <Route path='/bills/add' element={<AddBill /> } />
                <Route path='/ambulances/add' element={<AddAmbulance /> } />
                <Route path='/rooms/add' element={<AddRoom /> } />
          </Routes>
        </Router>
      </main>
    </React.Fragment>
  );
}

export default App;
