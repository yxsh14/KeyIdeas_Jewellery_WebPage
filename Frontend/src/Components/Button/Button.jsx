import { useState } from "react";

const ProductButton = () => {
  const [quantity, setQuantity] = useState(0);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex justify-center items-center mt-2">
      {quantity === 0 ? (
        <button
          type="button"
          className="bg-black text-white text-lg py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300"
          onClick={handleIncreaseQuantity}
        >
          Add to Cart
        </button>
      ) : (
        <div className="flex items-center">
          <button
            type="button"
            className="bg-gray-800 text-white text-xl w-8 h-8 rounded hover:bg-red-600 transition-colors duration-300 mx-1"
            onClick={handleDecreaseQuantity}
          >
            -
          </button>
          <span className="text-lg mx-2">{quantity}</span>
          <button
            type="button"
            className="bg-gray-800 text-white text-xl w-8 h-8 rounded hover:bg-red-600 transition-colors duration-300 mx-1"
            onClick={handleIncreaseQuantity}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductButton;
