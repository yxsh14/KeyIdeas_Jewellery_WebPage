import { useState, useEffect } from "react";

const Filter = ({ filterOptions, selectedFilter, onFilterUpdate, filterType, defaultLabel }) => {
  const [selectedOption, setSelectedOption] = useState(selectedFilter);

  useEffect(() => {
    onFilterUpdate(selectedOption);
  }, [selectedOption]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="relative inline-block m-1.5 mb-2.5">
      <select
        name="filter"
        id="filter"
        value={selectedOption}
        onChange={handleChange}
        className="appearance-none p-2.5 text-base border border-gray-600 rounded-md bg-gray-700 text-white shadow-sm cursor-pointer outline-none transition-all duration-300 w-52 hover:border-gray-400 hover:shadow-lg"
      >
        <option value="">{defaultLabel}</option>
        {filterOptions.map((option, index) => (
          <option key={`unique_filter_${filterType}_option_${index}`} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none">
        <span className="text-white text-xs">&#x25BC;</span>
      </div>
    </div>
  );
};

export default Filter;
