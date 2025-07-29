import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoPage from "./pages/TodoPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./routes/PrivateRoute";
import { useEffect, useState } from "react";
import api from "./utils/api";

function App() {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      const StoredToken = sessionStorage.getItem("token");
      if (StoredToken) {
        const response = await api.get("/user/me");
        setUser(response.data.user);
      }
    } catch (err) {
      console.error("getUser error:", err);
      setUser(null);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute user={user}>
            <TodoPage setUser={setUser} />
          </PrivateRoute>
        }
      />
      <Route
        path="/login"
        element={<LoginPage user={user} setUser={setUser} />}
      />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
