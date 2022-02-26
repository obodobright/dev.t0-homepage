import React from "react";
import styled from "styled-components";
import logo from "./asset/dev.png";
import { BsSearch } from "react-icons/bs";
export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <SearchContainer>
          <SearchInput type="text" placeholder="Search..." />
          <Icon>
            <BsSearch />
          </Icon>
        </SearchContainer>
        <Div></Div>
        <RegContainer>
          <Typograpghy>Log in</Typograpghy>
          <Typograpghy bd cl>
            Create Account
          </Typograpghy>
        </RegContainer>
      </Wrapper>
    </Container>
  );
};

const Div = styled.div`
  display: flex;
  flex: 1;
`;
const RegContainer = styled.div`
  display: flex;
  margin-right: 50px;
`;
const Typograpghy = styled.div`
  margin: 0 10px;
  font-size: 15px;
  padding: 9px 15px;
  border: ${({ bd }) => (bd ? "1px solid #3E5EE0" : "")};
  color: ${({ cl }) => (cl ? "#3E5EE0" : "inherit")};
  border-radius: 7px;
  cursor: pointer;
  transition: all 350ms;
  &:hover {
    background: ${({ bd }) => (bd ? "#3E5EE0" : "#e2e3f3")};
    color: ${({ cl }) => (cl ? "white" : "inherit")};
  }
`;
const Container = styled.div`
  width: 100%;
  height: 60px;
  background: white;
  border-bottom: 1px solid lightgray;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;
const Icon = styled.div`
  //   width: 20px;
  font-size: 20px;
  padding: 10px;
`;
const SearchContainer = styled.div`
  width: 400px;
  height: 40px;
  border-radius: 7px;
  font-size: 28px;
  //   background: blue;
  display: flex;
  justifycontent: center;
  align-items: center;
  border: 1px solid lightgray;
`;
const SearchInput = styled.input`
  width: 350px;
  height: 30px;
  //   background: red;
  border: 0;
  outline: none;
  background: transparent;
  padding: 5px;
  font-size: 17px;
`;
const Logo = styled.img`
  width: 50px;
  height: 40px;
  padding-left: 50px;
  padding-right: 20px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: cente;
  //   flex-direction: row;
  //   margin-left: 50px;
  flex-directon: row;
`;
