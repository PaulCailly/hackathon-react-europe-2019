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
  
  return (
    <AppContext.Provider value={app}>
      {props.children}
    </AppContext.Provider>
  )
}
export { AppContext, AppProvider };