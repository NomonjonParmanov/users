import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Users from "./components/users/Users";
import Navbar from "./components/navbar/Navbar";
import "./sass/global.scss";
import CreatUser from "./components/CreatUser";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/register" element={<CreatUser />} />
      </Routes>
    </>
  );
}

export default App;
