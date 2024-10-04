import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
            <main className="flex flex-col items-center justify-center flex-1 text-center text-white" style={{ backgroundImage: "url('cucek_bg.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
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
    )
}

export default Home
