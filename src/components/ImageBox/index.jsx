import styled, { css } from 'styled-components';

export const FloatBoxStyle = css`
  padding: 0 2.5rem;
  transform: translatey(0px);
  animation: ${props =>
    props.float ? 'float 6s ease-in-out infinite' : undefined};

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }

  @media screen and (max-width: 1020px) {
    div {
      max-width: ${props =>
    props.fullSize ? "100%" : "80%"};
    }
  }
`;

const Wrapper = styled.div`
  ${props => FloatBoxStyle}
`;

export const ImageBox = ({ children, float, fullSize }) => {
  return <Wrapper fullSize={fullSize} float={float}>{children}</Wrapper>;
};

export default ImageBox;
