import "./App.css";
import "./styles/Colors.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import OverviewPage from "./pages/Overview/OverviewPage";
import DetailsPage from "./pages/Details/DetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/overview/:id" element={<DetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
