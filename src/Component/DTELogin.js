import React, { useState }  from 'react'
import '../CSS/login_signup.css'
import axios from 'axios';

const DTELogin = () => {
  const [credentials, setCredentials] = useState({email: "", password: ""})

  const handleSubmit = async (e) => {
    // e.preventDefault();
    
    // const response = await fetch("http://localhost:4000/users", {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({email: credentials.email, password: credentials.password})
    // });
    // const json = await response.json();
    // console.log(json)
    // if(json.success){
    //   // Redirect and save auth tocken
    //   localStorage.setItem('token', json.jwtData)
    //   // navigate('/login');
    //   console.log(json.success)
    //   // props.showAlert("Account Create Successfully", "success")
    // } else {
    //   console.log(json.success)
    //   // props.showAlert("Invalid credentials", "danger")
    // }

    // console.log(response.json());


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
          window.location.href="/dashboard/home";
        }
      })  
      .catch((error) => {
        // console.log(error)
        console.log("InVallid")
      })
}

  const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }


  return (
    <div className='main_container'>
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

         

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput email"
              name='email'
              value={credentials.email}
              onChange={onChange}
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword password"
              name='password'
              value={credentials.password}
              onChange={onChange}
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3 mt-2">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-warning" type="submit">
            Sign up
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2022–2023</p>
        </form>
      </main>
    </div>
  )
}

export default DTELogin
