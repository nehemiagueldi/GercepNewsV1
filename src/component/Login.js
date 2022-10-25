import React, { useState } from "react";
import axios from 'axios';
import { Navigate } from "react-router";
import Swal from 'sweetalert2';

const Login = () => {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const onChangeEmail = (e) =>{
    const value = e.target.value
    setEmail(value)
  }
  const onChangePassword = (e) => {
    const value = e.target.value
    setPassword(value)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const pass = event.target[1].value;
  
    axios.post("http://api-login-pti.herokuapp.com/api/login_user", {
        email: email,
        password: pass,
      }, { headers : { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"}})
      .then((res) => {
        if (res.data.data.token) {
          Swal.fire({
            icon: 'success',
            title: 'Login Sukses',
          }).then(function() {
            window.location.href = "/Blog";
        });
          localStorage.setItem('token', res.data.data.token);
          // window.location.href = "/Blog"; // untuk meng refresh halaman dan juga menuju ke halaman yang di inginkan
        }
      });
    // if (response.code === "SUCCESS") {
    //   localStorage.setItem("token", response.data.token);
    //  }
  };

  // const handleOnSubmit = (event) => {
  //   event.preventDefault();
  //   const email = event.target[0].value;
  //   const pass = event.target[1].value;
  
  //   const response = axios
  //     .post("http://api-login-pti.herokuapp.com/api/login_user", {
  //       email: email,
  //       password: pass,
  //     })
  //     .then((res) => localStorage.setItem('token', res.data.data.token || null));
  
    // if (response.code === "SUCCESS") {
    //   localStorage.setItem("token", response.data.token);
    // }
  //   console.log("SUCCESS")
  // };
    const token = localStorage.getItem('token')
  
    if("token" in localStorage){
      return <Navigate to='/Blog' />
    } else {
      return (
      <div style={{ marginTop: "130px" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card p-4">
                <div className="card-body">

                  <form onSubmit={(event) => handleOnSubmit(event)}>   
                    <div className="form-group"> 
                      <h2>Login</h2>
                        <label>Email</label>
                        <input type="text" placeholder="Email" className="form-control" value={email} onChange={onChangeEmail} required></input>
                      <div/>

                      <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Password" className="form-control" value={password} onChange={onChangePassword} required></input>
                      </div>

                      <button className="btn btn-primary">Login</button>
                    </div>
                  </form>

                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// import React, { Component } from 'react';
// import axios from "axios";

// class Login extends Component {
// 	constructor(props) {
// 		super(props)

// 		this.state = {
// 			email: '',
// 			password: '',
// 		}
// 	}

// 	handleemailChange = event => {
// 		this.setState({
// 			email: event.target.value
// 		})
// 	}

// 	handlepasswordChange = event => {
// 		this.setState({
// 			password: event.target.value
// 		})
// 	}

// 	handleSubmit = event => {
//     event.preventDefault();
//     const email = event.target[0].value;
//     const pass = event.taget[1].value;

//     const response = axios
//       .post("http://api-login-pti.herokuapp.com/api/login_user", {
//         email: email,
//         password: pass,
//       })
//       .then((res) => res.data);

//     if (response.code === "SUCCESS") {
//       localStorage.setItem("token", response.data.token);
//     }
// 		alert(`${this.state.email} ${this.state.password}`)
// 		// event.preventDefault()
// 	}

// 	render() {
// 		const { email, password } = this.state
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<div>
// 					<label>email</label>
// 					<input
// 						type="text"
// 						value={email}
// 						onChange={this.handleemailChange}
// 					/>
// 				</div>
// 				<div>
// 					<label>password</label>
// 					<input
//             type="password"
// 						value={password}
// 						onChange={this.handlepasswordChange}
// 					/>
// 				</div>
// 				<button type="submit">Submit</button>
// 			</form>
// 		)
// 	}
// }

export default Login

