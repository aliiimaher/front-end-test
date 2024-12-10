import axios from "axios";

async function SignIn(email: string, password: string) {
  try {
    const response = await axios.post("/api/login", {
      email,
      password,
    });
    console.log(response);
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default SignIn;
