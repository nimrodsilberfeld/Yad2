import React from 'react'
import ApartmentContextProvider from './context/apartmentContext';
import AppRouter from "./routes/AppRouter";


function App() {
  return (
    <div >
      <ApartmentContextProvider>
        <AppRouter />
      </ApartmentContextProvider>
    </div>
  );
}

export default App;
