import React, { useEffect, useState, useContext, useRef } from "react";
import popcornContext from "../contexts/popcornContext";
import { insertFavoriteMovie } from "../util/util";
import StarRating from "../UI/StarRating";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMovieDetail } from "../util/util";

const MovieDetail = () => {
  const { selectedMovieId, handleCloseMovie, watchedMovies } =
    useContext(popcornContext);
  const [userRating, setUserRating] = useState("");
  const countRating = useRef(0);
  const queryClient = useQueryClient();
  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["movies", selectedMovieId],
    queryFn: () => getMovieDetail(selectedMovieId),
  });

  const {
    mutate,
    isPending,
    isError: isAddingError,
    error: isAdd,
  } = useMutation({
    mutationFn: insertFavoriteMovie,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favoriteMovies"] });
      setUserRating("");
      handleCloseMovie();
    },
  });
  useEffect(
    function () {
      if (userRating) countRating.current++;
    },
    [userRating]
  );

  const isWatched = watchedMovies
    .map((movie) => movie.imdbID)
    .includes(selectedMovieId);
  const watchedUserRating = watchedMovies.find(
    (movie) => movie.imdbID === selectedMovieId
  )?.userRating;

  const handleAdd = () => {
    if (isWatched) return;
    const newWatchedMovie = {
      imdbID: selectedMovieId,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      imdbRating: Number(movie.imdbRating),
      runtime: Number(movie.Runtime.split(" ").at(0)),
      userRating,
      countRatingDecisions: countRating.current,
    };
    mutate(newWatchedMovie);
  };

  if (isLoading || isPending)
    return (
      <span className='flex items-center justify-center py-10 mt-5 text-xl font-RocknRoll'>
        Loading Your Movie...
      </span>
    );
  if (isError || isAddingError)
    return (
      <span className='flex items-center justify-center py-10 mt-5 text-xl font-RocknRoll text-red-500 px-2 text-center'>
        {isError
          ? "there was an error fetching your Movie Data"
          : "there was an error adding the movie"}
      </span>
    );

  return (
    <div>
      {movie && (
        <div className='flex flex-col gap-4 items-center '>
          <div className='relative flex mt-5 items-center  w-full dark:bg-color-background-100 bg-zinc-200 rounded-lg'>
            <button
              onClick={() => handleCloseMovie()}
              className='absolute top-2 right-2 flex items-center justify-center rounded-full w-6 h-6 text-zinc-950 bg-zinc-300'
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
                  d='M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3'
                />
              </svg>
            </button>
            <div>
              <img
                src={movie?.Poster}
                alt={movie?.Title}
                className='min-w-40 max-w-52 h-52'
              />
            </div>
            <div className='flex gap-2 text-left px-4 flex-col font-lato'>
              <h2 className='text-xl font-semibold'>{movie?.Title}</h2>
              <p>
                {movie?.Released} &bull; {movie?.Runtime}
              </p>
              <p>{movie?.Genre}</p>
              <p className='space-x-2'>
                <span>⭐️</span>
                <span>{movie?.imdbRating} IMDb rating</span>
              </p>
            </div>
          </div>

          <div className='flex justify-center items-center p-4 rounded-lg dark:bg-color-background-100 bg-zinc-200 w-full transition-all'>
            {!isWatched ? (
              <div className='flex flex-col gap-4 justify-center items-center '>
                <StarRating
                  maxRating={10}
                  size={24}
                  onSetRating={setUserRating}
                />
                {userRating > 0 && (
                  <button
                    className='bg-color-primary font-RocknRoll hover:bg-color-primary-light transition-all w-full rounded-xl text-white py-2'
                    onClick={handleAdd}
                  >
                    + Add to list
                  </button>
                )}
              </div>
            ) : (
              <p className='text-xl'>
                You rated with movie {watchedUserRating} <span>⭐️</span>
              </p>
            )}
          </div>
          <div className='flex flex-col gap-3 p-4 font-RocknRoll'>
            <p>
              <em>{movie?.Plot}</em>
            </p>
            <p>
              <span className='font-semibold'>Starring :</span> {movie?.Actors}
            </p>
            <p>
              <span className='font-semibold'>Directed by</span>{" "}
              {movie?.Director}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
