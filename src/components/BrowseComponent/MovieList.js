import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
      {/* no-scrollbar is the plugin for tailwind where we write code in config file. */}
      {/* if we need any package the we write require(package name) */}
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;