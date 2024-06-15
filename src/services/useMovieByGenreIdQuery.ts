import { useQuery } from "@tanstack/react-query";
import { getMovieByGenreId } from "./api";
import { IMovieByGenre } from "../types/interface";

export const useMovieByGenreIdQuery = (id: number) => {
  const { data: movies, isLoading } = useQuery<IMovieByGenre[]>({
    queryKey: ["genre", `${id}`],
    queryFn: async () => await getMovieByGenreId(id),
  });
  return { movies, isLoading };
};
