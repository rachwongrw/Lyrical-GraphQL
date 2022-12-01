import React, { Component } from "react";
import { Link } from "react-router";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import query from "../queries/fetchSongs";
class SongList extends Component {
  onSongDelete(id) {
    this.props
      .mutate({ variables: { id } })
      .then(() => this.props.data.refetch());
  }

  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => (
      <li className="collection-item" key={id} id={id}>
        {title}
        <i onClick={() => this.onSongDelete(id)} className="material-icons">
          delete
        </i>
      </li>
    ));
  }

  render() {
    if (!this.props.data.songs) {
      return <div />;
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

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(query)(SongList));
// ^ how we can add multiple queries to one component

// similar syntax to Redux. graphql(query) returns a fn which is immediately called by the second parentheses, (SongList).
// The query is rendered when the component is rendered. Once query is complete, the component is rerendered

// export default graphql(query)(SongList);
// ^ this method can only take one query for one component
