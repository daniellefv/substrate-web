import styled, { css } from 'styled-components';
import baseTheme from 'styles/theme';

const InputStyle = css`
  border-radius: 5px;
  background-color: ${baseTheme.color_secondary};
  color: ${baseTheme.color_font};
  margin: 0.3rem;
  min-height: 40px;
  min-width: 200px;
  border: none;
  padding: 1rem;
  outline: none;
`;

const Wrapper = styled.input`
  ${() => InputStyle}
`;

const WrapperSelect = styled.select`
  ${() => InputStyle}
`;

export const Input = () => {
  return <Wrapper />;
};

export const Select = ({ children, ...rest }) => {
  return <WrapperSelect {...rest}> {children} </WrapperSelect>;
};
