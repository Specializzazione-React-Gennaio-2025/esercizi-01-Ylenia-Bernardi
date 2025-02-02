import React from 'react';
import Navbar from './components/Navbar';
import DataList from './components/DataList';
import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <Navbar />
      <DataList />
      <Counter />
    </div>
  );
};

export default App;
