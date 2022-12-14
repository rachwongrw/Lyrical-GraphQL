import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";
import fetchSongs from "../queries/fetchSongs";
class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props
      .mutate({
        variables: {
          title: this.state.title,
        },
        refetchQueries: [{ query: fetchSongs }],
      })
      .then(() => {
        hashHistory.push("/");
      });
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a new song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input
            type={"text"}
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

// wrapping React component with graphql, specifying the query (mutation) used
export default graphql(mutation)(SongCreate);

// NOTE: Cannot use React hooks as project is using v^15.4.2, hooks did not come in until v16.8
// NOTE (^) means that we can accept minor releases and patch releases, but not a major release when updating our package

//export const SongCreate = () => {
// const [songTitle, setSongTitle] = React.useState("");

//   return (
//     <div>
//       <h3>Create a new song</h3>
//       <form>
//         <label>Song Title:</label>
//         {/* <input
//           type={"text"}
//           value={songTitle}
//           onChange={(e) => setSongTitle(e.target.value)}
//         /> */}
//       </form>
//     </div>
//   );
// };
