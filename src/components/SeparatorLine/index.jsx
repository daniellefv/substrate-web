import styled, { css } from 'styled-components';
import baseTheme from 'styles/theme';

export const SeparatorLineStyle = css`
  display: flex;
  justify-content: ${props => (props.center ? 'center' : undefined)};

  div {
    padding: 0;
    margin: -0.2rem 0 0.5rem 0;
    width: 4rem;
    height: 0.15rem;
    background-color: ${props => baseTheme.color_quaternary};
  }
`;

const Wrapper = styled.div`
  ${props => SeparatorLineStyle}
`;

export const SeparatorLine = ({ light, center }) => {
  return (
    <Wrapper light={light} center={center}>
      <div></div>
    </Wrapper>
  );
};

export default SeparatorLine;
