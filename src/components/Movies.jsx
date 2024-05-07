import React, { useContext } from "react";
import popcornContext from "../contexts/popcornContext";
import { useMovies } from "../hooks/useMovies";

const Movies = () => {
  const { selectMovie } = useContext(popcornContext);

  const { movies, isError, isLoading, error } = useMovies();

  return (
    <section className='bg-zinc-200 dark:bg-color-background-500 text-zinc-700  dark:text-color-text fix-height overflow-auto '>
      <div className=' flex flex-col gap-1 bg-zinc-300 dark:bg-color-background-100 rounded-lg font-lato p-4'>
        <h2 className='text-xl font-RocknRoll'>Movie List</h2>
        {movies?.length > 0 && (
          <div className='flex flex-col'>
            <span>Please Select a Movie</span>
          </div>
        )}
      </div>
      {/* movie List */}
      <div className=' dark:divide-zinc-200 divide-gray-300 divide-y pt-2 child:py-4 child:px-4 dark:bg-color-background-500 h-full'>
        {isError && (
          <span className='flex items-center justify-center font-RocknRoll text-color-red'>
            {error.message}
          </span>
        )}
        {isLoading && (
          <span className='flex items-center justify-center text-xl font-RocknRoll text-center'>
            Loading Movie Data...
          </span>
        )}
        {movies?.length === 0 && !isLoading && !isError && (
          <div className='flex flex-col gap-4 items-center justify-center mt-10 font-RocknRoll '>
            <span>Please search a Movie</span>
          </div>
        )}
        {!isLoading &&
          !isError &&
          movies &&
          movies.map((item) => (
            <div
              className='flex items-center gap-3 hover:bg-zinc-300 dark:hover:bg-color-background-100 '
              key={item.imdbID}
              onClick={() => {
                selectMovie(item.imdbID);
              }}
            >
              <img
                src={item.Poster}
                className='w-10'
                alt='movie image'
                loading='lazy'
              />
              <div className=''>
                <h6 className='text-xl font-lato'>{item.Title}</h6>
                <span>🗓 {item.Year}</span>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Movies;
