import './App.css';
import { SignIn } from './components/signin/signin';
import { SignUp } from './components/signup/signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ForgotPassword } from './components/updatePassword/forgetpass';
import YogaFestival from './components/landing pages/landpage1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="/home" element={<YogaFestival/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
