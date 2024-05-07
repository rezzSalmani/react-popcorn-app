import { data } from "autoprefixer";
import { supabase } from "../supabaseClient";

export const KEY = "55b1b5d0";

export async function getMovieDetail(id) {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${KEY}&i=${id}`
  );
  if (!response.ok) {
    console.log(response);
    throw new Error("there was an error fetching Movie details");
  }
  const data = await response.json();
  return data;
}

export async function fetchMovies(searchInput) {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${KEY}&s=${searchInput}`
  );

  if (!res.ok) throw new Error("Something went wrong with fetching movies");
  const data = await res.json();
  const search = await data;
  if (data.Response === "False") throw new Error("Movie not found");

  return search.Search;
}
export async function insertFavoriteMovie(movieData) {
  const { data, error } = await supabase
    .from("MovieApp")
    .insert([movieData])
    .select();
  if (error) {
    console.log(error);
    throw new Error(error.message || "there was an error adding the Movie");
  }
  return data;
}

export async function getMovieData() {
  const { data, error } = await supabase.from("MovieApp").select("*");
  if (error) {
    console.log(error);
    return error;
  }
  return data;
}

export async function deleteFavoriteMovie(id) {
  const { error } = await supabase.from("MovieApp").delete().eq("imdbID", id);
  if (error) {
    console.log(error);
    throw new Error(error.message || "there was an error deleting the Movie");
  }
}
