import React from 'react'
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import ViewDoctors from './components/Doctor/ViewDoctors';
import ViewPatients from './components/Patient/ViewPatients';
import ViewMedicines from './components/Medicine/ViewMedicines';


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
              
              {/* <Route path='*' element={<PageNotFound />} /> */}
          </Routes>
        </Router>
      </main>
    </React.Fragment>
  );
}

export default App;
