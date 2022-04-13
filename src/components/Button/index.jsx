import React from 'react';
import styled, { css } from 'styled-components';
import baseTheme from 'styles/theme';

const ButtonStyle = css`
  outline: none;
  text-align: center;
  min-width: 150px;
  padding: 0 1.4rem;
  font-weight: 600;
  font-size: 1rem;
  color: ${baseTheme.color_quaternary};
  cursor: pointer;
  height: 46px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  background-image: linear-gradient(
    to right,
    #5e19e4,
    #59c2bf,
    #59c2bf,
    #5e19e4
  );
  border-radius: 30px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;

  :hover {
    background-position: 100% 0;
  }

  &.outline {
    background-image: linear-gradient(
      to right,
      #101010,
      #101010,
      #003618,
      #101010
    );
    color: ${baseTheme.color_tertiary};
    border: 2px solid ${baseTheme.color_tertiary};
  }

  &.white {
    background: unset;
    color: ${baseTheme.color_quaternary};
    border: 3px solid ${baseTheme.color_quaternary};

    :hover {
      box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 0.3);
    }
  }
`;

const Wrapper = styled.button`
  ${props => ButtonStyle}
`;

const Button = ({ children, className, ...rest }) => {
  return (
    <Wrapper className={className} {...rest}>
      {children}
    </Wrapper>
  );
};

export default Button;
