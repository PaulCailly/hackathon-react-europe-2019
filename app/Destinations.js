import React from 'react';
import MasonryLayout from './MasonryLayout';
import { useMedia } from 'react-use-media';

const Destinations = () => {
  document.title = `TripXpert Destinations`;
  const isMd = useMedia("(min-width: 600px)") ? true : false;

  return (
    <div className="main-content">
      <div className="text-center">
        <h3 className="title">Available Destinations</h3>
      </div>
      <div>
        <MasonryLayout columns={isMd ? 3 : 2} gap={isMd ? 25 : 15}>
          {
            [...Array(9).keys()].map(key => {
              const height = 200 + Math.random() * 200;
              return (
                <div key={key} style={{ height: `${height}px` }} />
              )
            })
          }
        </MasonryLayout>
      </div>
    </div>
  )
}

export default Destinations;