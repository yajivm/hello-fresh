import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavTitle = styled(Link)`
  cursor: pointer;
  padding: 10px;
  width: 100px;
  text-align: center;
  font-size: 20px;
  border-bottom: 5px solid transparent;
  text-decoration: none;
  color: #000;
  ${({ iscurrenttabactive }) => iscurrenttabactive && `
    color: rgb(6, 122, 70);
    border-color: rgb(6, 122, 70);
  `}
`;