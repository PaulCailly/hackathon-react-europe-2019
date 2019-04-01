import React, { useState, createContext } from 'react';

const AppContext = createContext();

const AppProvider = (props) => {
  const appData = {
    navCloseMd: true,
    navOpen: false,
    toggleSidenav: (value) => {
      setApp(appData => ({ ...appData, navOpen: value }))
    }
  }
  const [app, setApp] = useState(appData);

  {/* 
    This component returns JSX, uses props.children 
    to give access to dat in child components 
  */}
  
  return (
    <AppContext.Provider value={app}>
      {props.children}
    </AppContext.Provider>
  )
}
export { AppContext, AppProvider };