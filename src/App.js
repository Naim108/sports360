import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import AllTeams from './components/AllTeams/AllTeams';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <AllTeams></AllTeams>
      <Footer></Footer>
    </div>
  );
}

export default App;
