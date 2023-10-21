import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../components/ui/Rating";
import React from "react";
import Price from "../components/Price";
import Book from "../components/ui/Book";
import { Link, useParams } from "react-router-dom";

export default function BookInfo({ books, addToCart }) {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id); //undefined if === cus comparing string and int.  add + to both sides to make them numbers
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Animi, ipsum sit minima inventore temporibus, quam similique
                    perferendis modi, eaque repellat molestiae dolore delectus.
                    Porro magnam quam, ab architecto reprehenderit velit.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Animi, ipsum sit minima inventore temporibus, quam similique
                    perferendis modi, eaque repellat molestiae dolore delectus.
                    Porro magnam quam, ab architecto reprehenderit velit.
                  </p>
                </div>
                <button className="btn" onClick={() => addToCart(book)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0,4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
