import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Single from "./Pages/Single";
import Write from "./Pages/Write";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


 export const LayOut=()=>{
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>

    </>
  )
}


export const MyRoutes = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,  // Parent Layout Component
    children: [
      {
        path: "/home",       // Nested Route ("/home")
        element: <Home />,
      },
      {
        path: "/login",      // Nested Route ("/login")
        element: <Login />,
      },
      {
        path: "/register",   // Nested Route ("/register")
        element: <Register />,
      },
      {
        path: "/post/:id",     // Nested Route ("/single")
        element: <Single />,
      },
      {
        path: "/write",      // Nested Route ("/write")
        element: <Write />,
      },
    ],
    
  },
]);






function App() {


  return (
    <> 


</>
  )
}

export default App
