import React from 'react';
import './assets/global.css';
import './App.css';

import SearchBar from './components/SearchBar';
import VideoPlayer from './components/VideoPlayer';
import VideoList from './components/VideoList';

function App() {
  return (
    <div className="container">
      <SearchBar/>
      <VideoPlayer/>
      <VideoList/>
    </div>
  );
}

export default App;