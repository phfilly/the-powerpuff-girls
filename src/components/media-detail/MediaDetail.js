import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MediaDetail.scss';

class MediaDetail extends Component {

  render() {
    // const data = useSelector(state => state.data);
    // console.log('from store', data);

    return <div>
        <Link to="/" className="back-link">Back</Link>
        <div class="sub-page">
          <h1>Episode: </h1>
          <p>Summary</p>
        </div>
      </div>
  }
}

export default MediaDetail;