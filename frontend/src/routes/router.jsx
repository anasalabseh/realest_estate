import { createBrowserRouter } from "react-router-dom";
import Layout from "../template/Layout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import ListingDetail from "../pages/ListingDetail";
import Listings from "../pages/Listings";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
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
