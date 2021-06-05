import React, { useState } from "react";

export const Shoes = ({ shoeLists }) => {
  return (
    <div className="shoes">
      {shoeLists.map((d) => {
        const { id, price, img, name } = d;
        return (
          <article key={id}>
            <p>${price}</p>
            <h3>{name}</h3>
            <img src={img} alt={name} height="300px" width="300px" />
          </article>
        );
      })}
    </div>
  );
};
