import { Routes , Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import FileUploader from "./FileUploader";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" Component={LoginPage} />
      </Routes>
      <MainPage />
    </>
  );
}

export default App;
