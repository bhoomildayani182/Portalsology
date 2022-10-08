import React, { useState } from 'react'
import '../CSS/login_signup.css'
// import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const InstituteLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(credentials)
    axios
      .post('http://localhost:4000/users/login', {
        email: credentials.email,
        password: credentials.password,
      })
      .then((response) => {
        console.log(response.data.accessToken)
        if(response.data.accessToken){
          console.log("valid")
          localStorage.setItem('token', response.data.accessToken)
          localStorage.setItem('name', response.data.user.name)
          localStorage.setItem('userid', response.data.user._id)
          window.location.href="/institutedeshboard/home";
        }
      })  
      .catch((error) => {
        // console.log(error)
        console.log("InVallid")
      })


  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
    console.log(credentials.email)
  }

  return (
    <div className="main_container">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit}>
          {/* <img
            className="mb-4"
            src="../assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          /> */}
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          {/* <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div> */}
          <select className="form-select" aria-label="Default select example" value={credentials.email} onChange={onChange} id="email" name='email' >
            <option selected value="cspit@gmail.com">CSPIT</option>
            <option value="depstar@gmail.com">DEPSTAR</option>
            <option value="pdpias@gmail.com">PDPIAS</option>
            <option value="mca@gmail.com">MCA</option>
          </select>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-warning" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2022–2023</p>
        </form>
      </main>
    </div>
  )
}

export default InstituteLogin
