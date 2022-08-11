import AirPocket from "./components/airPocket/AirPocket";
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import Technology from "./components/technology/Technology";



const App = () => {
  return (
    <div className="App">
      <Header />
      <Info />
      <AirPocket />
      <Technology />
    </div>
  );
}

export default App;
