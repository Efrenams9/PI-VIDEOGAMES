// import { Routes, Route,useLocation } from 'react-router-dom';

// import './App.css';
// import ReadyPlayer40mb from './videos/ReadyPlayer40mb.mp4';
// import NavBar from './components/NavBar/NavBar';
// import About from './components/About/About';
// import Home from './components/Home/Home';
// import LandingPage from './components/LandingPage/Landingpage';
// // import Cards from './components/Cards/Cards';

// function App() {

//   const {pathname}= useLocation();



//   return (
//     <div className="App">
//       <video autoPlay muted loop id="background-video">
//         <source src={ReadyPlayer40mb} type='video/mp4'></source>
//       </video >
//       <h1></h1>

//       {pathname !=="/" && <NavBar />}

//         <Routes>
//           <Route path="/" element={<LandingPage></LandingPage>}></Route>
//           <Route path="/home" element={<Home></Home>}></Route>
//           <Route path="/about" element={<About></About>}></Route>
//           {/* <Route path='/' element={}></Route> */}
//         </Routes>
      
//     </div>
//   );
// }

// export default App;

//////////////////////////////////////////////////////////////////////////////
// import { Routes, Route, useLocation } from 'react-router-dom';
// import './App.css';
// import ReadyPlayer40mb from './videos/ReadyPlayer40mb.mp4';
// import NavBar from './components/NavBar/NavBar';
// import About from './components/About/About';
// import Home from './components/Home/Home';
// import LandingPage from './components/LandingPage/Landingpage';

// function App() {
//   const { pathname } = useLocation();

//   return (
//     <div className="App">
//       <video autoPlay muted loop id="background-video">
//         <source src={ReadyPlayer40mb} type="video/mp4"></source>
//       </video>
//       <h1></h1>

//       {pathname !== '/' && <NavBar />}

//       <Routes>
//         <Route path="/" element={<LandingPage />}></Route>
//         <Route path="/home" element={<Home />}></Route>
//         <Route path="/about" element={<About />}></Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;

import  { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import ReadyPlayer40mb from './videos/ReadyPlayer40mb.mp4';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/Landingpage';

function App() {
  const { pathname } = useLocation();
  const [videoGames, setVideoGames] = useState([]);

  return (
    <div className="App">
      <video autoPlay muted loop id="background-video">
        <source src={ReadyPlayer40mb} type="video/mp4"></source>
      </video>
      <h1></h1>

      {pathname !== '/' && <NavBar />}

      <Routes>
        <Route
          path="/"
          element={<LandingPage setVideoGames={setVideoGames} />}
        ></Route>
        <Route
          path="/home"
          element={<Home videoGames={videoGames} setVideoGames={setVideoGames} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;

