import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Destinations from './Destinations';
import Contact from './Contact';
import Map from './Map';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Destinations" component={Destinations} />
            <Route path="/Contact" render={(props) =>
              <>
                <Contact />
                <Map />
              </>
            } />
            <Route render={() => {
              return <h2 className="four-o-four">404 Page Not Found</h2>
            }}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;