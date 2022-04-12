import styled, { css } from 'styled-components';
import baseTheme from 'styles/theme';

const ArrowLinkStyle = css`
  transition: (all 0.3s ease-in-out);
  position: fixed;
  bottom: 15px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  text-align: center;
  border: 2px solid #fff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  color: ${baseTheme.color_secondary};

  & > div {
    transition: (all 0.3s ease-in-out);
    &.arrow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      opacity: 1;
    }
    &.text {
      text-transform: uppercase;
      font-weight: 900;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateY(50%) translateX(-50%);
      opacity: 0;
      margin-top: 1px;
    }
  }

  &:hover {
    transform: scale(1.1);
    bottom: 20px;
    cursor: pointer;
    background: darken(#222, 15%);
    box-shadow: 0 10px 5px rgba(0, 0, 0, 0.1);

    & > div {
      &.arrow {
        transform: translateY(-150%) translateX(-50%);
        opacity: 0;
      }
      &.text {
        transform: translateY(-50%) translateX(-50%);
        opacity: 1;
      }
    }
  }
`;

const Wrapper = styled.a`
  ${props => ArrowLinkStyle}
`;

const BackToTop = () => {
  return (
    <Wrapper className="active">
      <div className="active" aria-hidden="true">
        <div className="arrow">
          <i className="fa fa-arrow-up"></i>
        </div>
        <div className="text">Back to top</div>
      </div>
    </Wrapper>
  );
};

export default BackToTop;
