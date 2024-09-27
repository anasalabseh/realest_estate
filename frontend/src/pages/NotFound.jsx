import Navbar from "../components/layout/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="mt-64">
        <h1 className="text-8xl text-center opacity-50 font-medium mb-16">
          404 Not Found
        </h1>
        <p className="text-3xl text-center mb-56">
          the link you requested does not exist in our website
        </p>
      </div>
    </>
  );
};

export default NotFound;
