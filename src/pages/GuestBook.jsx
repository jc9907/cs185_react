import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import config from "../config";
const firebase = require("firebase");
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 720,
    "margin-left": "35%",
  },
  header: {
    "margin-left": "40%",
    "margin-top": "3%",
  },
  button: {
    "margin-top": "3%",
    "margin-left": "3%",
  },
  chip: {
    margin: "5px",
  },
  di: {
    display: "grid",
    "padding-top": "50px",
    "grid-template-columns": "repeat(auto-fit, minmax(400px, 1fr))",
    "grid-gap": "1rem",
    "margin-left": "5%",
    "margin-right": "5%",
  },
  gridList: {
    height: 500,
    transform: "translateZ(0)",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  comp: (props) => ({
    background: props.backgroundColor,
  }),
}));

function validateName(n) {
  return n != null && n.length > 4 && n.length < 21;
}

function validateDescription(d) {
  return d === "" || d.length < 100;
}

function validateMessage(m) {
  return m != null && m.length > 14 && m.length < 501;
}
function validateEmail(e) {
  return e === "" || e.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
}

export default function GuestBook() {
  const classes = useStyles();
  const validateNext = () => {
    if (
      !validateDescription(description) ||
      !validateMessage(message) ||
      !validateEmail(contact) ||
      !validateName(name)
    ) {
      setOpen(true);
    } else {
      const jsonBody = {
        Name: name,
        Description: description,
        Message: message,
        Viewable: viewable,
        Contact: contact,
      };
      firebase.database().ref("data").push().set(jsonBody);
    }
  };
  const [name, setName] = React.useState("defaultName");
  const [description, setDescription] = React.useState("");
  const [message, setMessage] = React.useState("default message          ");
  const [viewable, setViewable] = React.useState(true);
  const [contact, setContact] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [shouldRender, setShouldRender] = React.useState(true);
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    let ref = firebase.database().ref("data");
    ref.on("value", (snapshot) => {
      var val = snapshot.val();

      snapshot.forEach(function (childSnapshot) {
        var n = childSnapshot.child("Name").val();
        var d = childSnapshot.child("Description").val();
        var m = childSnapshot.child("Message").val();
        var v = childSnapshot.child("Viewable").val();
        console.log(n, d, m, v);

        const newData = [];
        newData.push(n + " ");
        console.log(newData);
        setData((prevPack) => [...prevPack, newData[0]]);
        console.log(data);
        //return true;
      });
      //setData(state)
      console.log(data);
    });

    //   for (var i = keys.length - 1; i >= 0; i--) {
    //     newData.push("Name " + val[keys[i]].Name);
    //     console.log(newData);
    //     setData((oldData) => [...oldData, newData]);
    //     console.log(val[keys[i]].Contact);
    //   }

    //   console.log(data);
  }, [shouldRender]);

  return (
    <div>
      {console.log(shouldRender)}
      <h1>Welcome to my page, &nbsp;leave a message!</h1>
      <div className={classes.di}>
        <List className={classes.root}>
          <ListItem>
            <FormControl className={classes.formControl}>
              <TextField
                error={!validateName(name)}
                id="name"
                placeholder="your name"
                label=""
                onChange={(event) => setName(event.target.value)}
                margin="normal"
                variant="outlined"
              />
              <FormHelperText>What's your name?(required)</FormHelperText>
            </FormControl>
          </ListItem>
          <ListItem>
            <FormControl className={classes.formControl}>
              <TextField
                error={!validateDescription(description)}
                id="description"
                placeholder="Describe yourself!"
                label=""
                onChange={(event) => setDescription(event.target.value)}
                margin="normal"
                variant="outlined"
              />
              <FormHelperText>Tell me something about yourself!</FormHelperText>
            </FormControl>
          </ListItem>
          <ListItem>
            <FormControl className={classes.formControl}>
              <TextField
                error={!validateMessage(message)}
                id="message"
                placeholder="your message"
                onChange={(event) => setMessage(event.target.value)}
                margin="normal"
                variant="outlined"
              />
              <FormHelperText margin="dense">
                What have you to say? (required)
              </FormHelperText>
            </FormControl>
          </ListItem>
          <ListItem>
            <FormControl className={classes.formControl}>
              <NativeSelect
                onChange={(event) => setViewable(event.target.value)}
                inputProps={{
                  name: "age",
                  id: "age-native-helper",
                }}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </NativeSelect>
              <FormHelperText>
                Do you want your message to be public?
              </FormHelperText>
            </FormControl>
          </ListItem>
          <ListItem>
            <FormControl className={classes.formControl}>
              <TextField
                id="email"
                error={!validateEmail(contact)}
                label=""
                onChange={(event) => setContact(event.target.value)}
                margin="normal"
                variant="outlined"
              />
              <FormHelperText>
                What's your email?(won't be posted)
              </FormHelperText>
            </FormControl>
          </ListItem>
          <ListItem>
            <Button
              color="primary"
              variant="contained"
              className={classes.button}
              onClick={validateNext}
            >
              Submit
            </Button>
          </ListItem>
        </List>
        <hr class="solid"></hr>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={open}
          onClose={() => setOpen(false)}
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          message={
            <span id="message-id">Please Review Form Before Proceeding</span>
          }
        />
      </div>
    </div>
  );
}
