import styled, { css } from 'styled-components';
import baseTheme from 'styles/theme';

const NavLinkStyle = css`
  a {
    display: inline-block;
    padding-top: 10px;
    padding-bottom: 5px;
    overflow: hidden;
    position: relative;
    color: inherit;
    font-weight: ${baseTheme.font_weight_bold};
    font-size: ${baseTheme.font_sm_1};
    text-decoration: none;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-image: ${baseTheme.color_bg_gradient};
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.3s;
    }

    &:hover {
      &:after {
        transform-origin: bottom left;
        transform: scaleX(1);
      }
    }
  }
`;

const Wrapper = styled.a`
  ${props => NavLinkStyle}
`;

const NavLink = ({ children, href }) => {
  return (
    <Wrapper>
      <li>
        <a href={href}>{children}</a>
      </li>
    </Wrapper>
  );
};

export default NavLink;
