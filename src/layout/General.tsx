import React from 'react'
import "../styles/generallayout.css";
import Navbar from '../components/Layout/Navbar'

function General() {
  return (
    <div className="general_container">
      <div className="general_container-top">
        <Navbar />
      </div>
    </div>
  )
}

export default General;