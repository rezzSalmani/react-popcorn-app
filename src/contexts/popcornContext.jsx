import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useReducer } from "react";
import { getMovieData } from "../util/util";

const popcornContext = createContext({
  searchInput: "",
  searchInputChange: () => {},
  selectedMovieId: "",
  watchedMovies: [],
  selectMovie: () => {},
  handleCloseMovie: () => {},
  addMovies: () => {},
  handleRemoveWatched: () => {},
});

function handleReducer(state, action) {
  switch (action.type) {
    case "INPUT_CHANGE":
      return { ...state, searchInput: action.payload };
    case "LOAD_FAVORITE_MOVIES":
      return {
        ...state,
        watchedMovies: action.data,
      };
    case "ADD_MOVIE_WATCHED":
      const existingMovieIndex = state.watchedMovies.findIndex(
        (movie) => movie.imdbID === action.data.imdbID
      );
      if (existingMovieIndex !== -1) {
        return state;
      }
      return { ...state, watchedMovies: [...state.watchedMovies, action.data] };
    case "SELECT_MOVIE":
      if (state.selectedMovieId === action.id) {
        return { ...state, selectedMovieId: null };
      } else {
        return { ...state, selectedMovieId: action.id };
      }
    case "CLOSE_MOVIE":
      return { ...state, selectedMovieId: null };
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watchedMovies: state.watchedMovies.filter(
          (item) => item.imdbID !== action.id
        ),
      };
    default:
      return state;
  }
}

export const PopcornProvider = ({ children }) => {
  const [movieData, dispatchMovies] = useReducer(handleReducer, {
    searchInput: "",
    searchedMovies: [],
    watchedMovies: [],
    selectedMovieId: null,
  });

  const { data, error, isLoading } = useQuery({
    queryKey: ["favoriteMovies"],
    queryFn: getMovieData,
  });

  useEffect(() => {
    if (data) {
      dispatchMovies({ type: "LOAD_FAVORITE_MOVIES", data });
      console.log(data);
    }
  }, [data]);
  function searchInputChange(event) {
    dispatchMovies({
      type: "INPUT_CHANGE",
      payload: event.target.value,
    });
  }

  function addMovies(data) {
    dispatchMovies({ type: "ADD_MOVIE_WATCHED", data });
  }

  function selectMovie(id) {
    dispatchMovies({ type: "SELECT_MOVIE", id });
  }

  function handleCloseMovie() {
    dispatchMovies({ type: "CLOSE_MOVIE" });
  }

  function handleRemoveWatched(id) {
    dispatchMovies({ type: "REMOVE_FROM_WATCHED", id });
  }
  const value = {
    searchInput: movieData.searchInput,
    watchedMovies: movieData.watchedMovies,
    searchInputChange,
    selectMovie,
    selectedMovieId: movieData.selectedMovieId,
    handleCloseMovie,
    addMovies,
    handleRemoveWatched,
  };
  return (
    <popcornContext.Provider value={value}>{children}</popcornContext.Provider>
  );
};
export default popcornContext;
