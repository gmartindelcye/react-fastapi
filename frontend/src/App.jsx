import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import UsersPage from "./pages/Users";

const App = () => {
  return (
    <ThemeProvider>
      <Router className="cursor-default">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/users"
            element={<UsersPage />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
