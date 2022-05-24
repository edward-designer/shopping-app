import './App.scss';
import { useState,useEffect } from 'react';
import Directory from './components/directory-component';

const App = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // don't use absolute paths as react will kick in to deliver an HTML file!!!
    fetch('./categories.json').then(data => data.json()).then(data => setCategories(data)).catch(e=>console.error(e));
  },[])
  return (
    <Directory categories={categories} />
  ); 
}

export default App;
