import logo from './logo.svg';
import './App.css';
import Card from './Card.js';

function App() {
    return (

        <div className="flex flex-col justify-around items-center min-h-screen">
            <div className="">
                <h1 className="lg:text-9xl md:text-8xl text-6xl text-white">Higher or Lower</h1>
            </div>
            <div className="flex flex-col justify-evenly grow w-8/12">
                <div className="flex flex-row justify-between">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="flex flex-row justify-end">
                    <button className="bg-blue-700 hover:bg-blue-400 text-2xl text-white font-bold py-4 px-8 mx-2 border-b-4 border-blue-700 hover:border-blue-500 rounded-xl">Higher</button>
                    <button className="bg-blue-700 hover:bg-blue-400 text-2xl text-white font-bold py-4 px-8 mx-2 border-b-4 border-blue-700 hover:border-blue-500 rounded-xl">Lower</button>
                </div>
            </div>
        </div>
    );
}

export default App;
