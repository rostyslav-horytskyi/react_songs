import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  renderList() {
    const { songs } = this.props;

    return songs.map(song => (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button className="ui button primary">
            Select
          </button>
        </div>

        <div className="content">
          {song.title}
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="ui devided list">{this.renderList()}</div>
    );
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);