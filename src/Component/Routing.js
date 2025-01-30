import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import both Routes and Route
import Shoe from './Shoe';
import Payment from './Payment';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Shoe />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
};

export default Routing;
