import React from "react";
import { All, Li, Logo, NavButton, NavWrapper, Ul } from "./style";
import logo from "../../assets/navbar/Logo.png";

export const Navbar = () => {
  return (
    <All>
      <NavWrapper>
        <Logo src={logo} alt="logo" />
        <Ul>
          <Li>Home</Li>
        </Ul>
        <Ul>
          <Li>Course</Li>
        </Ul>
        <Ul>
          <Li>About</Li>
        </Ul>
        <Ul>
          <Li>Instructor</Li>
        </Ul>
        <Ul>
          <Li>Login</Li>
        </Ul>
        <NavButton>Sign Up</NavButton>
      </NavWrapper>
    </All>
  );
};
