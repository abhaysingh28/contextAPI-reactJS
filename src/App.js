import React, { createContext } from 'react';
import Child1 from './Child1';

const data = createContext();
const App = () => {
  const name = "abhay"
  return (
    <>
      <data.Provider value={name}>
        <Child1 />
      </data.Provider>
    </>
  );
}

export default App;
export {data};
