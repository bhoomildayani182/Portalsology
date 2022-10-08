import React from 'react'
import '../CSS/dashboard.css'
import {
  Link, Outlet
} from "react-router-dom";


const Dashboard = () => {
  let handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name')
    window.location.href="/dtelogin";
  }
  return (
    <>
    <main className="d-flex flex-nowrap">
    {/* <BrowserRouter> */}
      <h1 className="visually-hidden">Sidebars examples</h1>

      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{"width": "280px"}}>
        <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        {/* <i class="fa-solid fa-gauge me-2"></i> */}
          <span className="fs-4">Dashboard</span>
        </div>
        <hr />
            <ul className="nav nav-pills d-flex flex-column align-items-start mb-auto">
              <li className="nav-item">
                <Link to='/dashboard/home' className="nav-link active" aria-current="page">
                <i className="fa-sharp fa-solid fa-house me-2"></i>
                  Home
                </Link>
              </li>
              {/* <li>
                <Link to="/dashboard/listofitem" className="nav-link dropdown-toggle text-white">
                <i className="fa-solid fa-list me-2"></i>
                  List of Item
                </Link>
              </li> */}
              <li>
                <a href='#' className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-list me-2"></i>
                  List of Item
                </a>
                <ul class="dropdown-menu">
                    <li><Link class="dropdown-item" to='/dashboard/below'>Lesser than 20000</Link></li>
                    <li><Link class="dropdown-item" to='/dashboard/upper'>Greater than 20000</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/dashboard/additem" className="nav-link text-white">
                <i className="fa-solid fa-plus me-2"></i>
                  Add Item
                </Link>
              </li>
              <li>
                <Link to="/dashboard/institute" className="nav-link text-white">
                <i className="fa-solid fa-building-columns me-2"></i>
                  Institute
                </Link>
              </li>
              <li>
                <Link to="/dashboard/orderlist" className="nav-link text-white">
                <i className="fa fa-list-ol me-2" aria-hidden="true"></i>
                  Order List
                </Link>
              </li>
            </ul>
          <hr />
            <div className="dropdown">
              <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                {/* <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" /> */}
                  <strong>{localStorage.getItem('name')}</strong>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><button className="dropdown-item" onClick={handleLogout}>Sign out</button></li>
              </ul>
            </div>
          </div>

          <div className=" b-example-vr"></div>
          
          <Outlet />
          {/* </BrowserRouter> */}
        </main>
      </>
    )
}

export default Dashboard
