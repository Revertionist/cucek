import NavBar from "./components/navBar";
import { TypeAnimation } from 'react-type-animation';
import 'font-awesome/css/font-awesome.min.css';

function App() {

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col relative overlay-container inset-0 bg-slate-400 bg-opacity-80 z-0" style={{ backgroundImage: "url('https://cucek.cusat.ac.in/images/main/8.jpg')" }}>
      <div className="absolute inset-0 bg-slate-400 bg-opacity-50 z-0"></div>

      <header className="w-full flex justify-between items-center z-10">
        <NavBar />
      </header>

      <main className="flex flex-col items-center justify-center flex-1 text-center text-white">
        <h1 className="text-7xl font-serif font-semibold tracking-wide">
          CUCEK
        </h1>

        <div className="w-[50%]">
          <TypeAnimation
            sequence={[
              'May the wisdom accrued deify us both the teacher and the taught and percolate to the Universe in its totality',
              5000,
            ]}
            wrapper="span"
            speed={70}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={false}
          />
        </div>

        <p className="mt-6 text-xl max-w-2xl leading-relaxed">
        </p>
      </main>
    </div>

  );
}

export default App;
