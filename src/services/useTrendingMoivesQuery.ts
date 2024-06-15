import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "./api";
import { ITrendMovie } from "../types/interface";

export const useTrendingMoviesQuery = () => {
  const { data: movies, isLoading } = useQuery<ITrendMovie[]>({
    queryKey: ["trendingMovies"],
    queryFn: async () => getTrendingMovies(),
  });
  return { movies, isLoading };
};
