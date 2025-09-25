// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepages";
import DetailPage from "./pages/detailpages";
import AddNewPage from "./pages/addnewpages";
import Header from "./component/header";
import ArchivePage from "./pages/archivepages"; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/add" element={<AddNewPage />} />
          <Route path="/arsip" element={<ArchivePage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
