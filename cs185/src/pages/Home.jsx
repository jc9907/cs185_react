import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 1000,
    "margin-left": "10%",
    "margin-top": "20%",
    font: 20,
  },
  header: {
    "margin-left": "30%",
    "margin-top": "3%",
  },
  comp: (props) => ({
    background: props.backgroundColor,
  }),
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <h1>Jiachen Zhang</h1>
      Hello my name is Jiachen Zhang, I am a Sophomore in UCSB majoring in
      computer engineering.
    </List>
  );
}
