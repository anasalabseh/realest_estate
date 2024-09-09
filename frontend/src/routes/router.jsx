import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../hoc/Layout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import ListingDetail from "../pages/ListingDetail";
import Listings from "../pages/Listings";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "listings",
        children: [
          {
            index: true,
            element: <Listings />,
          },
          {
            path: ":listingId",
            element: <ListingDetail />,
          },
        ],
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
