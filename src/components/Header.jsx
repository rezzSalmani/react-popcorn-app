import React, { useEffect, useContext } from "react";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import SearchInput from "../UI/SearchInput";
import { useMovies } from "../hooks/useMovies";
const Header = ({ darkMode, setDarkMode }) => {
  const { movies } = useMovies();
  const handleMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
    } else {
      setDarkMode("light");
    }
  };
  return (
    <header className='sticky top-0 right-0 left-0 mx-8 py-5  bg-color-primary rounded-lg shadow-lg'>
      <div
        className='flex flex-col sm:flex-row  items-center gap-4 flex-wrap font-RocknRoll px-4 text-color-text justify-center sm:justify-between
       '
      >
        <h2 className='text-xl'>🍿Popcorn App</h2>
        <SearchInput />
        <div className='flex items-center gap-4'>
          <p>found {(movies && movies.length) || "0"} results</p>
          <span onClick={handleMode} className='p-1 bg-indigo-400  rounded-lg'>
            <img
              className='w-7 h-7 text-zinc-50 cursor-pointer'
              src={darkMode === "light" ? moon : sun}
              alt='dark'
            />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
