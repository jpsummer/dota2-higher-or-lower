import vs from './vs.png';
import './App.css';
import Card from './Card.js';


function App() {
    return (

        <div className="min-h-screen">
            <div className="absolute h-screen w-1/2 left-1/2">
                <Card id='0' />
            </div>
            <div className="z-0 fixed outline outline-4 left-1/2 outline-orange-400 h-screen rotate-6"></div>
            <div className="z-20 absolute left-3 right-0 top-0 bottom-52 w-32 h-32 m-auto">
                <img src={vs} alt="vs" />
            </div>
            <div className="absolute h-screen w-1/2 right-1/2">
                <Card id='1' />
            </div>
        </div>
    );
}

export default App;
