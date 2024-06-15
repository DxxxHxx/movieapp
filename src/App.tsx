import { BrowserRouter } from "react-router-dom";
import GenreMovieList from "./components/genreMovieList/GenreMovieList";
import Header from "./components/header/Header";
import ProductionHouse from "./components/productionHouse/ProductionHouse";
import Slider from "./components/slider/Slider";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </BrowserRouter>
  );
}
