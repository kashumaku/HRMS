import { useState } from "react";
import logo from "../images/logo.png";
import hr from "../images/hr.jpg";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {
  const [hidePass, setHidePass] = useState(true);
  return (
    <div
      className="h-screen flex justify-center items-center text-xl text-white"
      style={{
        backgroundImage: `url(${hr})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <button className="bg-gradient-to-r from-[orange] to-[teal] absolute right-5 top-4 px-7 py-2">
        Apply job
      </button>
      <div className="flex flex-col items-center w-[450px] p-4 ">
        <img
          src={logo}
          alt=""
          className="w-[100px] h-[100px] bg-[teal] rounded-full m-4"
        />
        <div className="flex flex-col items-center rounded-md bg-[#6b8acd]/40 p-2 h-[500px] w-full ">
          <h1 className="text-3xl font-bold mt-8">Login</h1>
          <p className="text-2xl font-bold text-gray-600 mt-4">
            Access to your dashboard
          </p>
          {/* form */}
          <form className="flex flex-col  justify-center items-center gap-6 h-full w-full p-8">
            <div className="w-full ">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="example@gmail.com"
                className="w-full p-2 outline-1 outline-blue-500 border
                 border-gray-400 text-black bg-gray-300 "
              />
            </div>
            <div className="w-full">
              <label htmlFor="password">Password</label>
              <div
                className="flex items-center outline-1  
              bg-gray-300  pr-3 text-black"
              >
                <input
                  type={hidePass ? "password" : "text"}
                  placeholder="............"
                  className="w-full p-2 bg-gray-300 "
                />
                <FaEyeSlash
                  size={20}
                  onClick={() => setHidePass(true)}
                  className={hidePass && "hidden"}
                />
                <FaEye
                  size={20}
                  onClick={() => setHidePass(false)}
                  className={!hidePass && "hidden"}
                />
              </div>
            </div>
            <button
              className="bg-gradient-to-r from-cyan-500 to-blue-500
             py-3 w-full text-2xl font-bold text-white"
            >
              LOGIN
            </button>
            <span className=" ">
              Don't have an account?{" "}
              <a href="#" className="text-blue-300 underline">
                Register
              </a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
