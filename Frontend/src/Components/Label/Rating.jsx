const Rating = ({ rating }) => {
  let ratingColorClass = "";
  let displayRating = 0;

  if (typeof rating === 'number' && rating >= 0) {
    displayRating = rating;
  }

  if (displayRating >= 0 && displayRating < 1) {
    ratingColorClass = "bg-red-500";
  } else if (displayRating >= 1 && displayRating < 3) {
    ratingColorClass = "bg-yellow-400";
  } else if (displayRating >= 3 && displayRating <= 5) {
    ratingColorClass = "bg-green-600";
  }

  return (
    <span
      className={`flex justify-center items-center font-bold text-white px-1 py-0.5 rounded text-xs self-end ${ratingColorClass}`}
    >
      {displayRating.toFixed(1)}★
    </span>
  );
};

export default Rating;
