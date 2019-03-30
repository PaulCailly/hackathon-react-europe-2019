import React, { useContext } from 'react';
import { useMedia } from 'react-use-media';

import Sidebar from './Sidebar';
import Content from './Content';

/* We need data from our context at this layer so that we can toggle the sidenav */
import { AppContext } from "./AppContext";

const Wrapper = () => {
  // We add the check for MediumPlus at the App level and we append it to the class: `app-conainter`
  const isMediumPlus = useMedia("(min-width: 600px)") ? true : false;
  const context = useContext(AppContext);

  return (
    <div className={`wrapper 
      ${isMediumPlus  ? 'md' : 'sm'} 
      ${context.navOpen ? 'open' : 'closed'}`
    }>

      <Sidebar />
      <Content />

    </div>
  )
}

export default Wrapper;