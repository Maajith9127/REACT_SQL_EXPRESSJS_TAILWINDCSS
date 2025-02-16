import { useState } from "react";


const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [Registered, setRegistered] = useState(false)
  const [Unregistered, setUnregistered] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    const response = await fetch("http://localhost:8800/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
      }),
  });
  console.log(response)
  if(response.ok){
    console.log("It was successfull")
    setRegistered(true)

    setTimeout(() => {
      setRegistered(false)
  }, 2000);


  }
  if(!response.ok){
    console.log("It was Unsuccessfull")
    setUnregistered(true)

    setTimeout(() => {
      setUnregistered(false)
  }, 2000);


  }



    // console.log("User Registered:", formData);
  };

  return (
    <div className=" border border-white min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Register Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          {Registered && <div className="bg-green-600 text-center rounded p-3">Registered</div>}
          {Unregistered && <div className="bg-red-600 text-center rounded p-3">User Already Exists</div>}
          <div> <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-gray-700 font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Register Button */}
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"> Sign Up</button>

          {/* Divider */}
          <div className="text-center text-gray-500 mt-4">or</div>

          {/* Google Sign Up */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition duration-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google Logo"
              className="w-5 h-5"
            />
            Sign up with Google
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 font-medium hover:underline">
              Login
            </a>
          </p>
        </form>





      </div>
    </div>
  );
};

export default Register;
