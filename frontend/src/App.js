import './App.css';
import { SignIn } from './components/signin/signin';
import { SignUp } from './components/signup/signup';
 import { UpdatePassword } from './components/updatePassword/updatePass';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UpdatePassword } from './components/updatePassword/updatePass';
import { ForgotPassword } from './components/updatePassword/forgetpass';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/updatePassword" element={<UpdatePassword />} />
        <Route path="/forgetpass" element={<ForgotPassword />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
