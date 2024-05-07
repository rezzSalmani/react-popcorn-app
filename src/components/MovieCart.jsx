import React, { useContext } from "react";
import popcornContext from "../contexts/popcornContext";
import { deleteFavoriteMovie } from "../util/util";
import MovieDetail from "./MovieDetail";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const MovieCart = () => {
  const { selectedMovieId, watchedMovies, handleRemoveWatched } =
    useContext(popcornContext);
  const queryClient = useQueryClient();
  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: deleteFavoriteMovie,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favoriteMovies"] });
    },
  });
  const avgImdbRating = average(watchedMovies.map((movie) => movie.imdbRating));
  const avgUserRating = average(watchedMovies.map((movie) => movie.userRating));
  const avgRuntime = average(watchedMovies.map((movie) => movie.runtime));
  return (
    <section className='bg-zinc-200 dark:bg-color-background-500 text-zinc-700 dark:text-color-text fix-height overflow-auto'>
      <div className='space-y-1 bg-zinc-300 dark:bg-color-background-100 rounded-lg font-lato p-4'>
        <h4 className='text-xl font-RocknRoll'>Movies You Watched</h4>
        <div className='flex items-center gap-2'>
          <span>
            #️⃣ {(watchedMovies.length > 0 && watchedMovies.length) || "00"}{" "}
            Movies
          </span>
          <span>
            ⭐{" "}
            {(watchedMovies.length > 0 && avgImdbRating.toFixed(2)) || "0.00"}
          </span>
          <span>
            🌟{" "}
            {(watchedMovies.length > 0 && avgUserRating.toFixed(2)) || "0.00"}
          </span>
          <span>
            ⏳ {(watchedMovies.length > 0 && avgRuntime.toFixed()) || "0.00"}
            min
          </span>
        </div>
      </div>
      {isPending && (
        <span className='flex items-center justify-center py-10 mt-5 text-xl font-RocknRoll'>
          Deleting Your Movie...
        </span>
      )}
      {isError && (
        <span className='flex items-center justify-center py-10 mt-5 text-xl font-RocknRoll text-red-500 px-2 text-center'>
          {isError && "there was an error deleting the movie"}
        </span>
      )}
      {selectedMovieId ? (
        <MovieDetail />
      ) : (
        <div className=' divide-gray-300 divide-y'>
          {watchedMovies.length > 0 &&
            !isPending &&
            !isError &&
            watchedMovies.map((movie) => (
              <div
                className='flex items-center justify-between p-4'
                key={movie.imdbID}
              >
                <div className='flex items-center  gap-4'>
                  <img src={movie.poster} alt={movie.title} className='w-12' />
                  <div className='space-y-2'>
                    <h4 className='font-lato text-xl'>{movie.title}</h4>
                    <div className='flex items-center gap-2 w-full'>
                      <span>⭐ {movie.imdbRating}</span>
                      <span>🌟 {movie.userRating}</span>
                      <span>⏳ {movie.runtime}min</span>
                    </div>
                  </div>
                </div>
                <span
                  className='flex justify-end hover:text-color-primary cursor-pointer'
                  onClick={() => mutate(movie.imdbID)}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                    />
                  </svg>
                </span>
              </div>
            ))}
        </div>
      )}
    </section>
  );
};

export default MovieCart;
