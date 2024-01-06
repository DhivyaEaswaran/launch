
import './App.css';
import HomePageContent from './Pages/Home/HomePageContent';
import NavigationBar from './Pages/Home/NavigationBar/NavigationBar';
import HomeSlider from './Pages/Home/Slider/HomeSlider';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
     <HomeSlider/>
     <HomePageContent/>
     
    </div>
  );
}

export default App;
