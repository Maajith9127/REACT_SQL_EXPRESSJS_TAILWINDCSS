import { useState } from "react";
import { useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setloggedin] = useState(false)
  const [loggedout, setloggedout] = useState(true)
  const [name, setname] = useState("")






  useEffect( () => {
const fn=async () => {
  
  const response =await fetch("http://localhost:8800/auth", {

    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({message:"Hi pa vanak"})
  })

  if(response.ok){
    setloggedin(true)
    setloggedout(false)

  }
  else{
    setloggedout(true)
    setloggedin(false)

  }

  const userdata= await response.json()

  console.log(userdata?.data)
  const info = JSON.parse(userdata?.data);
  console.log(info.name)
  setname(info.name)
  
}
   



fn();}

 , [loggedin,loggedout]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Email:", email, "Password:", password);

    const response = await fetch("http://localhost:8800/login", {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email: email, password: password })
    })
    const data = await response.json();
   
    if (response.ok) {
      setloggedin(true)
      setloggedout(false)


    }

    // console.log(data)

  };


  const logout=async (e)=>{
    console.log("logged out")
    const response= await fetch("http://localhost:8800/logout",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email: email, password: password })
    })
    if(response.ok){
      setloggedin(false)
      setloggedout(true)
    }
  }

const trial =async (e) => {
     console.log(e)
     const response= await fetch("http://localhost:8800/trial",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      //if credentials is set as true then cookie object would be sent each time along with the request
      body: JSON.stringify({ email: email, password: password })

     })

}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className=" bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Login to Your Account
        </h2>
        {loggedin &&  (   <h1 className="text-center">
          Welcome {name}</h1>)}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          {loggedin && (<button
            type="button"
            onClick={logout}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300">
            Logout
          </button>)}
          {loggedout && (<button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300">
            Login
          </button>)}

          <button type="button" onClick={trial} className="bg-blue-600 rounded-xl w-[45%] p-2.5  ">Trial</button>



          {/* Divider */}
          <div className="text-center text-gray-500 mt-4">or</div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition duration-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google Logo"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>

          {/* Register Link */}
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 font-medium hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
