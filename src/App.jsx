import NavBar from "./components/navBar";
import 'font-awesome/css/font-awesome.min.css';
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {

  return (

    <div className="min-h-screen bg-cover bg-center flex flex-col relative overlay-container inset-0 bg-slate-400 bg-opacity-80 z-0">
      <div className="absolute inset-0 bg-slate-400 bg-opacity-50 z-0"></div>

      <header className="w-full flex justify-between items-center z-10 fixed">
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>

  );
}

export default App;
