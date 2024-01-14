import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Home from "./components/Home";
import CartProvider from "./contexts/cartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Home />
      </CartProvider>
    </>
  );
}

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
