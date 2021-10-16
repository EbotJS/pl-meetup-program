// import logo from './logo.svg';
import './icon-luxury.svg';
import './icon-sedans.svg';
import './icon-suvs.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
function App() {
  return (
    <div className="card">
         
    <div className="card__sedans card__rows">
        <img className="card__img" src="./icon-sedans.svg" alt="" />
        <p className="card__titles">SEDANS</p>
        <p className="card__desc">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
        <a  className="card__sedans_btn card__btn" href="_blank">learn More</a>
    </div>

    <div className="card__suvs card__rows">
        <img className="card__img" src="./icon-suvs.svg" alt="" />
        <p className="card__titles">SUVS</p>
        <p className="card__desc">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
        <a className="card__suvs_btn card__btn" href="_blank">Learn More</a>
    </div>

    <div className="card__luxury card__rows">
        <img className="card__img" src="./icon-luxury.svg" alt=""/>
        <p className="card__titles">LUXURY</p>
        <p className="card__desc">Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
        <a className="card__luxury_btn card__btn" href="_blank">Learn More</a>
    </div>
 </div>   
  );
}

export default App;