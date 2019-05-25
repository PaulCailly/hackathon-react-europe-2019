import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import Leaflet from "leaflet";
import { Map, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import "./destination.css";
import { Calendar } from "@progress/kendo-react-dateinputs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { listOffers } from "../../src/graphql/queries";
const Destination = ({ location, name, description, price, img }) => {
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

  {
  }

  const [selected, setSelected] = useState(0);

  const handleSelect = ({ selected }) => {
    setSelected(selected);
  };

  return (
    <div className="destination">
      {offers.map(offer => {
        const img = offer.img.split("/").filter(v => v !== ".");
        return (
          location.pathname.split("/")[2] === offer.id && (
            <>
              <div
                style={{
                  height: 500,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundImage: `url('http://localhost:8080/${img.join(
                    "/"
                  )}')`
                }}
              />
              <div className="summary container">
                <div className="destinationTitle">{offer.name}</div>
                <div className="destinationDescription">
                  {offer.description}
                </div>
                <div className="separator" />
                <div>Price from ${offer.price} for 5 days</div>
                <div className="links">
                  <span>View full price info</span>
                  <span>View availbale dates</span>
                </div>
                <div className="calendar">
                  <Calendar />
                </div>
                <TabStrip
                  style={{ border: 0 }}
                  selected={selected}
                  onSelect={handleSelect}
                >
                  <TabStripTab
                    title={
                      <div>
                        <FontAwesomeIcon
                          style={{
                            marginRight: ".5rem",
                            width: "1em",
                            height: "1em",
                            display: "inline-block",
                            verticalAlign: "text-top"
                          }}
                          icon={["fas", "info-circle"]}
                        />
                        Overview
                      </div>
                    }
                  >
                    <div className="tab">
                      <div className="contentWrapper">
                        <div className="content">
                          {offer.name} is an excellent place to discover
                          world-class arts and culture. Bullfighting was
                          officially banned several years ago, but the city
                          remains rich with festivals and events. The sights in
                          Barcelona are second to none. Don’t miss the
                          architectural wonder, Casa Mila—otherwise known as La
                          Pedrera. It’s a modernist apartment building that
                          looks like something out of an expressionist painting.
                          Make your way up to the roof for more architectural
                          surprises. And if you like Casa Mila, you’ll want to
                          see another one of Antoni Gaudi’s architectural
                          masterpieces, Casa Batllo, which is located at the
                          center of Barcelona. Tenerife, one of the nearby
                          Canary Islands, is the perfect escape once you’ve had
                          your fill of the city. In Los Gigantes, life revolves
                          around the marina. Take a boat out in search of
                          bottlenose dolphins and whales. For the able-bodied
                          visitor, take a climb up “Cardiac Hill” to get a
                          breathtaking view—and workout. While you’re in
                          Tenerife, visit Mount Teide. It’s the highest point in
                          Spain and the third-largest volcano in the world.
                        </div>
                        <div className="side-content">
                          <p>
                            We enjoyed a marvelous stay at this location. Very
                            warm welcome, extremely kind and helpful hostess.
                            Also a perfect place for scuba diving. All the
                            family can enjoy the marvels of the under water
                            world. For sure, we'll come back!
                          </p>
                          <p>- Samuel Elms, London.</p>
                        </div>
                      </div>
                    </div>
                  </TabStripTab>
                  <TabStripTab title={<div>Attraction</div>}>
                    <div className="tab">x</div>
                  </TabStripTab>
                  <TabStripTab title={<div>Enquery Form</div>}>
                    <div className="tab">x</div>
                  </TabStripTab>
                </TabStrip>
              </div>
            </>
          )
        );
      })}
    </div>
  );
};

export default Destination;
