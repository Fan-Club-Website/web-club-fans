import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home-page"
import WelcomePage from "./pages/welcome-page"
import BioPage from "./pages/bio-page"
import NewsPage from "./pages/news-page"
import AgendaPage from "./pages/agenda-page"
import LoginPage from "./pages/login-page"
import RegisterPage from "./pages/register-page"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/bio" element={<BioPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/agenda" element={<AgendaPage />} />
      </Routes>
    </>
  )
}

export default App
