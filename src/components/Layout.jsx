import React, { useState, useEffect } from "react";
import Header from "./Header";
import Movies from "./Movies";
import MovieCart from "./MovieCart";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.remove("bg-zinc-100");
      document.body.classList.add("bg-color-background-900");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("bg-color-background-900");
      document.body.classList.add("bg-zinc-100");
    }
  }, [darkMode]);
  return (
    <div className=' transition-all h-full w-full'>
      <div className='pt-4'></div>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} movies={movies} />
      <main className='container flex items-start justify-center gap-6 mt-4 child:w-full child:lg:w-1/3 child:rounded-lg child:shadow-lg '>
        <Movies movies={movies} setMovies={setMovies} />
        <MovieCart />
      </main>
    </div>
  );
};

export default Layout;
