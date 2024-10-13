import Navbar from "../components/layout/Navbar";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <Navbar />
      <div className="notfound">
        <h1 className="notfound__heading">404 Not Found</h1>
        <p className="notfound__paragraph">
          the link you requested does not exist in our website
        </p>
      </div>
    </>
  );
};

export default NotFound;
