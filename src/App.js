// importing React to the component file 
import React from 'react';
import Nav from './components/Nav';
// importing the About component
import About from './components/About';


function App() {
  return (
    <div>
        <Nav></Nav>
        <main>
          <About></About>
        </main>
    </div>
  );
}

export default App;
