import { createBrowserRouter } from "react-router-dom";
import Layout from "../template/Layout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home, { action as searchListingsAction } from "../pages/Home";
import ListingDetail, {
  loader as ListingDetailLoader,
} from "../pages/ListingDetail";
import Listings, { loader as ListingsPageLoader } from "../pages/Listings";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";
import PrivateRoute from "../components/common/privateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        action: searchListingsAction,
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
            loader: ListingsPageLoader,
          },
          {
            path: ":slug",
            element: <PrivateRoute element={ListingDetail} />,
            loader: ListingDetailLoader,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
