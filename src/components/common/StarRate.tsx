import StarRatings from "react-star-ratings";

export default function StarRate({ rating }: { rating: number }) {
  return (
    <StarRatings
      rating={rating}
      starDimension="15px"
      starSpacing="5px"
      starRatedColor="yellow"
    />
  );
}
