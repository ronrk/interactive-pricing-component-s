import React, { useState } from "react";

import { ReactComponent as IconCheck } from "../assets/images/icon-check.svg";
import Wrapper from "./styled/PricingApp.styled";

import { useSliderContext } from "../context/SliderContext";

const PricingApp = () => {
  const [sliderIdx, setSliderIdx] = useState(0);
  const [bgWidth, setBgWidth] = useState(0);
  const { rangeValues, changeDuration } = useSliderContext();
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onSlide = (e) => {
    setSliderIdx(e.target.value);

    const newWidth = 100 / ((rangeValues.length - 1) / Number(e.target.value));

    setBgWidth(newWidth);
  };

  const onChangeDuration = (e) => {
    changeDuration();
  };

  if (!rangeValues) {
    return <div></div>;
  }

  const currentValue = rangeValues[sliderIdx];

  return (
    <Wrapper bgWidth={bgWidth}>
      <div className="title" onSubmit={onSubmit}>
        <span className="title__pageviews">
          {currentValue.pageviewsLabel}k pageviews
        </span>
        <div className="title__month">
          <h3>${currentValue.showPrice.toFixed(2)}</h3>
          <span> /month</span>
        </div>
      </div>
      <form className="form">
        <div className="input-control range">
          <input
            type="range"
            min="0"
            max="4"
            step="1"
            className="range-input"
            value={sliderIdx}
            onChange={onSlide}
          />
        </div>
        <div className="input-control checkbox">
          <label htmlFor="durationTerms" className="bill__month">
            Monthly Billing
          </label>
          <input
            type="checkbox"
            name="durationTerms"
            id="durationTerms"
            onChange={onChangeDuration}
          />
          <label htmlFor="durationTerms" className="bill__year">
            Yearly Billing
          </label>
          <span className="yearly__discount">25% discount</span>
        </div>
        <div className="form__footer">
          <ul className="footer__list">
            <li>
              <IconCheck className="icon" />
              Unlimited websited
            </li>
            <li>
              <IconCheck className="icon" />
              100% data ownership
            </li>
            <li>
              <IconCheck className="icon" />
              Email reports
            </li>
          </ul>
          <button className="btn form-btn" type="submit" onClick={onSubmit}>
            Start my trial
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default PricingApp;
