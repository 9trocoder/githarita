import React from 'react'
import "../styles/generallayout.css";
import Sidebar from '../components/Layout/Sidebar'
import Pagecontent from '../components/Layout/Pagecontent'
import Rightbar from '../components/Layout/Rightbar'

function General() {
  return (
    <div className="general_container">
      <Sidebar />
      <Pagecontent />
      <Rightbar />
    </div>
  )
}

export default General