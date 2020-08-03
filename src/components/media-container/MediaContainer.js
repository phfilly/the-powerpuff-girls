import React, { Component } from 'react';
import { fetchMedia } from '../../api/Api';
import { Link } from 'react-router-dom';
import { ReactComponent as Loader } from '../../assets/loading-indicator.svg';

import './MediaContainer.scss';

class MediaContainer extends Component {
  state = {
    item: [],
    isLoading: true,
    POWERPUFF_ID: 6771
  };

  async componentDidMount() {
    const data = await fetchMedia(this.state.POWERPUFF_ID);

    this.setState({ item: { ...data }, isLoading: false });
  }

  render() {
    const { item, isLoading } = this.state;
    let loader, mediaItem;

    console.log('data', item);

    if (isLoading) {
      loader = <Loader />;
    } else {
      mediaItem =
        <Link to={() => `media/${item.id}`} className="link">
          <div>
            <img src={item.image.medium} />
          </div>
          <div>
            <h3 className="title">{item.name}</h3>
          </div>
        </Link>
    }

    return (
      <div className="item-list-container">
        <div>{loader}</div>
        <div className="item">
          {mediaItem}
        </div>
      </div>
    )
  }
}

export default MediaContainer;