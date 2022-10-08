import React from 'react'
import { Container } from 'react-grid-system'
import { useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'

const Add_item = () => {
  const [id, setId] = useState()
  const [name, setName] = useState()
  const [price, setPrice] = useState()

  let item = {
    id: id,
    name: name,
    price: price,
  }
  function check(event) {
    if (event.target.name === 'id') {
      setId(event.target.value)
    } else if (event.target.name === 'name') {
      setName(event.target.value)
    } else if (event.target.name === 'price') setPrice(event.target.value)
  }
  // console.log(id)
  let addItem = (event) => {
    event.preventDefault()
    axios
      .post('http://localhost:4000/items', item)
      .then((response) => {
        console.log(response.data)
        setId("")
        setName("")
        setPrice("")
      })
      .catch((error) => console.log(error.response.data))
  }

  function resetItem() {
    setId('')
    setName('')
    setPrice('')
  }
  return (
    <div className="mt-5">
      <Container>
        <Form onSubmit={addItem}>
          <div class="row">
            <label for="colFormLabelLg" class="col-4 col-form-label ">
              Item ID
            </label>
            <div class="col-8">
              <input
                type="text"
                class="form-control "
                id="colFormLabelLg"
                name="id"
                value={id}
                placeholder="Enter Item ID"
                onChange={check}
              />
            </div>
          </div>
          <div class="row mt-4">
            <label for="colFormLabelLg" class="col-4 col-form-label">
              Item Name
            </label>
            <div class="col-8">
              <input
                type="text"
                class="form-control"
                id="colFormLabelLg"
                name="name"
                value={name}
                placeholder="Enter Name of the Item"
                onChange={check}
              />
            </div>
          </div>
          <div class="row mt-4">
            <label for="colFormLabelLg" class="col-4 col-form-label ">
              Price
            </label>
            <div class="col-8">
              <input
                type="number"
                class="form-control "
                id="colFormLabelLg"
                name="price"
                value={price}
                placeholder="Enter Price of Item"
                onChange={check}
              />
            </div>
          </div>
          <div className="mt-4">
            <button type="submit" class="btn btn-primary">
              Add Item
            </button>
            <button
              type="button"
              class="btn btn-primary ms-4"
              onClick={resetItem}
            >
              Reset
            </button>
          </div>
        </Form>
      </Container>
    </div>
  )
}

export default Add_item
