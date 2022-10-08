import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const PlacedOrder = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:4000/order', { headers: {"Authorization" : localStorage.getItem('token')} })
      .then(response => setItems(response.data))
      .catch((error) => console.log(error))
  }, [])
  return (
    <div>
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
            { items.map(item => <tr>
              <th scope="row">{item.name}</th>
              <td>{item.qty}</td>
              <td>{item.owner}</td>
              <td>{item.confirmed}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PlacedOrder
