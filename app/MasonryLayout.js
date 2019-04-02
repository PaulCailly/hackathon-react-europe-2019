import React from 'react';
import PropTypes from 'prop-types';

const MasonryLayout = props => {
  const columnWrapper = {};
  const result = [];

  // create columns
  for (let i = 0; i < props.columns; i++) {
    columnWrapper[`column${i}`] = [];
  }

  // divide children into columns
  for (let i = 0; i < props.children.length; i++) {
    const columnIndex = i % props.columns;
    columnWrapper[`column${columnIndex}`].push(
      <div style={{ marginBottom: `${props.gap}px`, backgroundColor: '#fff' }}>
        {props.children[i]}
      </div>
    );
  }

  for (let i = 0; i < props.columns; i++) {
    result.push(
      <div
        style={{
          marginLeft: `${i > 0 ? props.gap : 0}px`,
          flex: 1,
        }}>
        {columnWrapper[`column${i}`]}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex' }}>
      {result}
    </div>
  );

}

MasonryLayout.propTypes = {
  columns: PropTypes.number.isRequired,
  gap: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};
MasonryLayout.defaultProps = { columns: 2, gap: 20, };

export default MasonryLayout;

/*
  More information on this masonry layout component for React can be found here:
  https://medium.com/the-andela-way/how-to-create-a-masonry-layout-component-using-react-f30ec9ca5e99
  https://codepen.io/john555/pen/GYoyNd and https://masonry.desandro.com/layout.html
  as well https://imagesloaded.desandro.com/#webpack if we add images
*/