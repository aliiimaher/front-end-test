import axios from "axios";

export const useCreateUser = async (name: string, job: string) => {
  try {
    const response = await axios.post("/api/users", { name, job });
    console.log("User Created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
