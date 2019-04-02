import React from 'react';
import MasonryLayout from './MasonryLayout';

const Destinations = () => {
  document.title = `TripXpert Destinations`;
  return (
    <div className="main-content">
      <div className="text-center">
        <h3 className="title">Available Destinations</h3>
      </div>
      <div>
        <MasonryLayout columns={3} gap={25}>
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