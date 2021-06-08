import React, { useState } from "react";

export const Shoes = ({ shoeLists }) => {
  return (
    <div className="shoes">
      {shoeLists.map((d) => {
        const { id, price, img, name } = d;
        return (
          <article key={id} className="shoe-item">
            <img src={img} alt={name} className="pix" />
            <div className="shoe-info">
              <h3 className="name">{name}</h3>
              <p className="price">${price}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
