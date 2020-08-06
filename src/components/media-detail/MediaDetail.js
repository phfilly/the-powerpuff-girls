import React, { useEffect  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../store/actions';
import { useParams, useHistory } from 'react-router-dom';

import './MediaDetail.scss';

function MediaDetail() {
  const dispatch = useDispatch();
  const { episodeId } = useParams();
  let history = useHistory();

  let { media } = useSelector(state => state);
  let { isLoading } = media;

  useEffect(() => {
    dispatch(fetchData(`episodes/${episodeId}`, 'details'));
  },[episodeId, dispatch]);

  function handleClick() {
    history.push("/");
  }

  if (!isLoading && media.details) {
    let { details } = media;
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
                {details.payload.number}. {details.payload.name}
                <small className="light-text float-right">Premiered: {details.payload.airdate}</small>
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