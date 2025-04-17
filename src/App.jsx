import "./App.css";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
