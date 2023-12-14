import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  BrowserRouter,
} from "react-router-dom";



ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  //   <RouterProvider  router={router} />
  // </React.StrictMode>,
  <BrowserRouter basename="/app1">
    <App />
  </BrowserRouter>
);
