export default function Card(props) {
    // TODO Dynamically Change Cards with API information
    // Implement Node.js server for API and database for common data.
    // Refactor messy if/else logic.
    if (props.id === '1') {
        return (
            <div className="flex flex-col justify-center items-center h-full">
                <img className="z-0 fixed scale-125 pr-32 h-screen w-1/2 object-cover blur-3xl rotate-6" src="https://api.opendota.com/apps/dota2/images/dota_react/heroes/zuus.png" alt="hero" />
                <div className="z-10 flex flex-col rounded-xl border border-gray-800 bg-black bg-opacity-60 shadow-2xl shadow-black px-5 py-10 w-1/2 h-full">
                    <img src="https://api.opendota.com/apps/dota2/images/dota_react/heroes/zuus.png" alt="hero" />
                    <h1 className="text-4xl tracking-wider text-slate-50 text-center font-bold pt-5">
                        Zeus
                    </h1>
                    <p className="text-center text-white text-lg font-semibold pt-1">has a</p>
                    <p className="text-center text-amber-400 text-8xl font-semibold pt-8">77%</p>
                    <p className="text-center text-amber-400 text-3xl font-semibold pt-4">Win Rate</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col justify-center items-center h-full">
                <img className="z-0 fixed scale-125 pl-32 h-screen w-1/2 object-cover blur-3xl rotate-6" src="https://api.opendota.com/apps/dota2/images/dota_react/heroes/dark_willow.png" alt="hero" />
                <div className="z-10 flex flex-col rounded-xl border border-gray-800 bg-black bg-opacity-60 shadow-2xl shadow-black px-5 py-10 w-1/2 h-full">
                    <img src="https://api.opendota.com/apps/dota2/images/dota_react/heroes/dark_willow.png" alt="hero" />
                    <h1 className="text-4xl tracking-wider text-slate-50 text-center font-bold pt-5">
                        Dark Willow
                    </h1>
                    <p className="text-center text-white text-lg font-semibold">has a</p>
                    <div className="z-10 flex flex-col justify-center mt-4">
                        <button className="border-2 hover:bg-black hover:bg-opacity-40 text-2xl text-white font-bold py-4 px-12 mb-4 mx-auto border-b-4 border-white hover:border-lime-400 rounded-full shadow-lg shadow-slate-700">Higher&ensp;<b className="text-lime-500">▲</b></button>
                        <button className="border-2 hover:bg-black hover:bg-opacity-40 text-2xl text-white font-bold py-4 px-12 mb-4 mx-auto border-b-4 border-white hover:border-red-500 rounded-full shadow-lg shadow-slate-700">Lower&ensp;<b className="text-red-500">▼</b></button>
                    </div>
                    <p className="text-center text-amber-400 text-2xl font-semibold">Win Rate</p>
                </div>
            </div>
        );
    }

}
