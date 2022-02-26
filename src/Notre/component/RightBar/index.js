import React from "react";
import Box from "@mui/material/Box";
import utils from "../../asset/util.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import { guides, queried } from "./data";
import "./style.css";
const Rightbar = () => {
  return (
    <Box className="containerBar">
      <Card>
        <CardContent sx={{ padding: 0 }}>
          <img src={utils} className="img" />
          <Box>
            <h2 className="title-bar">Microsoft Azure Trial Hackathon (8)</h2>
          </Box>
          <Divider light />
          <Box sx={{ padding: "20px 7px", width: "100%" }}>
            <List
              sx={{ display: "flex", flexDirection: "column", marginTop: "-20px" }}
              component="nav"
              aria-label="mailbox folders"
            >
              <ListItem button divider>
                <ListItemText
                  className={"list-item-text"}
                  primary="
Reminder: Join the Microsoft Azure Trial Hackathon to Win Prizes (and Community Bragging Rights)"
                />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText
                  className={"list-item-text"}
                  primary="Azure Phone Chatbot
"
                />
              </ListItem>
              <Divider light />
              <ListItem button divider>
                <ListItemText
                  className={"list-item-text"}
                  primary="Azure Trial Hackathon - Azura - Yes Azura!"
                />
              </ListItem>

              <ListItem button divider>
                <ListItemText
                  className={"list-item-text"}
                  primary="Azure Trial Hackathon - Moodflix - your mood, our suggestions"
                />
              </ListItem>
              <ListItem button>
                <ListItemText className={"list-item-text"} primary="Emotion Badge for Github" />
              </ListItem>
            </List>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="navLinkk btn1">Share your project</div>
            <div className="navLinkk btn2">See all posts</div>
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ marginTop: "10px" }}>
        <CardContent style={{ padding: 0 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              alignItems: "center",
            }}
          >
            <h2>Listings </h2>
            <span style={{ color: "blue", cursor: "pointer" }}>see all</span>
          </div>
          <List
            sx={{ display: "flex", flexDirection: "column", marginTop: "-20px" }}
            component="nav"
            aria-label="mailbox folders"
          >
            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                primary="Mass Email system/Process"
                secondary="collabs"
              />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                primary="Building apps for 3rd Party platforms? We need you!"
                secondary="collabs"
              />
            </ListItem>
            <Divider light />
            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                primary="New Poll LIVE for devs building on top of 3rd party platforms"
                secondary="collabs"
              />
            </ListItem>

            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                secondary="Education"
                primary="🔥 Tails - The ultimate TailwindCSS drag'n drop page creator"
              />
            </ListItem>
            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                secondary="Product"
                primary="Custom Software Development Services"
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                style={{ textAlign: "center", fontSize: "12px" }}
                className={"list-item-text"}
                primary="Create a Listing"
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <Card sx={{ marginTop: "10px" }}>
        <CardContent style={{ padding: 0 }}>
          <h2 style={{ padding: "10px" }}>#help </h2>
          <List
            sx={{ display: "flex", flexDirection: "column", marginTop: "-20px" }}
            component="nav"
            aria-label="mailbox folders"
          >
            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                primary="Safeargs plugin not generating direction classes"
                secondary={<button className="listBtn">new</button>}
              />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                primary="How to Make Money with HTML, CSS, & JavaScript?"
                secondary={<button className="listBtn">new</button>}
              />
            </ListItem>
            <Divider light />
            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                primary="Https requests via 2 socks5 proxies"
                secondary={<button className="listBtn">new</button>}
              />
            </ListItem>

            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                secondary={<button className="listBtn">new</button>}
                primary="[Help] Flutter Dropdown
"
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                className={"list-item-text"}
                secondary={<button className="listBtn">new</button>}
                primary="E-Commerce Build - What language/framework?"
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <Card sx={{ marginTop: "10px" }}>
        <CardContent style={{ padding: 0 }}>
          <h2 style={{ padding: "10px" }}>#discuss </h2>
          <List
            sx={{ display: "flex", flexDirection: "column", marginTop: "-20px" }}
            component="nav"
            aria-label="mailbox folders"
          >
            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                primary="It *IS* possible to get a voice here! [tips to grow on DEV.to + a mini rant!]"
                secondary="77 comments"
              />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                primary="What was your win this week"
                secondary="6 comments"
              />
            </ListItem>
            <Divider light />
            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                primary="February 25th, 2022: What did you learn this week?"
                secondary="16 comments"
              />
            </ListItem>

            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                secondary="24 comments"
                primary="What's one piece of advice every dev should ignore? 🚩🚩🚩
