import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import { Routes, Route } from "react-router-dom";
import Item from './components/item/Item';
import data from './components/data';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/item/:id" element={<Item data={data}/>} />
      </Routes>
    </div>
  );
}

export default App;
