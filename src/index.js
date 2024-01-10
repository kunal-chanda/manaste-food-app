import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Body from "./components/body";
import RestaurantMenu from "./components/RestaurantMenu";
import Form from "./components/Form";
import Cart from "./components/cart";
import Demo from "./components/Demo";
const About = lazy(() => import('./components/About'));

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
        element: <Suspense fallback={<h1>Loading...</h1>}>
            <About/>
        </Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
        {
        path: "/demo",
        element: <Demo />,
      },
    ],
    errorElement: <Error />,
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={reactRouter} />
);
