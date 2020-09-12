import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../episode-list/EpisodeList.scss';

class Episode extends Component {

  render() {
    const { episode } = this.props;

    return (
        <Link to={() => `episode/${episode.id}`} className="link">
            <div className="episode">
                <div>{episode.number}. {episode.name}</div>
                <div>{episode.airdate}</div>
            </div>
        </Link>
    )
  }


}

export default Episode;