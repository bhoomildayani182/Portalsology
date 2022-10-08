import React from 'react'
import '../App.css'
// import {useNavigate} from 'react-router-dom';
import { 
  Link
} from "react-router-dom";

const Navigaitonbar = () => {
  // const navigate = useNavigate();
  
  let handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href="/institutelogin";
  }

  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none">
          <svg className="bi me-2" width="40" height="32"></svg>
          <span className="fs-4">Portalsology</span>
        </a>

          {/* <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"></ul> */}


          <div className="text-end">
            {!localStorage.getItem('token') &&<Link type="button" className="btn btn-outline-light me-2" to='/institutelogin'>
              Institute Login
            </Link>}
            {!localStorage.getItem('token') && <Link type="button" className="btn btn-warning me-2" to='/dtelogin'>
              DTE Login
            </Link>}
            {/* <Link type="button" className="btn btn-warning me-2" to='/dashboard'>
              Dashboard
            </Link> */}
            {localStorage.getItem('token') && <button type="button" className="btn btn-warning" onClick={handleLogout}>
              Logout
            </button>}
            
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigaitonbar
