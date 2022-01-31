import './App.css';
import Nav from './Nav'
import About from './About'
import Shop from './Shop'
import itemDetails from './itemDetails';
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom'

const Home = () => {
  <div>
    <h1>Home Page</h1>
  </div>
}

function App() {
  // return (
  //   <Router>
  //     <div className="App">
  //       <Nav />
  //         <Routes>
  //           <Route path="/" component={Home}/>
  //           <Route path="/about" element={<About />}/>
  //           <Route path="/shop" exact element={<Shop />}/>
  //           <Route path="/shop/:id" element={<itemDetails/>}/>
  //         </Routes>
  //     </div>
  //   </Router>
  // );

  return (
    <Routes>
      <div className="App">
        Hello World
      </div>
      <Nav />
      <Route path="about" component={About}/>
      <Route path="shop" component={Shop}/>
    </Routes>
  );
}

export default App;
