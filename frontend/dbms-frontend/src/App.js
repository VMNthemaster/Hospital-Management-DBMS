import React from 'react'
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import ViewDoctors from './components/Doctor/ViewDoctors';


function App() {
  return (
    <React.Fragment>
      <main>
        <Router>
          <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/doctors/view" element={<ViewDoctors />} />
              
              {/* <Route path='*' element={<PageNotFound />} /> */}
          </Routes>
        </Router>
      </main>
    </React.Fragment>
  );
}

export default App;
