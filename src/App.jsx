
import { Routes, Route } from 'react-router';

import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';


import './App.css'

const  App = () => {

  return (
    <>
      <Routes>
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />} />
      </Routes>
    </>
  );
}

export default App
