import React, { Suspense } from 'react';
import ShowWeather from './components/Weather/ShowWeather';

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ShowWeather weather={'sunny'} />
      </Suspense>
    </div>
  );
};

export default App;
