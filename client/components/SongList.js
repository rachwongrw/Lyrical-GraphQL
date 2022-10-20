import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSongs from "../queries/fetchSongs";

class SongList extends Component {
  renderSongs() {
    const { songs } = this.props.data;

    if (songs) {
      return songs.map((song) => (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      ));
    }
    return <div>no songs</div>;
  }

  render() {
    if (this.props.loading) {
      return <div>...Loading...</div>;
    }

    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(fetchSongs)(SongList);
// similar syntax to Redux. graphql(query) returns a fn which is immediately called by the second parentheses, (SongList).
// The query is rendered when the component is rendered. Once query is complete, the component is rerendered
