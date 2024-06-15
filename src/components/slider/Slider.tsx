import { useRef } from "react";
import { IMG_BASE_URL, scrennWidth } from "../../constants";
import { useTrendingMoviesQuery } from "../../services/useTrendingMoivesQuery";
import LoadingSpinner from "../common/LoadingSpinner";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function Slider() {
  const SliderRef = useRef<HTMLDivElement>(null);
  const { movies, isLoading } = useTrendingMoviesQuery();

  const handleArrowRight = (element: typeof SliderRef.current) => {
    if (element) {
      element.scrollLeft += scrennWidth - 110;
    }
  };

  const handleArrowLeft = (element: typeof SliderRef.current) => {
    if (element) {
      element.scrollLeft -= scrennWidth - 110;
    }
  };
  if (isLoading)
    return (
      <div className="min-w-full md:h-[310px] flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  return (
    <div>
      <HiChevronLeft
        onClick={() => handleArrowLeft(SliderRef.current)}
        className="hidden md:block text-7xl cursor-pointer z-50 absolute mx-8 mt-[150px]"
      />
      <HiChevronRight
        onClick={() => handleArrowRight(SliderRef.current)}
        className="hidden md:block text-7xl cursor-pointer z-50 absolute mx-8 mt-[150px] right-0"
      />
      <div
        ref={SliderRef}
        className="flex scrollbar-hide scroll-smooth w-full px-16 py-4  overflow-x-auto"
      >
        {movies?.map((movie) => {
          return (
            <div
              key={movie.id}
              className="min-w-full relative rounded-lg mr-5 md:h-[310px] 
            hover:border-4 border-gray-400 transition-all duration-150 backdrop-opacity-50"
            >
              <img
                src={`${IMG_BASE_URL}${movie.backdrop_path}`}
                className="object-left-top  object-cover min-w-full rounded-lg h-full"
                alt="img"
              />
              <h1 className="absolute hidden md:block top-10 left-3 font-bold text-2xl">
                {movie.title}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
