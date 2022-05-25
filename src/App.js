import { Routes, Route } from 'react-router-dom'
import Home from './routes/home-component'
import Navigation from './components/navigation-component'
import Shop from './routes/shop-component'
import Authentication from './routes/authentication-component'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signIn' element={<Authentication />} />
      </Route>
    </Routes>
  ); 
}

export default App;
