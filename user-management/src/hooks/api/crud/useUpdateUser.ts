import axios from "axios";

export const useUpdateUser = async (userId: number, name: string, job: string) => {
  try {
    const response = await axios.put(`/api/users/${userId}`, { name, job });
    console.log("User Updated:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};
