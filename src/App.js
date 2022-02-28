import "./app.css"
import Main from './components/Main';
import FindInzer from './components/FindInzer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Main /> }/>
          <Route path="/find" element={<FindInzer /> }/>
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
