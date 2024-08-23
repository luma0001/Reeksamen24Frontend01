import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Events from "./Components/Events";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/events">Events</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
