import { Route, Routes } from "react-router-dom";
import StartupPage from "./pages/StartupPage";
import TranslationPage from "./pages/TranslationPage";
import ProfilePage from "./pages/ProfilePage";
import Header from "./components/Header";
import './style.css';

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<StartupPage />} />
      <Route path="/translation" element={<TranslationPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<h2>No Page</h2>} />
    </Routes>
    </>
  );
};

export default App;
