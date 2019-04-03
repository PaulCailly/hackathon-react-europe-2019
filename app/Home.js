import React from 'react';

const Home = () => {
  document.title = `TripXpert Home`;
  return (
    <div className="home">
      <div className="bootstrap-wrapper">
        <h1>Find the best destinations all around the world</h1>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h2>Six at Medium Twelve at Small</h2>
          </div>
          <div className="col-sm-12 col-md-6">
            <h2>Six at Medium Twelve at Small</h2>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h3 className="title">Tripxpert Recomends</h3>
        <p className="text-muted text-italic">Explore top destinations and attractions</p>
      </div>
    </div>
  )
}

export default Home;