import router from "./routes/router";
import { RouterProvider } from "react-router-dom";
import "./sass/main.scss";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
