import { IMenu, IProductionHouse } from "./types/interface";
import { HiPlus } from "react-icons/hi";
import {
  HiTv,
  HiHome,
  HiStar,
  HiPlayCircle,
  HiMagnifyingGlass,
} from "react-icons/hi2";
import disney from "./assets/images/disney.png";
import disneyV from "./assets/videos/disney.mp4";
import marvel from "./assets/images/marvel.png";
import marvelV from "./assets/videos/marvel.mp4";
import nationalG from "./assets/images/nationalG.png";
import nationalGV from "./assets/videos/national-geographic.mp4";
import pixar from "./assets/images/pixar.png";
import pixarV from "./assets/videos/pixar.mp4";
import starwar from "./assets/images/starwar.png";
import starwarV from "./assets/videos/star-wars.mp4";

export const menu: IMenu[] = [
  {
    name: "Home",
    Icon: HiHome,
  },
  {
    name: "Search",
    Icon: HiMagnifyingGlass,
  },
  { name: "Watch List", Icon: HiPlus },
  { name: "Originals", Icon: HiStar },
  { name: "Movies", Icon: HiPlayCircle },
  { name: "Series", Icon: HiTv },
];

export const producttionHouseList: IProductionHouse[] = [
  {
    id: 1,
    image: disney,
    video: disneyV,
  },
  {
    id: 2,
    image: marvel,
    video: marvelV,
  },
  {
    id: 3,
    image: nationalG,
    video: nationalGV,
  },
  {
    id: 4,
    image: pixar,
    video: pixarV,
  },
  {
    id: 5,
    image: starwar,
    video: starwarV,
  },
];
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

export const scrennWidth = window.innerWidth;

export const genres = [
  {
    id: 28,
    name: "액션",
  },
  {
    id: 12,
    name: "모험",
  },
  {
    id: 16,
    name: "애니메이션",
  },
];
