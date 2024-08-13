import './App.css';
import { SignIn } from './components/signin/signin';
import { SignUp } from './components/signup/signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ForgotPassword } from './components/updatePassword/forgetpass';
import DisplayData from './components/dispalydata/data';
import  { MainPage } from './components/landing pages/navbar'; // Ensure this path is correct
import LandingPage from './components/landing pages/landingpage';
import Articles from './components/articles/article';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/data" element={<DisplayData/>} />
        <Route path="/article" element={<Articles/>} />

        <Route path="/landing" element={<LandingPage/>} />
        <Route path="/mainpage" element={<MainPage />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
