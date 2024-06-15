import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useMovieByGenreIdQuery } from "../../services/useMovieByGenreIdQuery";
import LoadingSpinner from "../common/LoadingSpinner";
import MovieCard from "./MovieCard";
import { useRef } from "react";

export default function MovieList({ genreId }: { genreId: number }) {
  const listRef = useRef<HTMLDivElement>(null);
  const { isLoading, movies } = useMovieByGenreIdQuery(genreId);

  const handleArrowRight = (element: typeof listRef.current) => {
    if (element) {
      element.scrollLeft += 500;
    }
  };

  const handleArrowLeft = (element: typeof listRef.current) => {
    if (element) {
      element.scrollLeft -= 500;
    }
  };
  if (isLoading)
    return (
      <div className="my-5 flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  return (
    <div className="relative">
      <HiChevronLeft
        onClick={() => handleArrowLeft(listRef.current)}
        className="hidden border bg-black rounded-full  md:block text-5xl hover:bg-[rgba(0,0,0,.5)] absolute top-[40%] cursor-pointer z-50"
      />
      <div
        ref={listRef}
        className="flex scroll-smooth overflow-x-auto gap-x-8 py-5 px-3 scrollbar-hide"
      >
        {movies?.map((movie) => (
          <MovieCard key={movie.id} info={{ ...movie, genreId }} />
        ))}
      </div>

      <HiChevronRight
        onClick={() => handleArrowRight(listRef.current)}
        className="hidden border bg-black rounded-full right-0 hover:bg-[rgba(0,0,0,.5)]  md:block text-5xl absolute top-[40%] cursor-pointer z-50"
      />
    </div>
  );
}
