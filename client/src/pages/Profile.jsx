import { useRef } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const currentUser = useSelector((state) => state.user);
  const fileRef = useRef(null);

  console.log(currentUser.currentUser.avatar);

  return (
    <>
      <div className=" p-3 max-w-lg mx-auto">
        <h1 className=" text-3xl font-semibold text-center my-7">Profile</h1>
        <form className=" flex flex-col gap-4">
          <input type="file" accept="image/" ref={fileRef} hidden />
          <img
            onClick={() => fileRef.current.click()}
            src={currentUser.currentUser.avatar}
            alt="profile"
            className=" rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          />
          <input
            type="text"
            placeholder="Username"
            id="username"
            defaultValue={currentUser.currentUser.userName}
            className=" border p-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            defaultValue={currentUser.currentUser.email}
            className="border p-3 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="border p-3 rounded-lg"
          />
          <button className=" bg-slate-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-80">
            Submit
          </button>
        </form>
        <div className=" flex justify-between mt-5">
          <span className=" text-red-700 cursor-pointer">Delete Account</span>
          <span className=" text-red-700 cursor-pointer">Sign Out</span>
        </div>
      </div>
    </>
  );
};

export default Profile;
