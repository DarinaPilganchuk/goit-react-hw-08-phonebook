import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  font-weight: 500;
  text-decoration: none;
  &.active {
    color: #0926a6;
    font-weight: 900;
  }
`;
