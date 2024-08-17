
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import CountCards from './components/common/CountCards'
import ViewTable from './components/common/ViewTable'

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<CountCards />} />
        <Route path="/ViewTable" element={<ViewTable />} />
      </Routes>
    </Router>
    </>
      )
}

export default App