"
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                className={"list-item-text"}
                secondary={<button className="listBtn">new</button>}
                primary="My 5 Apprenticeship Patterns for 2022
New"
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <Card sx={{ marginTop: "10px" }}>
        <CardContent style={{ padding: 0 }}>
          <h2 style={{ padding: "10px" }}>#explainlikeiamfive </h2>
          <List
            sx={{ display: "flex", flexDirection: "column", marginTop: "-20px" }}
            component="nav"
            aria-label="mailbox folders"
          >
            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                primary="Please explain why I need software architecture"
                secondary="26 comments"
              />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                primary=" Is goto all that bad? "
                secondary="9 comments"
              />
            </ListItem>
            <Divider light />
            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                primary="How does database indexing work? ?"
                secondary="7 comments"
              />
            </ListItem>

            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                secondary="11 comments"
                primary="Explain Postgresql Views Like I'm Five "
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                className={"list-item-text"}
                secondary="6 comments"
                primary="Why does two small for-loops run faster than a big one ? 
New"
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <Card sx={{ marginTop: "10px" }}>
        <CardContent style={{ padding: 0 }}>
          <h2 style={{ padding: "10px" }}>#challenge </h2>
          <List
            sx={{ display: "flex", flexDirection: "column", marginTop: "-20px" }}
            component="nav"
            aria-label="mailbox folders"
          >
            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                primary="CSSBattle | #2 Carrom"
                secondary={<button className="listBtn">new</button>}
              />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                primary="Build NFTs on Stellar during 48-hour hackathon "
                secondary={<button className="listBtn">new</button>}
              />
            </ListItem>
            <Divider light />
            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                primary="Advent Of Code 2021 – Seven Segment Search – Puzzle 8 "
                secondary={<button className="listBtn">new</button>}
              />
            </ListItem>

            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                secondary="1 comment"
                primary="What to know before you start: 100 Pull Requests in 100 Days"
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                className={"list-item-text"}
                secondary={<button className="listBtn">new</button>}
                primary="CSSBattle | #1 Simply Square "
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <Card sx={{ marginTop: "10px" }}>
        <CardContent style={{ padding: 0 }}>
          <h2 style={{ padding: "10px" }}>#meta </h2>
          <List
            sx={{ display: "flex", flexDirection: "column", marginTop: "-20px" }}
            component="nav"
            aria-label="mailbox folders"
          >
            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                primary="It *IS* possible to get a voice here! [tips to grow on DEV.to + a mini rant!] "
                secondary="77 comments"
              />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText
                className={"list-item-text"}
                primary=" Gather - Aproximando contato mesmo através do home office  "
                secondary={<button className="listBtn">new</button>}
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <Card sx={{ marginTop: "10px" }}>
        <CardContent style={{ padding: 0 }}>
          <h2 style={{ padding: "10px" }}>#watercooler </h2>
          <List
            sx={{ display: "flex", flexDirection: "column", marginTop: "-20px" }}
            component="nav"
            aria-label="mailbox folders"
          >
            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                primary="How writing 700 articles changed my life
 "
                secondary="18 comments"
              />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                primary="It *IS* possible to get a voice here! [tips to grow on DEV.to + a mini rant!] "
                secondary="77 comments"
              />
            </ListItem>
            <ListItem button divider>
              <ListItemText
                className={"list-item-text"}
                primary="Are you participating in the reply code challenge? "
                secondary={<button className="listBtn">new</button>}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                className={"list-item-text"}
                primary="How to have fun (and win) in a hackathon "
                secondary={<button className="listBtn">new</button>}
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <Card sx={{ marginTop: "20px", background: "inherit", boxShadow: 0 }}>
        <CardContent style={{ padding: "10px 10px" }}>
          <code className="code">trending guides/resources </code>
          <List
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
            component="nav"
            aria-label="mailbox folders"
          >
            {guides.map((data) => (
              <ListItem button className="list-item-text-tag">
                <ListItemText primary={<p className={"list-item-text-trend"}>{data}</p>} />
              </ListItem>
            ))}
            <Divider light />
          </List>
        </CardContent>
      </Card>
      <Card sx={{ marginTop: "20px", background: "inherit", boxShadow: 0 }}>
        <CardContent style={{ padding: "10px 10px" }}>
          <code className="code">recently queried </code>
          <List
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
            component="nav"
            aria-label="mailbox folders"
          >
            {queried.map((data) => (
              <ListItem button className="list-item-text-query">
                <ListItemText primary={<p className={"list-item-text-trend"}>{data}</p>} />
              </ListItem>
            ))}
            <Divider light />
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Rightbar;
