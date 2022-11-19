import styled from "styled-components";
import iconRange from "../../assets/images/icon-slider.svg";

const PricingAppWrapper = styled.div`
  background-color: var(--white);
  width: 40%;
  height: 70%;
  border-radius: 6px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.3);
  padding: 2rem 3rem;
  overflow: hidden;
  & .title {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 2rem;
    & .title__pageviews {
      font-size: 1.3rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: var(--grayish-blue);
      font-weight: 800;
    }
    & .title__month {
      display: flex;
      justify-content: center;
      align-items: center;
      & h3 {
        font-size: 3rem;
      }
      & span {
        font-size: 1.3rem;
        text-transform: lowercase;
        color: var(--grayish-blue);
        letter-spacing: 0.7px;
        margin-left: 0.5rem;
      }
    }
  }

  /* form */

  & .form {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;

    & .input-control {
      margin: 1rem 0;
      width: 100%;
      display: flex;
      justify-content: center;

      &.checkbox {
        display: flex;
        align-items: center;
        position: relative;
        margin-top: 3rem;
        margin-bottom: 7rem;

        &::after {
          content: "";
          width: 120%;
          height: 2px;
          display: block;
          position: absolute;
          background-color: var(--light-grayish-blue);
          bottom: -3.4rem;
        }
        & .yearly__discount {
          color: var(--light-red);
          background-color: var(--light-grayish-red);
          font-weight: 800;
          padding: 0 0.5rem;
          margin-left: 0.3rem;
          transition: all 0.2s;
        }
        & label {
          font-size: 1.3rem;
          color: var(--grayish-blue);
          font-weight: 700;
          letter-spacing: 0.3px;
          transition: all 0.2s;
        }
        & input {
          margin: 0 1rem;
          appearance: none;
          height: 2rem;
          width: 4rem;
          background-color: var(--light-grayish-blue);
          border-radius: 100px;
          position: relative;
          cursor: pointer;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          transition: all 0.3s;
          &:hover {
            background-color: var(--strong-cyan);
          }

          &:checked {
            justify-content: flex-end;

            & + .bill__year {
              background-color: var(--strong-cyan);
              padding: 0.7rem;
              font-weight: bold;
              border-radius: 100px;
              color: var(--white);
              & + .yearly__discount {
                font-size: 1.3rem;
              }
            }
          }

          &::before {
            position: absolute;
            content: "";
            display: block;
            height: 1.3rem;
            width: 1.3rem;
            margin: 0 0.5rem;
            border-radius: 50%;
            background-color: var(--very-pale-blue);
            transition: all 0.2s;
          }
        }
      }

      /* range style */
      &.range {
        & .range-input {
          -webkit-appearance: none;
          width: 100%; /* Specific width is required for Firefox. */
          background: transparent;
          border-radius: 100px;
          &:focus {
            outline: none;
          }
          &::-moz-range-track {
            width: 100%;
            height: 3rem;
            background-color: var(--light-grayish-blue);
            border-radius: 100px;
          }
          &::-webkit-slider-runnable-track {
            width: 100%;
            height: 1rem;

            background-image: linear-gradient(
              to right,
              var(--strong-cyan) 0,
              var(--strong-cyan) ${({ bgWidth }) => bgWidth + "%"},
              var(--light-grayish-blue) 0,
              var(--light-grayish-blue)
            );
            border-radius: 100px;
            /* background-color: red; */
          }
          &::-webkit-slider-thumb {
            -webkit-appearance: none;
            background: url(${iconRange}), hsla(174, 77%, 80%, 0.7);
            background-repeat: no-repeat;
            background-position: center;
            background-blend-mode: color-burn;
            margin-top: -1rem;
            /* background-size: 150%; */
            border-radius: 50%;
            height: 3rem;
            width: 3rem;
            cursor: pointer;

            &:hover {
              filter: brightness(0.5) sepia(1) hue-rotate(140deg) saturate(2)
                contrast(2);
            }
          }

          &::-moz-slider-track {
            width: 100%;
            height: 3rem;
            background-color: var(--light-grayish-blue);
            border-radius: 100px;
          }
        }
        /* range end */

        & input {
          width: 90%;
        }
      }
    }

    & .form__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;

      @media screen and (max-width: 600px) {
        flex-direction: column;
      }

      & .footer__list {
        list-style: none;

        @media screen and (max-width: 600px) {
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        & li {
          display: flex;
          align-items: center;
          font-size: 1.3rem;
          color: var(--grayish-blue);
          padding: 0.3rem 0;

          & .icon {
            margin-right: 1rem;
          }
        }
      }
      & .form-btn {
        background-color: var(--dark-desaturated-blue);
        color: var(--pale-blue);
        padding: 1rem 3rem;
        border-radius: 100px;
        letter-spacing: 1.2px;
        transition: all 0.2s;
        &:hover {
          color: var(--white);
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    width: 60%;
  }
  @media screen and (max-width: 900px) {
    width: 70%;
  }
  @media screen and (max-width: 750px) {
    width: 80%;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export default PricingAppWrapper;
