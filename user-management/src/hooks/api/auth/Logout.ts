import axios from "axios";

function Logout() {
  axios
    .post("/api/logout")
    .then(() => {
      localStorage.removeItem("token");
      window.location.href = "/";
    })
    .catch((error) => {
      console.error(error);
    });
}

export default Logout;
