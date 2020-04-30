import React, { Component } from "react";
import "../App.css";
import ReactPlayer from "react-player";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export default function Videos() {
  return (
    <body>
      <div className="center">
        <List>
          <ListItem>
            <ReactPlayer url="https://www.youtube.com/watch?v=bS2ECh9Sees&list=LLbucXVn_RwkN7vgdWv_Pukw&index=2&t=0s" />
            <ReactPlayer url="https://www.youtube.com/watch?v=LdHprvhehrQ&list=LLbucXVn_RwkN7vgdWv_Pukw&index=3&t=0s" />
          </ListItem>
          <ListItem>
            <ReactPlayer url="https://www.youtube.com/watch?v=uRilip0v9e8&list=LLbucXVn_RwkN7vgdWv_Pukw&index=21&t=0s" />
            <ReactPlayer url="https://www.youtube.com/watch?v=9m4v1PPPv90&list=LLbucXVn_RwkN7vgdWv_Pukw&index=22&t=0s" />
          </ListItem>
        </List>
      </div>
    </body>
  );
}
