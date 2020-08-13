import React, { Component } from 'react';
import Episode from '../episode/Episode';

import './EpisodeList.scss';

class EpisodeList extends Component {

  render() {
    const { episodes } = this.props;
    let seasonHeading = 0;

    return <div className="episode-container">
        <h2>Episode List</h2>
        {episodes.map((episode, i) => {
            if (episode.season !== seasonHeading) {
              seasonHeading = episode.season;
              return (
                <div className="season-header" key={i}>
                  <h3>Season {seasonHeading}</h3>
                  <Episode episode={episode}></Episode>
                </div>
              )
            }
            return <Episode episode={episode} key={i}></Episode>
          })
        }
    </div>
  }


}

export default EpisodeList;