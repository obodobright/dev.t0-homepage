import React from "react";
import { Navbar } from "./Navbar";
import Container from "@mui/material/Container";
import Sidebar from "./component/Sidebar/sidebar";
import Main from "./component/Main";
import Rightbar from "./component/RightBar";
const Home = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" style={{ marginTop: "5rem", display: "flex" }}>
        <Sidebar />
        <Main />
        <Rightbar />
      </Container>
    </>
  );
};

export default Home;
