import React from 'react';
import MasonryLayout from './MasonryLayout';
import { useMedia } from 'react-use-media';

/* KendoReact Components and CSS */
import { AutoComplete } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';

const Home = () => {
  document.title = `TripXpert Home`;
  const isMd = useMedia("(min-width: 768px)") ? true : false;
  const offerOptions = [ "All Types", "Special Offers", "Regular Offers" ];
  const priceOptions = [ "$0 to $999", "$1000 to $1999", "$2000 to $2999" ];
  const destinations = [ "Barcelona", "United States", "Malta", "Italy" ];

  return (
    <>
      <div className="home-header-container">
        <div className="header-centered">

          <h1>Find the best destinations all around the world</h1>

          <div className="tx-search-sm">
            <h2>search box only</h2>
          </div>

          <div className="tx-search-md">
            <div className="row no-gutters">
              <div className="col-2">
                <AutoComplete data={offerOptions} placeholder="Offer Type" />
              </div>
              <div className="col-3">
                <AutoComplete data={priceOptions} placeholder="Price Range" />
              </div>
              <div className="col-5">
                <AutoComplete data={destinations} placeholder="Destinations" />
              </div>
              <div className="col-2">
                <Button primary={true}>Search</Button>
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
            (key) => <div key={`${key}`} style={{height: `200px`}} />
          )}
        </MasonryLayout>
      </div>
    </>
  )
}

export default Home;