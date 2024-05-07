import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../util/util";
import { useContext } from "react";
import popcornContext from "../contexts/popcornContext";
export const useMovies = () => {
  const { searchInput } = useContext(popcornContext);
  const {
    data: movies,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies", searchInput],
    queryFn: () => fetchMovies(searchInput),
    enabled: searchInput.length > 2,
  });
  return { movies, isError, isLoading, error };
};
