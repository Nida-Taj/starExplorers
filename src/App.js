import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Packages from './Packages'; 
import PackageDetails from './PackageDetails';
import Amenities from './Amenities';
import Forum from './Forum';
import ReviewForm from './ReviewForm';
import book from './book'; 

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
      <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/packages" component={Packages} />
            <Route path="/packages/:title" component={PackageDetails} />
            <Route path="/amenities" component={Amenities} />
            <Route path="/forum" component={Forum} />
            <Route path="/review" component={ReviewForm} />
            <Route path="/book" component={book} /> 
          </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
