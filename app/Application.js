import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './Application.css';

/* In our App Component we just need to import the AppProvider */
/* useState, useContext, useMediaPredicate */
/* We need data from our context at this layer so that we can toggle the sidenav */
import { AppProvider } from "./AppContext";
import Wrapper from './Wrapper';

const Application = () => {
  // We could also put all of our state right here without a provider and pass down through props
  // This would be harder once it came to updating our state IMHO.

  return (
    <AppProvider>
      <BrowserRouter>

        <Wrapper />
      
      </BrowserRouter>
    </AppProvider>
  )
}

export default Application;