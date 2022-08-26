import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import { BrowserRouter as Router, Switch, Route,Routes } from "react-router-dom";



function App() {
  return (

    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart/:id/:qty/:count" element={<CartScreen />} />
          <Route path="/" exact element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </Router>

  );
}

export default App;
