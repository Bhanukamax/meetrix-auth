import React, { useEffect, useState } from "react";
import LoginLink from "./components/login-link";
import { useLocation } from "react-router-dom";
import { HomeTitle, StyledHome, UserName } from "./styled-components";

const Home = (props: any) => {
  const [user, setUser]: [any, Function] = useState(null);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  const getAuth = async (token: string) => {
    const response = await fetch("http://localhost:4000/auth", {
      method: "POST",
      headers: {
        authorization: token || "",
      },
    });
    const userData = await response.json();
    setUser(userData);
  };

  const jwt = query.get("jwt");

  useEffect(() => {
    if (jwt) {
      getAuth(jwt);
    } else {
      setUser(null);
    }
  }, [jwt]);

  return (
    <StyledHome>
      <HomeTitle to="/">
        <h1>Meetrix Auth</h1>
      </HomeTitle>
      <LoginLink
        name="John"
        token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
      ></LoginLink>
      <p>{user && "logged in user :"}</p>
      <UserName>{user && user.name}</UserName>
    </StyledHome>
  );
};

export default Home;
