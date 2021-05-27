import React from "react";

class MovieList extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "lightblue", padding: "1rem 2.5rem" }}>
        {this.props.children}
      </div>
    );
  }
}

export default MovieList;
