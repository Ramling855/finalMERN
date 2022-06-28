import "./styles.css";
import Inventory from "./Inventory";
import Signin from "./Signin";
import Header1 from "./Header1";
import Signup from "./Signup";
import HomePage from "./HomePage";
import Payment from "./Payment";
import BuyerSupplier from "./BuyerSupplier";
// import HomePage from "./HomePage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header1 />
        {/* <HomePage /> */}
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/inventory" element={<Inventory />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/home" element={<HomePage />} />
          <Route path="/buyerSupplier" element={<BuyerSupplier />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </div>
  );
}
