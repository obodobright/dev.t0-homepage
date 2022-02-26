import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import styled from "styled-components";
import "./style.css";
import devImg from "../../asset/devimg.jpg";
import { NavData, Other, Socials, tags } from "./NavData";

const Sidebar = () => {
  return (
    <div className="container">
      <Box style={{ width: "250px" }}>
        <Card>
          <CardContent>
            <div className="header-text">
              <a href="dev.to">DEV Community</a> is a community of 803,838 amazing developers
            </div>
            <Typography>
              We're a place where coders share, stay up-to-date and grow their careers.{" "}
            </Typography>
            <Box
              style={{
                marginTop: "10px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Buttonn cl bd td>
                Create account
              </Buttonn>
              <Buttonn>Login</Buttonn>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ boxShadow: 0, background: "inherit" }}>
          <CardContent sx={{ padding: "20px 0" }}>
            {NavData?.map((data) => (
              <div className="navLink">
                <div>{data.icon}</div>
                <div>{data.name}</div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card sx={{ boxShadow: 0, background: "inherit" }}>
          <Typography>Other</Typography>

          <CardContent sx={{ padding: "20px 0" }}>
            {Other?.map((data) => (
              <div className="navLink">
                <div>{data.icon}</div>
                <div>{data.name}</div>
              </div>
            ))}
          </CardContent>
        </Card>
        <div className={"iconContainer"}>
          {Socials.map((data) => (
            <div className="icon">{data.icon}</div>
          ))}
        </div>
        <Card sx={{ boxShadow: 0, background: "inherit" }}>
          <Typography>Popular Tags</Typography>

          <CardContent sx={{ padding: "20px 0" }}>
            <div className="tag-container">
              {tags?.map((data) => (
                <div className="navLink">{"#" + data}</div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent style={{ padding: "8px 14px" }}>
            <img src={devImg} alt="" className="dev-img" />
            <h2 className="img-text">Shop DEV Basics</h2>
          </CardContent>
        </Card>
        <Card sx={{ marginTop: "15px" }}>
          <CardContent>
            <Typography>
              DEV runs on 100% open source code known as{" "}
              <span style={{ color: "#3249B2" }}>Forem</span>. Contribute to the codebase or host
              your own!
            </Typography>
            <p style={{ fontWeight: "bold" }}>Check these out! 👇</p>
            <ul>
              <li className="ex-link">Main Forem Repo</li>
              <li className="ex-link">Self-Host Instructions</li>
            </ul>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};
export default Sidebar;

const Buttonn = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  cursor: pointer;
  margin: 5px 0;
  font-size: 14px;
  transition: all 35oms;
  color: ${({ cl }) => (cl ? "#3E5EE0" : "inherit")};
  border: ${({ bd }) => (bd ? "1px solid #3E5EE0" : "")};
  &:hover {
    color: ${({ cl }) => (cl ? "white" : "inherit")};
    text-decoration: ${({ td }) => (td ? "underline" : "inherit")};

    background: ${({ bd }) => (bd ? "#3E5EE0" : "whitesmoke")};
  }
`;
