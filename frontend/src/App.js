import './App.css';
import { SignIn } from './components/signin/signin';
import { SignUp } from './components/signup/signup';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ForgotPassword } from './components/updatePassword/forgetpass';
import DisplayData from './components/dispalydata/data';
import { MainPage } from './components/landing pages/mainpage';
import LandingPage from './components/landing pages/landingpage';
import Articles from './components/articles/articles';
import ExercisePage from './components/exercises/exercises';
import MenExercisePage from './components/exercises/men';
import { WomenExercisePage } from './components/exercises/women';
import { Contact } from './components/contact';
import GoalSettingStrategiesPage from './components/goalSetting';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Set the default route to redirect to /landing */}
        <Route path="/" element={<Navigate to="/landing" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/goal" element={<GoalSettingStrategiesPage />} />
        
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/data" element={<DisplayData />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact/>} />

         

        
        <Route path="/exercises" element={<ExercisePage/>} />
        <Route path="/menexercises" element={<MenExercisePage/>} />
        <Route path="/womenexercises" element={<WomenExercisePage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;