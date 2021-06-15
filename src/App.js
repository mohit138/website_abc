import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTopComponent';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Main/>
      </div>
    </BrowserRouter>
  );
}

export default App;
