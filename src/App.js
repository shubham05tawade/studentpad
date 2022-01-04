import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import Property from './Property';
import readXlsxFile from 'read-excel-file'
import ScrollToTop from './ScrollToTop';

function App() {
  readXlsxFile('/assets/routes.csv').then((rows) => {
    console.log(rows)
  })
  return (
    <Router>
      <div className="App">
        <ScrollToTop/>
        <Routes>
          <Route exact path='/' element={< Home/>}></Route>
          <Route exact path="/properties" element={<Property/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
