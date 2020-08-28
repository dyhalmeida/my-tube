import React from 'react';
import './assets/global.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import SearchBar from './components/SearchBar';
import VideoPlayer from './components/VideoPlayer';
import VideoList from './components/VideoList';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <SearchBar/>
        <VideoPlayer/>
        <VideoList/>
      </div>
    </Provider>
  );
}

export default App;