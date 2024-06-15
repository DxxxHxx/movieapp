import { IMG_BASE_URL } from "../../constants";
import { IMovieCard } from "../../types/interface";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function MovieCard({ info }: { info: IMovieCard }) {
  return (
    <motion.div layoutId={`${info.id}_${info.genreId}`}>
      <Link to={`?id=${info.id}&genre=${info.genreId}`} state={info}>
        <img
          src={`${IMG_BASE_URL}${info.poster_path}`}
          alt="posterImg"
          className="min-w-[110px] md:min-w-[200px] rounded-lg hover:border-4 hover:scale-110 border-gray-400 transition-all duration-300 cursor-pointer"
        />
      </Link>
    </motion.div>
  );
}
