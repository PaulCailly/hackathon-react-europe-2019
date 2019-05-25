import React, { useState, useEffect } from "react";
import MasonryLayout from "./MasonryLayout";
import { useMedia } from "react-use-media";
import Card from "./Card";

import { API, graphqlOperation } from "aws-amplify";

import { listOffers } from "./../../src/graphql/queries";

const Destinations = () => {
  const [offers, updateOffers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const offerData = await API.graphql(graphqlOperation(listOffers));
      updateOffers(offerData.data.listOffers.items);
    } catch (err) {
      console.log("error fetching data..", err);
    }
  }

  document.title = `TripXpert Destinations`;
  const isMd = useMedia("(min-width: 768px)") ? true : false;

  return (
    <>
      <div className="content-description text-center">
        <h3 className="title">Available Destinations</h3>
      </div>
      <div className="masonry-grid">
        <MasonryLayout columns={isMd ? 3 : 2} gap={isMd ? 32 : 24}>
          {offers.map((offer, index) => (
            <Card
              key={offer.id}
              id={offer.id}
              img={offer.img}
              name={offer.name}
              description={offer.description}
              price={offer.price}
              link={offer.link}
            />
          ))}
        </MasonryLayout>
      </div>
    </>
  );
};

export default Destinations;
