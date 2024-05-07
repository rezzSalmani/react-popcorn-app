import React, { useContext } from "react";

import popcornContext from "../contexts/popcornContext";

const SearchInput = () => {
  const { searchInput, searchInputChange } = useContext(popcornContext);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className='w-[300px] rounded-lg bg-color-primary-light dark:bg-zinc-700 px-2 text-color-text text-base hover:shadow-lg transition-all'
    >
      <input
        value={searchInput}
        onChange={(event) => searchInputChange(event)}
        type='text'
        className='py-2 bg-transparent placeholder:text-color-text-dark  transition-all outline-none w-full '
        placeholder='Search Movies...'
        required
        minLength={2}
        maxLength={30}
      />
      {/* <button
        type='submit'
        className='bg-gray-400 p-1 rounded-lg text-sm active:scale-95 active:translate-y-[1px] transition-all duration-200'
      >
        Search
      </button> */}
    </form>
  );
};

export default SearchInput;
