import styled, { css } from 'styled-components';
import baseTheme from 'styles/theme';

const ExternalPressStyle = css`
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  border-radius: 50px;

  > div:first-of-type {
    position: relative;
    width: 18rem;
    height: 19rem;
    background: #232129;
    border-radius: 4px;
    box-shadow: ${props => props.theme.shadow_top};
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;

    a {
      position: absolute;
      bottom: -2rem;
      left: 40%;
      background: ${baseTheme.color_gradient_primary};
      color: ${baseTheme.color_gradient_tertiary};
      width: 60px;
      height: 60px;
      padding: 0.6rem;
      border-radius: 50%;
      text-decoration: none;
      font-size: ${baseTheme.font_sm_2};
      cursor: pointer;
    }

    > div:first-child {
      width: 18rem;
      height: 10rem;
      clip: rect(0, 20rem, 10rem, 0);
      border-radius: 4px;
      position: absolute;
    }

    :hover {
      -webkit-transform: translate(20px, -10px);
      -ms-transform: translate(10px, -10px);
      transform: translate(0px, -10px);
      -webkit-box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
      svg {
        animation: shakeX 2s ease-in-out infinite;
      }
    }
  }

  h2 {
    margin: auto;
    text-align: center;
    margin-top: 10rem;
    font-size: ${baseTheme.font_sm_1};
  }

  p {
    text-align: center;
    padding: 0 1rem;
    color: #c8c8c8;
    line-height: 18px;
  }

  img {
    width: 100%;
  }

  svg {
    width: 40px;
    height: 40px;
    position: relative;
    animation: shakeX infinite timing-function delay iteration-count direction
      fill-mode;
  }

  g {
    fill: none;
    stroke: white;
    stroke-width: 1.5;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }

  @keyframes shakeX {
    0% {
      transform: translatex(0px);
    }
    25% {
      transform: translatex(-10px);
    }
    50% {
      transform: translatex(10px);
    }
    100% {
      transform: translatex(0px);
    }
  }
`;

const Wrapper = styled.div`
  ${props => ExternalPressStyle}
`;

const ExternalPress = ({ date, href, title, image }) => {
  return (
    <Wrapper>
      <div>
        <div>{image}</div>
        <h2>{date}</h2>
        <p>{title}</p>
        <div>
          <a href={href} target="_">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <g>
                <circle></circle>
                <path d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default ExternalPress;
