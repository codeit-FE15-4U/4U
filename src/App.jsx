import "./App.css";
<<<<<<< HEAD
=======
import { BrowserRouter, Routes, Route } from "react-router";
import MainPage from "./pages/MainPage";
>>>>>>> 460fbd772deb410348a4d4c85c87af858d3edc7b
import ListPage from "./pages/ListPage";

function App() {
  return (
<<<<<<< HEAD
    <>
      <ListPage />
    </>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 460fbd772deb410348a4d4c85c87af858d3edc7b
  );
}

export default App;
