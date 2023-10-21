import Nav from "./components/Nav";
import React, {useState, useEffect} from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { books } from "./data";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  const [cart,setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, book]) //... is spread operator
  }

  useEffect(() => {
    console.log(cart);
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/books" exact render={() => <Books books={books} />} />
          <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart}/>} />
          <Route path="/cart" render={() => <Cart books={books} />} />

          <Footer />
      </div>
    </Router>
  );
}
