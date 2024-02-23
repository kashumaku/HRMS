import logo from "../images/logo.png";
import hr from "../images/hr.jpg";

const SignUp = () => {
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
          <h1 className="text-3xl font-bold mt-8">Sign Up</h1>

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

              <input
                type="password"
                placeholder="............"
                className="w-full p-2 bg-gray-300 "
              />
            </div>
            <button
              className="bg-gradient-to-r from-cyan-500 to-blue-500
             py-3 w-full text-2xl font-bold text-white"
            >
              SIGNUP
            </button>
            <span className=" ">
              have an account?{" "}
              <a href="#" className="text-blue-300 underline">
                Login
              </a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
