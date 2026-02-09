import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router";
import Inicio from "./components/Inicio"
import Home from "./pages/Home"
let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    //errorElement: <PaginaError />,
    children: [
      {
        index:true,
        Component: Inicio
      },
    ],
  },
]);

 function App() {
 
   return (
       <RouterProvider router={router}/>
   )
 }

export default App
