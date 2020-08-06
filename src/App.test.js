import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { fetchData } from './store/actions/';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Episode from './components/episode/Episode';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import MediaContainer from './components/media-container/MediaContainer';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const FETCH_SERIES_DATA = 'FETCH_SERIES_DATA';
const FETCH_SERIES_SUCCESS = 'FETCH_SERIES_SUCCESS';

describe('test api calls & main render element', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  // Prepare
  const initState = {
    isLoading: true,
    show: {},
    episodes: []
  }

  fetchMock.getOnce('http://api.tvmaze.com/shows/6771', {
    body: { payload: undefined },
    headers: { 'content-type': 'application/json' }
  })

  fetchMock.getOnce('http://api.tvmaze.com/shows/6771/episodes', {
    body: { payload: undefined },
    headers: { 'content-type': 'application/json' }
  })

  it('mock store reducer and action creators', () => {
    const expectedActions = [
      { type: FETCH_SERIES_DATA },
      { type: FETCH_SERIES_SUCCESS, payload: { key: 'foo', payload: {} } }
    ]
    const store = mockStore(initState);

    store.dispatch(fetchData('shows/6771', 'foo'))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });

  });

  it('test for loading text and className name', () => {
    const store = mockStore({ ...initState, media: { isLoading: true, show: {} } });
    const { getByText } = render(<Provider store={store}><MediaContainer /></Provider>);

    const linkElement = getByText(/Loading.../i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveClass('light-text');
  });

  it('test episode route link', () => {
    const episode = {
      id: 1,
      number: 1,
      name: 'foobar',
      airdate: '2020'
    };

    const getByText = render (<Router><Episode episode={episode}></Episode></Router>);
    expect(document.querySelector("a").getAttribute("href")).toBe('/episode/1')
  });

})
