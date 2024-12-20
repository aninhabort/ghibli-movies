import "./index.css";
import {
  HeaderComponent,
  Input,
  MainComponent,
} from "./app.style";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";

export const url = "https://ghibliapi.dev/films";

function App() {
  return (
    <Router>
      <MainComponent>
        <HeaderComponent>
          <h1>Ghibli Movies</h1>

          <Input type="text" placeholder="Search for a movie"></Input>
        </HeaderComponent>

        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/:id" element={<MovieDetail />} />
        </Routes>
      </MainComponent>
    </Router>
  );
}

export default App;
