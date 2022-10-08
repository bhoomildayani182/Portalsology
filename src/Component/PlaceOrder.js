// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const PlaceOrder = () => {
//   const [id, setid] = useState()
//   const [name, setname] = useState()
//   const [quantity, setQuantity] = useState()
//   const [items, setItems] = useState()
//   useEffect( async () => {
//     try {
//       const resp = await axios.get('http://localhost/4000/items');
//       console.log(resp.data);
//   } catch (err) {
//       // Handle Error Here
//       console.error(err);
//   }
//   }, [])

//   return (
//     <div>
//       <select className="form-select" aria-label="Default select example">
//         {items.map((item)=>{
//           <option key={item.id} value={item.name}>
//           {item.name}
//           </option>
//         })}
//       </select>
//     </div>
//   )
// }

// export default PlaceOrder

import React, { useState } from 'react'
export const CustomDropdown = (props) => (
  <div className="form-group">
    <select className="form-control" onChange={props.onChange}>
      <option defaultValue>Select {props.name}</option>
      {props.items.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  </div>
)
export default class PlaceOrder extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      value: '',
    }
  }
  componentDidMount() {
    fetch('http://localhost:4000/items')
      .then((response) => response.json())
      .then((res) => this.setState({ items: res }))
  }
  onChange = (event) => {
    this.setState({ value: event.target.value })
    console.log(this.value)
    let x = event.target.value
  }

  handleSubmit = () => {}

  render() {
    return (
      <div className="container">
        <form>
          <CustomDropdown items={this.state.items} onChange={this.onChange} />
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Quantity
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <button type="submit" class="btn btn-primary ">
            Submit
          </button>

      </form>
      </div>
    )
  }
}

{/* <div className="form-group">
  <select className="form-control" onChange={this.onChange}>
    <option defaultValue>Select</option>
    {this.items.map((item) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ))}
  </select>
</div> */}