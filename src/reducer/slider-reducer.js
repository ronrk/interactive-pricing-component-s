export const initialState = {
  rangeValues: [
    {
      _pageviewsTotal: 10000,
      initialPrice: 8,
      pageviewsLabel: 10,
      level: "K",
      showPrice: 8,
      yearlyDiscount: 0,
    },
    {
      _pageviewsTotal: 50000,
      initialPrice: 12,
      pageviewsLabel: 50,
      level: "K",
      showPrice: 12,
      yearlyDiscount: 0,
    },
    {
      _pageviewsTotal: 100000,
      initialPrice: 16,
      pageviewsLabel: 100,
      level: "K",
      showPrice: 16,
      yearlyDiscount: 0,
    },
    {
      _pageviewsTotal: 500000,
      initialPrice: 24,
      pageviewsLabel: 500,
      level: "K",
      showPrice: 24,
      yearlyDiscount: 0,
    },
    {
      _pageviewsTotal: 1000000,
      initialPrice: 36,
      pageviewsLabel: 1,
      level: "M",
      showPrice: 36,
      yearlyDiscount: 0,
    },
  ],
  yearlyDiscount: false,
};

const slider_reducer = (state, action) => {
  console.log("START-REDUCER");
  if (action.type === "CHANGE_DURATION") {
    const newDuration = !state.yearlyDiscount;
    let newRangevalues;
    if (newDuration) {
      newRangevalues = initialState.rangeValues.map((item) => {
        const yearlyDiscount = (item.initialPrice * 25) / 100;
        const showPrice = item.initialPrice - yearlyDiscount;
        return { ...item, yearlyDiscount, showPrice };
      });
    } else {
      newRangevalues = state.rangeValues.map((item) => {
        const showPrice = item.initialPrice;
        return { ...item, yearlyDiscount: 0, showPrice };
      });
    }
    console.log("DISPATCH - CHANGE DURATION");
    console.log(newDuration);
    return {
      ...state,
      yearlyDiscount: newDuration,
      rangeValues: newRangevalues,
    };
  }
  /* 
  if (action.type === "APPLY_DISCOUNT") {
    console.log("DISPATCH - APPLY DISCOUNT");

    let newRangeValues = initialState.rangeValues.map((item) => {
      const yearlyDiscount = (item.initialPrice * 25) / 100;
      const showPrice = item.initialPrice - yearlyDiscount;
      return { ...item, yearlyDiscount, showPrice };
    });
    return { ...state, rangeValues: newRangeValues };
  }

  if (action.type === "APPLY_REGULAR") {
    console.log("apply regular price");
    const initialRangeValus = state.rangeValues.map((item) => {
      const showPrice = item.initialPrice;
      return { ...item, yearlyDiscount: 0, showPrice };
    });
    console.log(initialRangeValus);
    return { ...state, initialRangeValus };
  }
  */
  return state;
};

export default slider_reducer;
