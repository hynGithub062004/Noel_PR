import './App.css';
import Banner from './page/Banner.js';
import Dichvu from './page/Dichvu.js';
import Footer from './page/Footer.js';
import Gioi_thieu from './page/Gioi_thieu.js';
import HoatDong from './page/HoatDong.js';
import Home from './page/Home.js' 
import Li_do from './page/Li_do.js';
import Timeline from './page/Timeline.js';
function App() {
  return (
    <div className="App">
       <Home />
       <Banner />
       <Gioi_thieu />
       <Li_do />
       <Dichvu />
       <Timeline />
       <HoatDong />
       <Footer />
    </div>
  );
}

export default App;
