import logo from './logo.svg';
import './App.css';
import Card from './Card.js';

function App() {
    return (
        <div className="flex flex-row justify-evenly items-center bg-epic min-h-screen">
            <Card />
            <Card />
        </div>
    );
}

export default App;
