import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('black');

  return (
    <>
      <div className="w-screen h-screen" style={{ backgroundColor: color }}>
        <div className="text-white flex flex-wrap gap-x-5 justify-center items-center h-full">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setColor('blue')}
          >
            Blue
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setColor('red')}
          >
            Red
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setColor('green')}
          >
            Green
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setColor('yellow')}
          >
            Yellow
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
