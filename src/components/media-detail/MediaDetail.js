import React, { useEffect  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../store/actions';
import { useParams, useHistory, useLocation } from 'react-router-dom';

import './MediaDetail.scss';

function MediaDetail() {
  const dispatch = useDispatch();
  const { episodeId } = useParams();
  let history = useHistory();
  let location = useLocation();

  let data = useSelector(state => state);
  let { isLoading } = data.media;

  useEffect(() => {
    dispatch(fetchData(`episodes/${episodeId}`, 'details'));
  },[location, dispatch]);

  function handleClick() {
    history.push("/");
  }

  if (!isLoading && data.media.details) {
    let { details } = data.media;
    return <div>
      <button type="button" className="back-link" onClick={handleClick}>Back</button>
      <div className="sub-page">
        <div className="item-list-container">
          <div className="item">
            <div>
              <img src={details.payload.image.medium} alt="episode" />
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
  } else {
    return <p className="light-text">Loading...</p>;
  }
}

export default MediaDetail;