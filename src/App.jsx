import NavBar from "./components/navBar";
import 'font-awesome/css/font-awesome.min.css';
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import PrincipalDesk from "./pages/AboutUs/PrincipalDesk";
import VisionAndMission from "./pages/AboutUs/VisionAndMission";
import AboutUsContents from "./pages/AboutUs/AboutUsContents";
import Cs from "./pages/Academic/Cs";
import Ce from "./pages/Academic/Ce";
import Ece from "./pages/Academic/Ece";
import It from "./pages/Academic/It";
import Mca from "./pages/Academic/Mca";
import ResearchPage from "./pages/Academic/Research";
import ResearcherDetails from "./pages/Academic/ReasearchDetails";

function App() {


  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col relative overlay-container inset-0 bg-slate-400 bg-opacity-80">
      <header className="z-50 w-full flex justify-between items-center fixed">
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/principal" element={<PrincipalDesk />} />
        <Route path="/vision-and-mission" element={<VisionAndMission />} />
        <Route path="/about-us" element={<AboutUsContents/>} />
        <Route path="/academics/cs" element={<Cs/>} />
        <Route path="/academics/ce" element={<Ce/>}/>
        <Route path="/academics/ece" element={<Ece />} />
        <Route path="/academics/it" element={<It />} />
        <Route path="/academics/mca" element={<Mca/>}/>
        <Route path="/research" element={<ResearchPage/>} />
        <Route path="/researcher/:id" element={<ResearcherDetails/>} />
      </ Routes>
    </div>

  );
}

export default App;
