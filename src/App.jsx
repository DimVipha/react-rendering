import { useState } from 'react';
import NavBar from '/src/components/NavBar';
import Footer from '/src/components/Footer';
import Card from '/src/components/Card';
import Rating from '/src/components/Rating';
import './index.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="bg-blue-800 h-[100%]">
        {/* Header */}
        <header>
          <navbar>
            <div className="flex flex-col">
              <NavBar />
            </div>
          </navbar>
        </header>
        {/* Main */}
        <main>
          <div className="product">
            <div className="flex">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className="flex">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className="flex">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="feedback flex flex-col justify-center p-5 ">
            <Rating />
          </div>
        </main>
        {/* footer */}
        <footer>
          <div>
            <Footer />
          </div>
        </footer>
      </div>
    </>
  );
}
export default App;
