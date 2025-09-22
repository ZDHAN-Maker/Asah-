import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepages";
import DetailPage from "./pages/detailpages";
import AddNewPage from "./pages/addnewpages";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/add" element={<AddNewPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
