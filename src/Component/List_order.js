import axios from 'axios'
import React, { useEffect } from 'react'

const List_order = () => {

  useEffect(()=>{
    axios.get("http://localhost:4000/order")
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Owner</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}

export default List_order
