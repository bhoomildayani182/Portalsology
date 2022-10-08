import React, {useEffect, useState} from 'react'
import axios from 'axios'

const List_Institute = () => {
  const [items,setItems] = useState([]);
  useEffect(()=>{
      getItem();
  })
  function getItem(){
      axios.get("http://localhost:4000/")
      .then(response => setItems(response.data))
      .catch(error => alert(error))
  }
  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>  
    </tr>
  </thead>
  <tbody>
  {items.map(items =>
        <tr key={items.id}>
          <td>{items.name}</td>
          <td>{items.email}</td>              
        </tr>
    )}
  </tbody>
</table>
  )
}

export default List_Institute
