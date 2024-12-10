import axios from "axios";
import { useEffect, useState, useCallback } from "react";

export const useGetUserLists = () => {
  const [userLists, setUserLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchUserLists = useCallback(async (page: number) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`/api/users?page=${page}`);
      setUserLists(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (err) {
      setError((err as any).message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUserLists(currentPage);
  }, [fetchUserLists, currentPage]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return {
    userLists,
    loading,
    error,
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
  };
};
