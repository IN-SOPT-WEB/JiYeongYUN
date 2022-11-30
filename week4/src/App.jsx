import Contents from "./components/Contents";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<SearchPage />}>
          <Route path=":username" element={<Contents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
