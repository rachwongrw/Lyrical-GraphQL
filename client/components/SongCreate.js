import React, { Component } from "react";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  render() {
    return (
      <div>
        <h3>Create a new song</h3>
        <form>
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

export default SongCreate;

//export const SongCreate = () => {
// NOTE: Cannot use React hooks as project is using v^15.4.2, hooks did not come in until v16.8
// NOTE (^) means that we can accept minor releases and patch releases, but not a major release when updating our package

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
