/** Libs */

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setUserData } from "store/reducer-me";

/** Global Components */

/** Local Components */

/** Assets */

/** Utils */

export default function Login({ loginSet }) {
  // State

  // Hooks
  const { register, handleSubmit, formState: { errors, touchedFields } } = useForm({ mode: 'onBlur' });
  const dispatch = useDispatch();
  // Func
  const handleLogin = (e) => {
    dispatch(setUserData({name:'ilham',email:'ilham@gmail.com'}))
    loginSet(true);
  }
  // Use Effect
  console.log({ errors, touchedFields })
  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="mb-3">
          <label for="email" className="form-label">Email</label>
          <input {...register("email", { required: { value: true, message: 'ga bole kosong' }, minLength: {value:3,message:'email kurang dari 3 karakter'} })} type="text" className="form-control" id="email" placeholder="name@example.com" />
          {touchedFields?.email && errors?.email && errors?.email?.message}
        </div>
        <div className="mb-3">
          <label for="pass" className="form-label">Password</label>
          <input {...register("password", { required: true, minLength: 6 })} type="password" className="form-control" id="pass" placeholder="name@example.com" />
        </div>

        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  )

}