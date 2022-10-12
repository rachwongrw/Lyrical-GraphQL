import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const SongList = (props) => {
  const { songs, loading } = props.data;
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="collection">
      {songs.map((song) => (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      ))}
    </div>
  );
};

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
// similar syntax to Redux. graphql(query) returns a fn which is immediately called by the second parentheses, (SongList).
// The query is rendered when the component is rendered. Once query is complete, the component is rerendered
