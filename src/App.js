import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom'

import Home from './routes/home-component'
import Navigation from './components/navigation-component'
import Shop from './routes/shop-component'
import Authentication from './routes/authentication-component'
import CheckOut from './routes/checkout-component'
import { createUserDoccumentFromAuth, onAuthStateChangeListener } from './utiles/firebase.utils';
import { setCurrentUser } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
      const unsubscribe = onAuthStateChangeListener((user)=>{ // only possible with onAuthStateChanged function from firebase
          if(user){ createUserDoccumentFromAuth(user); }
          dispatch(setCurrentUser(user));
      })
      return unsubscribe;
  },[]);


  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='signIn' element={<Authentication />} />
        <Route path='checkOut' element={<CheckOut />} />
      </Route>
    </Routes>
  ); 
}

export default App;
