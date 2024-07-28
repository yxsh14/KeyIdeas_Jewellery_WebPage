const BestSellerLabel = ({ rating, count }) => {
    const isBestSeller = (rating >= 4 && count >= 400) || (rating >= 3.8 && count >= 600);
  
    if (isBestSeller) {
      return (
        <span className="absolute top-1.5 left-0 bg-teal-500 text-white text-xs px-1.5 py-0.5 z-10">
          BESTSELLER
        </span>
      );
    } else {
      return null;
    }
  };
  
  export default BestSellerLabel;
  