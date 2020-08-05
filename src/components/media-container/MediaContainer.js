import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchData } from '../../store/actions/actions';

import './MediaContainer.scss';

class MediaContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getData();
  }

  render () {
    let loaderItem, mediaItem;
    let { data, isLoading } = this.props;
    let item = { ...data.data };

    if (isLoading) {
      loaderItem = <p className="light-text">Loading...</p>;
    } else if (!isLoading) {
      mediaItem =
      <Link to={() => `media/${item.id}`} className="link">
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
              <div className="badge">{genre}</div>
            ))}
    
          </div>
        </div>
      </Link>
    }

    return (
      <div className="item-list-container">
        {loaderItem}
        {mediaItem}
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
    getData: () => dispatch(fetchData(`shows/${MEDIA_ID}`))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaContainer);