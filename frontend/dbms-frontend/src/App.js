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
              
              {/* <Route path='*' element={<PageNotFound />} /> */}
          </Routes>
        </Router>
      </main>
    </React.Fragment>
  );
}

export default App;
