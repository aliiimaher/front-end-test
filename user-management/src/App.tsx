import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { UserContext } from "./context/UserContext";
import { router } from "./routes/Routes";
import { Person } from "./types/person.types";

function App() {
  const [thisUser, _setThisUser] = useState<Person | null>(null);

  // const fetchUser = () => {
  //   axios
  //     .get("user/me/")
  //     .then((response) => {
  //       setThisUser(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //     });
  // };

  // useEffect(() => {
  //   localStorage.getItem("token") && fetchUser();
  // }, []);

  return (
    <>
      <UserContext.Provider value={thisUser}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
}

export default App;
