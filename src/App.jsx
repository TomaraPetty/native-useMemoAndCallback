import { useState, useMemo } from 'react';

function SortedList({ list }) {
  console.log('Running sort');

  const sortedList = useMemo(() => {
    console.log('Running sort');
    return [...list].sort();
  }, [list]);

  return <div>{sortedList.join(', ')}</div>;
}

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const countTotal = count1 + count2;

  const [numbers] = useState([10, 20, 30]);

  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  const [names] = useState(['Tom', 'Jen', 'Bella', 'Rex']);

  const sortedNames = useMemo(() => [...names].sort(), [names]);

  return (
    <div className='App'>
      <div>Total: {total}</div>
      <div>Names: {names.join(', ')}</div>
      <SortedList list={names} />
      <button onClick={() => setCount1(count1 + 1)}>Count1: {count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>Count2: {count2}</button>
      <div>Total: {countTotal}</div>
    </div>
  );
}

export default App;
