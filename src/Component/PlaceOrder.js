import axios from 'axios'
import React from 'react'
export default class PlaceOrder extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      name: "",
      quantity: ""
    }
  }
  componentDidMount() {
    fetch('http://localhost:4000/items')
      .then((response) => response.json())
      .then((res) => this.setState({ items: res }))
  }

  onChange = (event) => {
    console.log("onchange call")
    if(event.target.name === "name"){
      this.setState({ name: event.target.value })
      console.log(this.state.name)
    } else {
      this.setState({ quantity: event.target.value })
      console.log(this.state.quantity)
    }
    // console.log(this.state)
    // let x = event.target.value
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios.post("http://localhost:4000/order", {name: this.state.name, qty: this.state.quantity}, { headers: {"Authorization" : localStorage.getItem('token')} })
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          {/* <CustomDropdown items={this.state.items} onChange={this.onChange} /> */}
          <div className="form-group">
            <select className="form-control" value={this.state.name} id="name" name='name' onChange={this.onChange}>
              <option defaultValue>Select {this.state.name}</option>
              {this.state.items.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Quantity
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleInputEmail1 quantity"
              name='quantity'
              value={this.state.quantity}
              onChange={this.onChange}
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