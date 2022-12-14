import vs from './vs.png';
import './App.css';
import Dota2Card from './Dota2Card.js';

function App() {
    console.log("In App")
    return (
        <div className="min-h-screen">
            <div className="absolute top-[20%] bottom-auto left-0 right-0 my-auto flex flex-row">
                {/* Left Card */}
                <div className="w-1/2">
                    <Dota2Card />
                </div>
                {/* Right Card */}
                <div className="w-1/2">
                    <Dota2Card guess='true' />
                </div>
            </div>
            {/* Centre Separator */}
            <div className="z-10 fixed outline outline-4 left-1/2 outline-orange-400 h-screen rotate-6"></div>
            {/* VS Logo */}
            <div className="z-20 absolute left-0 right-2 top-0 bottom-0 w-32 h-32 m-auto">
                <img src={vs} alt="versus logo" />
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
