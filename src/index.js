import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Body from "./components/body";

const reactRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element : <Body />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ],
    errorElement: <Error />,
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={reactRouter} />
  </React.StrictMode>
);
