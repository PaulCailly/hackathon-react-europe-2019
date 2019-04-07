import React from 'react';
import MasonryLayout from './MasonryLayout';
import { useMedia } from 'react-use-media';

const Destinations = () => {
  document.title = `TripXpert Destinations`;
  const isMd = useMedia("(min-width: 768px)") ? true : false;

  return (
    <>
      <div className="content-description text-center">
        <h3 className="title">Available Destinations</h3>
      </div>
      <div className="masonry-grid">
        <MasonryLayout columns={isMd ? 3 : 2} gap={isMd ? 32 : 24}>
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
    </>
  )
}

export default Destinations;