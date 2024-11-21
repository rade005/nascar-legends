import { useState } from 'react';
import './App.css';

function App() {
  const drivers = [
    {
      id: 1,
      name: "Richard Petty",
      titles: [1964, 1967, 1971, 1972,
              1974, 1975, 1979],
      wins: 200,
      poles: 123

    },

    {
      id: 2,
      name: "Dale Earnhardt",
      titles: [1980, 1986, 1987, 1990,
              1991, 1993, 1994],
      wins: 76,
      poles: 22        
    },

    {
      id: 3,
      name: "Jimmie Johnson",
      titles: [2006, 2007, 2008, 2009,
              2010, 2013, 2016],
      wins: 86,
      poles: 36
    },

    {
      id: 4,
      name: "Jeff Gordon",
      titles: [1995, 1997, 1998, 2001],
      wins: 93,
      poles: 81
    },

    {
      id: 5,
      name: "David Pearson",
      titles: [1966, 1968, 1969],
      wins: 105,
      poles: 113
    },

    {
      id: 6,
      name: "Tony Stewart",
      titles: [2002, 2005, 2011],
      wins: 49,
      poles: 15
    }

  ];

  
   const [selectedDriver, setSelectedDriver] = useState(null);

   const showDriverInfo = (id) => {
    setSelectedDriver(id === selectedDriver ? null : id);
   };

   const closeModal = () => {
    setSelectedDriver(null);
   }

   return (
    <div className='app-container'>
      <h1 className='title'>Biggest NASCAR Legends</h1>
      <div className='driver-cards'>
      {drivers.map((driver) => ( 
        <div key={driver.id} className='driver-card'
           onClick={() => showDriverInfo(driver)}> 
           <p className='driver-name'>{driver.name}</p>
           </div>
      ))}
      </div>
   
      {selectedDriver && (
        <div className='modal'>
        <div className='modal-content'>
          <p>Name: {selectedDriver.name}</p>
      <p>Titles: {selectedDriver.titles.join(", ")}</p>
      <p>Wins: {selectedDriver.wins}</p>
      <p>Pole positions: {selectedDriver.poles}</p>
      <button className='close-button'onClick={closeModal}>
        Close</button>
      </div>
          
        </div>
      )}
    </div>
  );
}


export default App;        
