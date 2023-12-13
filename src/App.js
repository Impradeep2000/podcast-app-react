import './App.css';
import SignUpPage from './pages/SignUpPage';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignUpPage/>} / >
        </Routes>
      </Router>
    </div>
  );
}

export default App;