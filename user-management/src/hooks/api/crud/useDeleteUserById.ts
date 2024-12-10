import axios from "axios";
import { useState } from "react";

export const useDeleteUserById = (id: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const deleteUser = async () => {
    try {
      setLoading(true);
      setError(null);

      await axios.delete(`/api/users/${id}`);
    } catch (error) {
      setError((error as any).message);
    } finally {
      setLoading(false);
    }
  };

  return { deleteUser, loading, error };
};
