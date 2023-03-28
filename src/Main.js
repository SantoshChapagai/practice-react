import React from "react";
import './Main.css';
import Box from './Box';

const Main = () => {
  return (
    <main className="main">
      <Box name='Santosh' title='CEO' age='28' />
      <Box name='Santosh' title='student' age='28' />
      <Box name='Santosh' title='Programmer' age='28' />

    </main>
  )
}
export default Main;