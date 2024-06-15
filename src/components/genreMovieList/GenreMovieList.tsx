import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { IMG_BASE_URL, genres } from "../../constants";
import MovieList from "./MovieList";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import StarRate from "../common/StarRate";

export default function GenreMovieList() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const genre = searchParams.get("genre");
  const navigate = useNavigate();
  const handleModalClose = () => navigate("/");
  const { state } = useLocation();
  return (
    <div>
      {genres.map((item) => (
        <div key={item.id} className="p-8 px-8 md:px-16 ">
          <h2 className="text-2xl font-bold">{item.name}</h2>
          <MovieList genreId={item.id} />
        </div>
      ))}

      {id && genre && state && (
        <div
          className="fixed z-50 top-0 left-0 bg-[rgba(0,0,0,.5)] w-full h-screen
       flex justify-center items-center"
        >
          <motion.div
            layoutId={`${id}_${genre}`}
            className="border relative w-[250px] md:w-[700px] lg:w-[800px] p-3 lg:p-7 h-2/3 rounded-lg backdrop-blur-md flex flex-col md:flex-row md:gap-x-3 items-center"
          >
            <button
              onClick={handleModalClose}
              className="absolute right-3 top-3 text-3xl"
            >
              <MdClose />
            </button>
            <img
              src={`${IMG_BASE_URL}${state.poster_path}`}
              alt="detail poster"
              className="w-[150px] h-[200px] md:min-w-[200px] md:h-[300px]  rounded-lg"
            />
            <div className="flex flex-col items-start justify-start gap-y-3 my-3 md:h-[300px]">
              <h1 className="font-bold text-xl  text-wrap">{state.title}</h1>
              <div className="flex justify-center items-center gap-x-3 ">
                <span>평점 : {Number(state.vote_average.toFixed(2))}</span>
                <StarRate rating={state.vote_average / 2} />
              </div>
              <span className="text-xs line-clamp-5 md:line-clamp-none md:text-base md:leading-6">
                {state.overview || "overview"}
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
