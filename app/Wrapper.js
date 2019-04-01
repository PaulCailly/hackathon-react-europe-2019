import React, { useContext, useEffect } from 'react';
import { useMedia } from 'react-use-media';

import Sidebar from './Sidebar';
import Content from './Content';

/* We need data from our context at this layer so that we can toggle the sidenav */
import { AppContext } from "./AppContext";

const Wrapper = () => {
  const isMd = useMedia("(min-width: 600px)") ? true : false;
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