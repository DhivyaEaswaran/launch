
import './App.css';
import AboutUs from './Pages/AboutUs/AboutUs';
import NavigationBar from './Pages/Home/NavigationBar/NavigationBar';
import HomeSlider from './Pages/Home/Slider/HomeSlider';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
     <HomeSlider/>
     <AboutUs/>
    </div>
  );
}

export default App;
