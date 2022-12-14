import React, { Component } from "react";

class LyricList extends Component {
  renderLyrics() {
    if (this.props.lyrics) {
      return this.props.lyrics.map(({ id, content }) => (
        <li key={id} className="collection-item">
          {content}
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

export default LyricList;
