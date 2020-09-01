import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const StyledLink = styled(NavLink)`
  border: 2px solid pink;
`;

interface Props {
  name: string;
  token: string;
}

const LoginLink: React.FC<Props> = ({ name, token }: Props) => {
  return <StyledLink to={`?jwt=${token}`}>Login As {name}</StyledLink>;
};

export default LoginLink;
