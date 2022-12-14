import React, { Component } from "react";
import { graphql } from "react-apollo";
import getSong from "../queries/getSong";
import { Link } from "react-router";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";
class SongDetail extends Component {
  render() {
    const { song, loading } = this.props.data;

    if (loading || !song) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={song.id} />
      </div>
    );
  }
}

export default graphql(getSong, {
  options: (props) => {
    return { variables: { id: props.params.id } };
  },
})(SongDetail);

// mutations we call manually
// queries are called automatically by graphql
