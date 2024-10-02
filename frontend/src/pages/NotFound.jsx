import Navbar from "../components/layout/Navbar";

const NotFound = () => {
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
