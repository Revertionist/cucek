import NavBar from "./components/navBar";
import 'font-awesome/css/font-awesome.min.css';
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import PrincipalDesk from "./pages/AboutUs/PrincipalDesk";
import VisionAndMission from "./pages/AboutUs/VisionAndMission";
import Cs from "./pages/Academic/Cs";
import Ce from "./pages/Academic/Ce";
import Ece from "./pages/Academic/ece";
import It from "./pages/Academic/it";
import Mca from "./pages/Academic/mca";

function App() {

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col relative overlay-container inset-0 bg-slate-400 bg-opacity-80 z-0">
      <header className="w-full flex justify-between items-center z-10 fixed">
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/principal" element={<PrincipalDesk />} />
        <Route path="/vision-and-mission" element={<VisionAndMission />} />
        <Route path="/cs" element={<Cs/>} />
        <Route path="/ce" element={<Ce/>}/>
        <Route path="/ece" element={<Ece />} />
        <Route path="/it" element={<It />} />
        <Route path="/mca" element={<Mca/>}/>
      </ Routes>
    </div>

  );
}

export default App;
