import styled, { css } from 'styled-components';
import baseTheme from 'styles/theme';

const ArrowLinkStyle = css`
  color: ${baseTheme.color_quaternary};
  font-weight: 400;
  text-decoration: none;

  a {
    display: inline-block;
    height: 2rem;
    line-height: 2rem;

    svg {
      width: 32px;
      height: 32px;
      position: relative;
      top: -1px;
      -webkit-transition: -webkit-transform 0.3s ease;
      transition: -webkit-transform 0.3s ease;
      transition: transform 0.3s ease;
      transition: transform 0.3s ease, -webkit-transform 0.3s ease;
      vertical-align: middle;
    }

    circle {
      transition: stroke-dashoffset 0.3s ease;
      stroke-dasharray: 95;
      stroke-dashoffset: 95;
      cx: 16px;
      cy: 16px;
      r: 15.12px;
    }

    g {
      fill: none;
      stroke: ${props =>
        props.light ? baseTheme.color_quaternary : baseTheme.color_secondary};
      stroke-width: 1.5;
      stroke-linejoin: round;
      stroke-miterlimit: 10;
    }

    &:hover {
      svg {
        transform: translate3d(5px, 0, 0);
      }

      circle {
        stroke-dashoffset: 0;
      }
    }
  }
`;

const Wrapper = styled.a`
  ${props => ArrowLinkStyle}
`;

const ArrowLink = ({ children, href, light }) => {
  return (
    <Wrapper light={light}>
      <a href={href}>
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <g>
            <circle></circle>
            <path d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
          </g>
        </svg>
      </a>
    </Wrapper>
  );
};

export default ArrowLink;
