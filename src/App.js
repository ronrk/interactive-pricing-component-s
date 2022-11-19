import React, { useEffect } from "react";
import Header from "./Components/Header";
import PricingApp from "./Components/PricingApp";

import { useSliderContext } from "./context/SliderContext";

const App = () => {
  const val = useSliderContext();

  return (
    <div className="app-container">
      <Header />
      <PricingApp />
    </div>
  );
};

export default App;
