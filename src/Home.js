import React, { Component } from "react";
import "./Home.css";
// import MovieList from "./MovieList";
import fetchMovies from "./utils/api";
import PropTypes from "prop-types";

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: "",
      movieActors: "",
      movieRating: "",
      movieRuntime: "",
      movieGenre: "",
      movieScore: "",
      moviePlot: "",
    };
  }
  componentDidMount() {
    fetchMovies()
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          movieTitle: res.Title,
          movieActors: res.Actors,
          movieRating: res.Rated,
          moviePoster: res.Poster,
          movieRuntime: res.Runtime,
          movieGenre: res.Genre,
          movieScore: res.imdbRating,
          moviePlot: res.Plot,
        })
      )
      .catch((err) => console.log("err"));
  }

  render() {
    return (
      <div className="movie-wrapper">
        <img src={this.state.moviePoster}></img>
        <div className="movie-data-wrapper">
          <div className="title-wrapper">
            <h1 className="movie-title"> {this.state.movieTitle}</h1>
            <h2 className="movie-title" style={{ color: "blue" }}>
              {" "}
              {this.state.movieScore}
            </h2>
          </div>
          <div className="bubble-wrapper">
            <p className="infoBubbles"> {this.state.movieRating} </p>

            <p className="infoBubbles"> {this.state.movieRuntime} </p>
            <p className="infoBubbles" style={{ width: "150px" }}>
              {" "}
              {this.state.movieGenre}{" "}
            </p>
          </div>
          <div className="info-wrapper">
            <h4>Plot</h4>
            <p> {this.state.moviePlot} </p>
            <h4>Actors</h4>
            <p> {this.state.movieActors} </p>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  greeting: PropTypes.string,
};

MovieDetails.defaultProps = {
  greeting: "Hello World",
};

export default MovieDetails;

// const movie = fetchMovies()
// .then((res) => res.json())
// .then((res) => console.log("Result: ", res))
// .catch((err) => console.error(err));
