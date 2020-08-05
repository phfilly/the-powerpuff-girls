import React, { useEffect  } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../store/actions/actions';
import { useParams, useLocation } from 'react-router-dom'

import './MediaDetail.scss';

function MediaDetail() {
  const { id } = useParams();
  const location = useLocation();

  const dispatch = useDispatch();

  let data = useSelector(state => state);
  let { isLoading } = data.media;

  useEffect(() => {
    if (!isLoading) {
      dispatch(fetchData(`episodes/${id}`, 'details'));
    }
  });

  console.log(isLoading);

  if (isLoading) {
    return <p className="light-text">Loading...</p>;
  } else if (!isLoading) {
    let { details } = data.media;
    return <div>
      <Link to="/" className="back-link">Back</Link>
      <div className="sub-page">
        <div className="item-list-container">
          <div className="item">
            <div>
              <img src={details.payload.image.medium} alt="episode-image" />
            </div>
            <div>
              <h3 className="title">
                {details.payload.name}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: details.payload.summary }}></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default MediaDetail;