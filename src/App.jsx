import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import MainPage from "./pages/MainPage";
import ListPage from "./pages/ListPage";
import QuestionLayout from "./components/QuestionLayout";
import QuestionPage from "./pages/QuestionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/post/:id" element={<QuestionLayout />}>
          <Route index element={<QuestionPage />} />
          {/* <Route path="answer" element={}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
