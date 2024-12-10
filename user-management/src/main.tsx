import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import axios from "axios";

axios.defaults.baseURL = "https://reqres.in/";

createRoot(document.getElementById("root")!).render(<App />);
