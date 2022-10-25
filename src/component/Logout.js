import React from "react";
import { Navigate } from "react-router";
import Swal from 'sweetalert2';

const Logout = () => {

    window.localStorage.removeItem('token');
    Swal.fire({
        icon: 'success',
        title: 'Logout Sukses',
        timer: 1500
      })
     return <Navigate to="/Login"/> // ini hanya menuju ke halaman yang di inginkan

}

export default Logout

