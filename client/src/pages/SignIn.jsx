import { useState } from "react";
import OAuth from "../components/OAuth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";

const SignIn = () => {
  const [formData, setformData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success == false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data.user));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <>
      <div className=" p-3 max-w-lg mx-auto">
        <h1 className=" text-3xl text-center font-semibold my-7">Sign In</h1>
        <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
          <input
            className="border p-3 rounded-lg"
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleChange}
          />
          <input
            className="border p-3 rounded-lg"
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
          />
          <button className=" bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            {loading ? "Loading..." : "Sign In"}
          </button>
          <OAuth />
        </form>
        <div className=" flex gap-2 mt-5">
          <p>Don't have an account?</p>
          <Link to={"/sign-up"}>
            <span className=" text-blue-700">Sign In</span>
          </Link>
        </div>
        {error && <p className=" text-red-500 ">{error}</p>}
      </div>
    </>
  );
};

export default SignIn;
