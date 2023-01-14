import { Routes, Route } from "react-router-dom";
import { Header, ProductDetail, ProductList, NotFound, Checkout, Success } from "./components";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="p-4 max-w-[100rem] md:m-auto mt-5">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
