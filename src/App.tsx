import React from 'react';
import Toaster from './components/shared/toaster';
import Routes from './route';
import module_route from './route/moduleRouting';

function App() {
  return (
    <>
      <Toaster />
      <Routes routeItems={module_route} />
    </>
  );
}

export default App;
