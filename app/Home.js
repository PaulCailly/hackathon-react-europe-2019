import React from 'react';
import MasonryLayout from './MasonryLayout';
import { useMedia } from 'react-use-media';

const Home = () => {
  document.title = `TripXpert Home`;
  const isMd = useMedia("(min-width: 768px)") ? true : false;

  return (
    <>
      <div className="home-header-container">
        <div className="header-centered">

          <h1>Find the best destinations all around the world</h1>

          <div className="tx-search-sm">
            <h2>search box only</h2>
          </div>

          <div className="tx-search-md">
            <div className="row">
              <div className="col-3">
                <h2>offer type</h2>
              </div>
              <div className="col-3">
                <h2>price</h2>
              </div>
              <div className="col-4">
                <h2>destination</h2>
              </div>
              <div className="col-2">
                <h2>search</h2>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="content-description text-center">
        <h3 className="title">Tripxpert Recomends</h3>
        <p className="text-muted text-italic">Explore top destinations and attractions</p>
      </div>
      <div className="masonry-grid">
        <MasonryLayout columns={isMd ? 3 : 2} gap={isMd ? 32 : 24}>
          {[...Array(6).keys()].map(
            (key, idx) =>
              <div alt={`${key} ${idx}`} style={{ height: `200px` }} />
          )}
        </MasonryLayout>
      </div>
    </>
  )
}

export default Home;