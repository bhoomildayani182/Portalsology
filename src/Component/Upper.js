import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

const Upper = () => {
  const [items,setItems] = useState([]);
  useEffect(()=>{
      getItem();
  }, [])
  function getItem(){
      axios.get("http://localhost:4000/items/above20000")
      .then(response => setItems(response.data))
      .catch(error => alert(error))
  }
  return (
    <div className="my-5">
    <Table striped bordered hover>
      <thead>
      
        <tr>
          <th>Item ID</th>
          <th>Item Name</th>
          <th>Price</th>
          {/* <th>Quantity</th> */}
        </tr>
      </thead>
      <tbody>
      {
        items.map(items =>
        <tr key={items.id}>
          <td>{items.id}</td>
          <td>{items.name}</td>
          <td>{items.price}</td>
        </tr>
    )}
        </tbody>
    </Table>
    </div>
  )
}

export default Upper
