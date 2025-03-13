import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home-page"
import WelcomePage from "./pages/welcome-page"
import BioPage from "./pages/bio-page"
import NewsPage from "./pages/news-page"
import AgendaPage from "./pages/agenda-page"
import LoginPage from "./pages/login-page"
import RegisterPage from "./pages/register-page"
import ChatPage from "./pages/chat-page"
import MultimediaPage from "./pages/multimedia-page"
import StorePage from "./pages/store-page"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/bio" element={<BioPage />} />
        <Route path="/agenda" element={<AgendaPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/multimedia" element={<MultimediaPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </>
  )
}

export default App
