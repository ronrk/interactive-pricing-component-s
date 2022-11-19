import React from "react";

import Wrapper from "./styled/Header.styled";

const Header = () => {
  return (
    <Wrapper>
      <div className="title">
        <h2>Simple, traffic-based pricing</h2>
        <span>Sign-up for our 30-day trial. No credit card required.</span>
      </div>
    </Wrapper>
  );
};

export default Header;
