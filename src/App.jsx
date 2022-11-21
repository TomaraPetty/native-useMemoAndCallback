import { useState } from 'react';

function App() {
  const [numbers] = useState([10, 20, 30]);

  const total = numbers.reduce((acc, number) => acc + number, 0);

  return <div className='App'>Total: {total}</div>;
}

export default App;
