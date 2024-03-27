import React from 'react';
import TableView from './tableview'; // Corrected import statement
import './index.css';

const App = () => {
  const data = [
    {ID: 1, Name: 'John', Age: 100000},
    {ID: 2, Name: 'Esther', Age: 21},
    {ID: 3, Name: 'Emily', Age: 20},
    {ID: 4, Name: 'Emory', Age: 21},
    {ID: 5, Name: 'Louise', Age: 21}, // Corrected spelling of 'Louise'
  ];

  return (
    <div>
      <h1 style={{textAlign: 'center', borderBottom: '2px solid blue', paddingTop: '20px', marginBottom: '100px'}}>
        Array of Objects - TableView
      </h1>
      <TableView data={data} />
    </div>
  );
};

export default App;
