import vs from './vs.png';
import './App.css';
import Card from './Card.js';


function App() {
    return (

        <div className="min-h-screen">
            {/* Cards */}
            <div className="absolute top-[20%] bottom-auto left-0 right-0 my-auto flex flex-row">
                {/* Left Card */}
                <div className="w-1/2">
                    <Card id='1' />
                </div>
                {/* Right Card */}
                <div className="w-1/2">
                    <Card id='0' />
                </div>
            </div>
            {/* Centre Separator */}
            <div className="z-10 fixed outline-double outline-4 left-1/2 outline-orange-400 h-screen rotate-6"></div>
            {/* VS Logo */}
            <div className="z-20 absolute left-0 right-2 top-0 bottom-0 w-32 h-32 m-auto">
                <img src={vs} alt="vs" />
            </div>
            {/* High Score Text */}
            <div className="z-20 absolute bottom-4 left-5">
                <p className="text-2xl text-white tracking-widest font-semibold">High Score:&ensp;0</p>
            </div>
            {/* Current Score Text */}
            <div className="z-20 absolute bottom-4 right-10">
                <p className="text-2xl text-white tracking-widest font-semibold">Score:&ensp;0</p>
            </div>
        </div>
    );
}

export default App;
