import React, { useContext, useEffect } from 'react';
import { useMedia } from 'react-use-media';

import Sidebar from './Sidebar';
import Content from './Content';

/* We need data from our context at this layer so that we can toggle the sidenav */
import { AppContext } from "./AppContext";

/* Application Wide Styles */
import 'bootstrap-4-grid/css/grid.min.css';

const Wrapper = () => {
  const isMd = useMedia("(min-width: 768px)") ? true : false;
  const ctx = useContext(AppContext);
  const wrapperCSS = `wrapper ${isMd ? 'md' : 'sm'} ${ctx.navOpen ? 'open' : 'closed'}`;

  useEffect(() => {
    let setNavClose = isMd && ctx.navCloseMd && ctx.navOpen;
    if (setNavClose) { ctx.toggleSidenav(false); }
  });

  return (
    <div className={wrapperCSS}>
      <Sidebar />
      <Content />
    </div>
  )
}

export default Wrapper;