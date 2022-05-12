import "./app.css"

import Main from './components/Main';
import FindInzer from './components/FindInzer';
import Companies from "./components/Companies_login";
import CompaniesReg from "./components/Companies_reg";

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Alert from "./components/Alert";
import Company_main from "./components/Companies_main";
import Createinzer from "./components/CreateInzer";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Main /> }/>
          <Route path="/find" element={<FindInzer /> }/>
          <Route path="/company-login" element={<Companies />}/>
          <Route path="/company-register" element={<CompaniesReg />} />
          <Route path="/alert" element={<Alert/>} />
          <Route path="/company" element={<Company_main />} />
          <Route path="/Create" element={<Createinzer />} />

        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
