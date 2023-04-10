import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";

const AppLayout = () => {
  return <>
    <Header/>
    <Outlet/>
    
  </>;
};
const AppRouter=createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children:[
      {
        path:"/about",
        element:<About/>,
        errorElement:<Error/>
      },
      {
        path:"/contact",
        element:<Contact/>,
        errorElement:<Error/>
      },
      {
        path:"/",
        element:<Body/>,
        errorElement:<Error/>
      }
    ]
  }
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
