import React, { Component } from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import Modal from "@material-ui/core/Modal";

import image1 from "../resources/image1.jpg";
import image2 from "../resources/image3.jpg";
import image3 from "../resources/image4.jpg";
import image4 from "../resources/image6.jpg";
import image5 from "../resources/image7.jpg";
import image6 from "../resources/image2.png";
import image7 from "../resources/image5.jpg";
import image8 from "../resources/image8.jpg";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    "margin-top": "10%",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1200,
    height: 650,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
  paper: {
    position: "relative",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const tileData = [
  { img: image1, title: "LA Sunset", author: "author", featured: false, id: 1 },
  {
    img: image2,
    title: "Shadow of Friends",
    author: "author",
    featured: false,
    id: 2,
  },
  {
    img: image3,
    title: "Laguna Beach",
    author: "author",
    featured: false,
    id: 3,
  },
  {
    img: image4,
    title: "Pink cloud",
    author: "author",
    featured: false,
    id: 4,
  },
  {
    img: image5,
    title: "Graduation",
    author: "author",
    featured: false,
    id: 5,
  },
  {
    img: image6,
    title: "Gaming Highlight",
    author: "author",
    featured: false,
    id: 6,
  },
  { img: image7, title: "Ice Bear", author: "author", featured: false, id: 7 },
  {
    img: image8,
    title: "GlockieBae",
    author: "author",
    featured: false,
    id: 8,
  },
];
function idtosrc(id) {
  var src = "";
  switch (id) {
    case 1:
      src = image1;
      break;
    case 2:
      src = image2;
      break;
    case 3:
      src = image3;
      break;
    case 4:
      src = image4;
      break;
    case 5:
      src = image5;
      break;
    case 6:
      src = image6;
      break;
    case 7:
      src = image7;
      break;
    case 8:
      src = image8;
      break;
  }
  console.log(src);
  return src;
}
export default function Images() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [imgKey, setImgKey] = React.useState(1);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={310}
        spacing={0.5}
        cols={4}
        rows={3}
        className={classes.gridList}
      >
        {tileData.map((tile) => (
          <GridListTile
            key={tile.img}
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 2 : 1}
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="bottom"
              actionIcon={
                <IconButton
                  aria-label={`full ${tile.title}`}
                  className={classes.icon}
                  onClick={() => {
                    setImgKey(tile.id);
                    handleOpen();
                  }}
                >
                  <FullscreenIcon />
                </IconButton>
              }
              actionPosition="right"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {
          <div style={modalStyle} className={classes.paper}>
            <img src={idtosrc(imgKey)} class="modal-content" />
          </div>
        }
      </Modal>
    </div>
  );
}
