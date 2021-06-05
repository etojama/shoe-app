import React from "react";

export const Categories = ({ categories, filterItems }) => {
  return (
    <div className="category">
      {categories.map((category, index) => {
        return (
          <button
            className="button"
            type="button"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
