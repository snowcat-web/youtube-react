import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Toolbar from './components/Toolbar/Toolbar';
import SideNav from './components/SideNav/sideNav';
import Backdrop from './components/Backdrop/Backdrop';
import YTSearch from 'youtube-api-search';
import VideoList from './components/Video/VideoList';
//const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = 'AIzaSyB-YiVwk4DoZ-K4NjLcayTWYG7OGZZ9DxE';

const App = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [videos, setVideos] = useState([]);
  const [sldVideo, setSldVideo] = useState(null);

  useEffect(() => {
    fetchResource('cat');
  }, [])

  const fetchResource = async (item) => {
    await YTSearch({key: API_KEY, term: item, params: {maxResults:20}}, (data) => {
        console.log(data);
        setVideos(data);
    });
}

  var sideNavOpenHandler = () => {
    setSideNavOpen(!sideNavOpen);
    return false;
  };

  var sideNavCloseHandler = () => {
    setSideNavOpen(false);
  }

  var sideNav = null;
  var backdrop = null;

  if(sideNavOpen){
    // sideNav = <SideNav />;
    backdrop = <Backdrop click={sideNavCloseHandler}/>;
  }

  return (
    <div style={{ height: "100%" }}>
      <Toolbar sideNavOpenHandler = {sideNavOpenHandler}/>
      <SideNav show={sideNavOpen}/>
      {backdrop}
      <VideoList onVideoSelect={selected => setSldVideo(selected)} videos={videos} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
