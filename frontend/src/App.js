import './App.css';
import { SignIn } from './components/signin/signin';
import { SignUp } from './components/signup/signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ForgotPassword } from './components/updatePassword/forgetpass';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
