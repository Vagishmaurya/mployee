
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Cards from './Components/Cards';

function App() {
  return (
    <>
     <Navbar/>
     <div className="container">
      <Sidebar />
      <div className="card-container">
        <Cards />
      </div>
    </div>

    </>
  );
}

export default App;
