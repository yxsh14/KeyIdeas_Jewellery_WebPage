import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card.jsx";
import Filter from "../../Components/Filter/Filter.jsx";
import Loader from "../../Components/Loader/Loader.jsx";

const baseUrl = "http://localhost:3000/";

const Hero = () => {
  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState(data);
  const [sectionFilter, setSectionFilter] = useState("");
  const [subCategoryFilter, setSubCategoryFilter] = useState("");
  const [sortFilter, setSortFilter] = useState("");
  const [mostPopular, setMostPopular] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(baseUrl);

        if (response.ok) {
          setData(await response.json());
        } else {
          console.error(response.statusText);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    let filteredCardData = data;

    if (sectionFilter) {
      filteredCardData = filteredCardData.filter(
        (currData) => currData.prodmeta_section === sectionFilter
      );
    }

    if (subCategoryFilter) {
      filteredCardData = filteredCardData.filter(
        (currData) => currData.prod_subcategory === subCategoryFilter
      );
    }

    if (sortFilter) {
      const customCompare = (a, b, sortFilter) => {
        if (sortFilter === "Price Low to High") {
          return a.attr_14k_regular - b.attr_14k_regular;
        } else if (sortFilter === "Price High to Low") {
          return b.attr_14k_regular - a.attr_14k_regular;
        } else if (sortFilter === "Most Popular") {
          return b.rating - a.rating;
        }
      };

      filteredCardData.sort((a, b) => customCompare(a, b, sortFilter));
    }

    setCardData([...filteredCardData]);
  }, [data, sectionFilter, subCategoryFilter, sortFilter]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollY + windowHeight >= documentHeight - 100) {
      setCurrentPage(currentPage + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]);

  const section = [
    ...new Set(data?.map((filterOptions) => filterOptions.prodmeta_section)),
  ];

  const subCategories = [
    ...new Set(data?.map((filterOptions) => filterOptions.prod_subcategory)),
  ];

  const sortFilters = [
    "Price Low to High",
    "Price High to Low",
    "Most Popular",
  ];

  const handleUpdateSectionFilter = (updatedFilter) => {
    setSectionFilter(updatedFilter);
  };

  const handleUpdateSubCategoryFilter = (updatedFilter) => {
    setSubCategoryFilter(updatedFilter);
  };

  const handleUpdateSortFilter = (updatedFilter) => {
    setSortFilter(updatedFilter);
  };

  return (
    <main className="flex-1 w-11/12 max-w-screen-lg mx-auto mt-20">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex justify-end">
            <Filter
              filterOptions={section}
              selectedFilter={sectionFilter}
              onFilterUpdate={handleUpdateSectionFilter}
              filterType="section"
              defaultLabel="Select Category"
            />

            <Filter
              filterOptions={subCategories}
              selectedFilter={subCategoryFilter}
              onFilterUpdate={handleUpdateSubCategoryFilter}
              filterType="subCategory"
              defaultLabel="Select Sub-Category"
            />

            <Filter
              filterOptions={sortFilters}
              selectedFilter={sortFilter}
              onFilterUpdate={handleUpdateSortFilter}
              filterType="sort"
              defaultLabel="Sort By"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cardData
              .slice(0, Math.min(currentPage * itemsPerPage, cardData.length))
              .map((card) => (
                <Card key={card.prod_sku} card={card} />
              ))}
          </div>
        </>
      )}
    </main>
  );
};

export default Hero;
