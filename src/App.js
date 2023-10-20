import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Route />
        <Nav />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}
