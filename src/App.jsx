import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import MainPage from "./pages/MainPage";
import ListPage from "./pages/ListPage";
import QuestionPage from "./pages/QuestionPage";
import AnswerPage from "./pages/AnswerPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/post/:id" element={<QuestionPage />} />
        <Route path="/post/:id/answer" element={<AnswerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
