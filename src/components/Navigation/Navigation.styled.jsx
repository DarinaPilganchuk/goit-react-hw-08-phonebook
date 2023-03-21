import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBox = styled.nav`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  &.active {
    color: #0926a6;
    font-weight: 900;
    /* background-color: #3582e1; */
  }
`;
