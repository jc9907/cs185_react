import React, { Component } from "react";

import Movie from "./movie.jsx";
import GridList from "@material-ui/core/GridList";
import Modal from "@material-ui/core/Modal";

function rootStyle() {
  return {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  };
}
function GridListStyle() {
  return {
    width: "95%",
    height: 650,
    position: "fixed",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  };
}
function info() {
  return {
    width: "auto",
    height: "auto",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: "23%",
    paddingLeft: "10px",
    paddingRight: "10px",
    lineHeight: "200%",
    backgroundColor: "#c3cfe2",
  };
}
function getModalStyle() {
  return {
    top: "20%",
    left: "20%",
    backgroundColor: "transparent",
    position: "absolute",
    display: "flex",
  };
}

const movies = [
  {
    key: "0",
    id: "tt6751668",
  },
  {
    key: "1",
    id: "tt4154796",
  },
  {
    key: "2",
    id: "tt0816692",
  },
  {
    key: "3",
    id: "tt1375666",
  },
  {
    key: "4",
    id: "tt0118799",
  },
  {
    key: "5",
    id: "tt0111161",
  },
  {
    key: "6",
    id: "tt7286456",
  },
  {
    key: "7",
    id: "tt0298203",
  },
];

export default class MovieGallery extends Component {
  constructor() {
    super();
    this.state = {
      moviePoster: "",
      open: false,
      key: 1,
    };
    this.changeMoviePoster = (data) => {
      this.setState({
        moviePoster: data,
      });
    };
    this.changeKey = (k) => {
      this.setState({
        key: k,
      });
    };
    this.setOpen = (o) => {
      this.setState({
        open: o,
      });
    };
  }

  render() {
    return (
      <div style={rootStyle()}>
        <GridList cellHeight={150} spacing={1} style={GridListStyle()}>
          {Object.values(movies).map((movie) => (
            <Movie
              movieid={movie.id}
              indexKey={movie.key}
              changeIndexKey={this.changeKey}
              setOpen={this.setOpen}
              changeMoviePoster={this.changeMoviePoster}
            />
          ))}
        </GridList>
        <Modal
          open={this.state.open}
          onClose={() => {
            this.setOpen(false);
          }}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {
            <div style={getModalStyle()}>
              <div style={info()}>
                <h7>
                  Title: {this.state.moviePoster.Title} <br />
                  Director: {this.state.moviePoster.Director} <br />
                  Genre: {this.state.moviePoster.Genre}
                  <br />
                  imdbRating: {this.state.moviePoster.imdbRating}
                </h7>
              </div>
              <img
                src={this.state.moviePoster.Poster}
                height={"auto"}
                alt={"poster"}
              />
            </div>
          }
        </Modal>
      </div>
    );
  }
}
