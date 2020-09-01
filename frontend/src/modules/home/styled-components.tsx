import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const HomeTitle = styled(NavLink)`
  text-decoration: none;
  color: #212121;
`;

export const UserName = styled.h2`
  color: #212121;
`;
