import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FaRegComment } from "react-icons/fa";
import { SiGithubsponsors } from "react-icons/si";
import { posts } from "./post";
import styled from "styled-components";
import "./style.css";
const Main = () => {
  const Img = styled.img``;
  return (
    <Box className="containerMain">
      <nav>
        <li className="active">Relevant</li>
        <li>Latest</li>
        <li>Top</li>
      </nav>

      {posts.map((post) => {
        const { date, authorName, img, postTitle, postMinute, harshtags, reactions, id } = post;
        return (
          <Card
            sx={{
              marginTop: "10px",
              boxShadow: "box-shadow: -2px 4px 7px -3px rgba(0,0,0,0.75);",
            }}
            key={id}
          >
            <CardContent style={{ display: "flex", alignItems: "" }}>
              <Img src={img} alt={authorName} className="user-img" />
              <Box sx={{ marginTop: "-2px", width: "100%" }} className="user-container">
                <Typography className="author-name">{authorName}</Typography>
                <span className="date">{date}</span>
                <h2>{postTitle}</h2>
                <Box className="harshtag">
                  {harshtags?.map((tag) => (
                    <span className="tags">
                      <small
                        style={
                          tag === "webdev"
                            ? { color: "blue" }
                            : tag === "programming" || tag === "life" || tag === "next"
                            ? { color: "red" }
                            : tag === "dotnet" || tag === "cssbattle" || tag === "react"
                            ? { color: "green" }
                            : tag === "javascript" ||
                              tag === "javaScript" ||
                              tag === "gatewaypayment"
                            ? { color: "yellow" }
                            : tag === "html" || tag === "net"
                            ? { color: "purple" }
                            : tag === "opensource" || tag === "github"
                            ? { color: "lighblue" }
                            : tag === "Mongodb" || tag === "css"
                            ? { color: "rebeccapurple" }
                            : tag === "database" || tag === "technology"
                            ? { color: "coral" }
                            : tag === "agile" || tag === "iot"
                            ? { color: "crimson" }
                            : tag === "event" || tag === "productivity"
                            ? { color: "chocolate" }
                            : { color: "gray" }
                        }
                      >
                        {tag && "#"}
                      </small>
                      {tag}
                    </span>
                  ))}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div className="flex-one">
                    <div className="opinions">
                      <Box sx={{ marginRight: "10px", paddingLeft: "3px" }}>
                        <SiGithubsponsors />
                      </Box>
                      <p>{reactions} reactions</p>
                    </div>
                    <div className="opinions">
                      <Box sx={{ padding: "4px" }}>
                        <FaRegComment />
                      </Box>
                      <p>Add Comment</p>
                    </div>
                  </div>
                  <div className="flex-two">
                    <p>{postMinute} min read</p>
                    <p className="savebtn">Save</p>
                  </div>
                </Box>
              </Box>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};
export default Main;
