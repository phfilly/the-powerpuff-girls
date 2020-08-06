import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchData } from '../../store/actions';
import store from '../../store/store';
import EpisodeList from '../episode-list/EpisodeList';

import './MediaContainer.scss';

class MediaContainer extends Component {

  constructor(props) {
    super(props);

    const hasData = store.getState().media.show;
    if (!hasData.key) {
      this.props.getData();
      this.props.getEpisodes();
    }
  }

  render () {
    let loaderItem, mediaItem;
    let { data, isLoading } = this.props;
    let item = { ...data.show.payload };

    if (isLoading) {
      loaderItem = <p className="light-text">Loading...</p>;
    } else if (!isLoading) {
      mediaItem =
      <div>
          <div className="item">
            <div>
              <img src={item.image.medium} alt="media-title" />
            </div>
            <div>
              <h3 className="title">
                <div className="rating">{item.rating.average}</div> {item.name}
                <br/>
                <small className="light-text">Premiered: {item.premiered}</small>
              </h3>
      
              <p dangerouslySetInnerHTML={{ __html: item.summary }}></p>
              {item.genres.map((genre, i) => (
                <div className="badge" key={i}>{genre}</div>
              ))}
      
            </div>
          </div>
      </div>
    }

    return (
      <div className="item-list-container">
        {loaderItem}
        {mediaItem}
        {data.episodes ? data.episodes.payload ? <EpisodeList episodes={data.episodes.payload}></EpisodeList> : <p className="light-text">Loading episodes... </p> : ''}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    data: state.media,
    isLoading: state.media.isLoading
  }
};

const mapDispatchToProps = dispatch => {
  const MEDIA_ID = 6771;

  return {
    getData: () => dispatch(fetchData(`shows/${MEDIA_ID}`, 'show')),
    getEpisodes: () => dispatch(fetchData(`shows/${MEDIA_ID}/episodes`, 'episodes'))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaContainer);