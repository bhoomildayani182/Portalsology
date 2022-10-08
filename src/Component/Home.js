import React from 'react'
import {
  Link
} from "react-router-dom";

const Home = () => {
  return (
    <div className='row d-flex justify-content-center align-items-center'>
      <div class="card text-center col-4 mx-4 my-2">
        
        <div class="card-body">
          <h5 class="card-title">List Of Items</h5>
          <p class="card-text">
            Total number of items that are currently available on DTE.  
          </p>
          <Link to="/dashboard/listofitem" class="btn btn-primary">
            Button
          </Link>
        </div>
        
      </div>
      <div class="card text-center col-4 mx-4 my-2">
        
        <div class="card-body">
          <h5 class="card-title">Add Item</h5>
          <p class="card-text">
            Item which are not available on DTE. To add item click on button.
          </p>
          <Link to="/dashboard/additem" class="btn btn-primary">
            Button
          </Link>
        </div>
        
      </div>
      <div class="card text-center col-4 mx-4 my-2">
        
        <div class="card-body">
          <h5 class="card-title">Institute</h5>
          <p class="card-text">
            List of institute registered on DTE.
          </p>
          <Link to="/dashboard/institute" class="btn btn-primary">
            Button
          </Link>
        </div>
        
      </div>
      <div class="card text-center col-4 mx-4 my-2">
        
        <div class="card-body">
          <h5 class="card-title">Order List</h5>
          <p class="card-text">
            Items selected by any institute.
          </p>
          <Link to="/dashboard/orderlist" class="btn btn-primary">
            Button
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Home
