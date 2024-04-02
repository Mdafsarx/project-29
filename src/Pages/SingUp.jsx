import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import auth from "./Home/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



const SingUp = () => {
    const [email,setEmail]=useState('')
    const navigate=useNavigate()
    // console.log(email)

    function handleSubmit(e){
        e.preventDefault();
      const email=e.target.email.value;
      const password=e.target.password.value;
      
      createUserWithEmailAndPassword(auth,email,password)
      .then((result)=>{
        // eslint-disable-next-line no-unused-vars
        const user=result.user
        // console.log(user)


        e.target.reset()
        Swal.fire({
            title: 'Successfully created account',
            icon: 'successs',
            confirmButtonText: 'Cool'
          })
        //   email verification
        sendEmailVerification(auth.currentUser)
        .then(()=>alert('Check your email'))
        navigate('/SingIn')

      })


      .catch((error)=>{
        const errorMessage=error.message
        alert(errorMessage)
      })}

      const handleForgot=()=>{
        if(!email.includes('@gmail.com')){
            alert('please type a verified email')
            return
        }
        sendPasswordResetEmail(auth,email)
        .then(()=>alert('password reset email send'))
        .catch((error)=>alert(error.message))
      }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a className="label-text-alt link link-hover" onClick={handleForgot}>Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingUp;