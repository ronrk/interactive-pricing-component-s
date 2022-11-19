import React, { useContext, useReducer, useEffect } from "react";
import reducer, { initialState } from "../reducer/slider-reducer";

const SliderContext = React.createContext();

export const SliderContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeDuration = () => {
    dispatch({ type: "CHANGE_DURATION" });
  };

  /*   useEffect(() => {
    console.log("USE-EFFECT");
    if (state.yearlyDiscount === true) {
      applyYearlyDiscount();
    }
    if (state.yearlyDiscount === false) {
      applyRegularPrice();
    }
  }, [state.yearlyDiscount]); */

  return (
    <SliderContext.Provider value={{ ...state, changeDuration }}>
      {children}
    </SliderContext.Provider>
  );
};

export const useSliderContext = () => {
  return useContext(SliderContext);
};

/* 
// x / price = 25 / 100 || 100 * x = 25 * price || price / 100
*/
