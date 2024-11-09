import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useNavStore } from '../store/globalState';

const Home = () => {

    const openNavBar = useNavStore((state)=> state.openNavBar)

    return (
        <main className="flex flex-col items-center justify-center flex-1 text-center text-white relative" 
              style={{ 
                  backgroundImage: "url('cucek_bg.jpg')", 
                  backgroundRepeat: 'no-repeat', 
                  backgroundSize: "cover", 
                  height: '100vh',
              }}>
            <div className="absolute inset-0 bg-slate-800 bg-opacity-70 z-0"></div>
            <h1 className="text-7xl font-serif font-bold tracking-wide z-10">
                CUCEK
            </h1>

            <div className="w-[80%] lg:w-[50%] z-10">
                <TypeAnimation
                    sequence={[
                        'May the wisdom aquired define us both the teacher and the taught and percolate to the Universe in its totality',
                        5000,
                    ]}
                    wrapper="span"
                    speed={70}
                    style={{ fontSize: '1.5em', display: 'inline-block', lineHeight: '1.5' }}
                    repeat={false}
                />
            </div>

            <p className="mt-6 text-xl max-w-2xl leading-relaxed z-10">
                Explore the depths of knowledge and elevate your potential. 
            </p>

            <a onClick={openNavBar} className="mt-8 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transition duration-200 z-10">
                Learn More
            </a>
        </main>
    )
}

export default Home;
