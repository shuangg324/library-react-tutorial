import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'

export default function Book({ book }) {
  return (
    <div className="book">
      <Link to="/books/1">
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to="/books/1" className="book__title--link">
          {book.title}
        </Link>
      </div>
      <div className="book__ratings">
        {new Array(Math.floor(book.rating)).fill(0).map((_, index) => (
          <FontAwesomeIcon icon="star" key={index} />
        ))}
        {
          Number.isInteger(book.rating) ? (
            ""
          ) : (
            <FontAwesomeIcon icon="star-half-alt" />
          ) // to simplify ternary operator when theres an empty string, replace '? '' :' with &&. && says if left is true, render right side. if false, render nothing
        }
      </div>
      <div className="book__price">
        {book.salePrice ? (
          <>
            <span className="book__price--normal">
              ${book.originalPrice.toFixed(2)}
            </span>
            ${book.salePrice.toFixed(2)}
          </>
        ) : (
          <>${book.originalPrice.toFixed(2)}</>
        )}
      </div>
    </div>
  );
}
