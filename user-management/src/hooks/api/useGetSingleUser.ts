import axios from "axios";
import { useEffect, useState } from "react";

export const useGetSingleUser = (id: string) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios
      .get(`/api/users/${id}`)
      .then((response) => {
        setUser(response.data.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return { user, loading, error };
};
