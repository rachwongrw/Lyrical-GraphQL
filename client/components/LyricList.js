import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { optimistic } from "apollo-client/optimistic-data/store";

class LyricList extends Component {
  onLike(id, likes) {
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id: id,
          __typename: "LyricType",
          likes: likes + 1,
        },
      },
    });
  }

  renderLyrics() {
    if (this.props.lyrics) {
      return this.props.lyrics.map(({ id, content, likes }) => (
        <li key={id} className="collection-item">
          {content}
          <span className="vote-box">
            <i
              className="material-icons"
              onClick={() => this.onLike(id, likes)}
            >
              thumb_up
            </i>
            {likes}
          </span>
        </li>
      ));
    } else {
      <li className="collection-item">No lyrics</li>;
    }
  }

  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);
