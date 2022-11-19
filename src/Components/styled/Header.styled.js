import styled from "styled-components";

const HeaderWrapper = styled.header`
  padding: 7rem;
  text-align: center;
  & h2 {
    font-size: 4rem;
    color: var(--dark-desaturated-blue);
    margin-bottom: 1.4rem;
  }
  & span {
    font-size: 1.8rem;
    color: var(--grayish-blue);
  }
`;

export default HeaderWrapper;
