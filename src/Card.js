export default function Card(props) {
    if (props.id === '1') {
        return (
            <div className="flex flex-col justify-center items-center h-full">
                <img className="z-0 fixed h-screen w-1/2 object-cover blur-[64px] rotate-6" src="https://api.opendota.com/apps/dota2/images/dota_react/heroes/zuus.png" alt="hero" />
                <div className="z-10 flex flex-col rounded-xl border border-gray-800 bg-black bg-opacity-60 shadow-2xl shadow-black p-5 w-1/2 mb-[220px]">
                    <img src="https://api.opendota.com/apps/dota2/images/dota_react/heroes/zuus.png" alt="hero" />
                    <h1 className="text-3xl text-slate-50 text-center font-bold pt-5">
                        Zeus
                    </h1>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col justify-center items-center h-full">
                <img className="z-0 fixed h-screen w-1/2 object-cover blur-[64px] rotate-6" src="https://api.opendota.com/apps/dota2/images/dota_react/heroes/dark_willow.png" alt="hero" />
                <div className="z-10 flex flex-col rounded-xl border border-gray-800 bg-black bg-opacity-60 shadow-2xl shadow-black p-5 w-1/2">
                    <img src="https://api.opendota.com/apps/dota2/images/dota_react/heroes/dark_willow.png" alt="hero" />
                    <h1 className="text-3xl text-slate-50 text-center font-bold pt-5">
                        Dark Willow
                    </h1>
                </div>
                <div className="z-10 flex flex-col justify-center pt-12">
                    <button className="bg-black bg-opacity-30 border-2 hover:bg-slate-600 text-2xl text-white font-bold py-4 px-12 my-2 border-b-4 border-white hover:border-lime-400 rounded-full shadow-lg shadow-slate-700">Higher&emsp;▲</button>
                    <button className="bg-black bg-opacity-30 border-2 hover:bg-slate-600 text-2xl text-white font-bold py-4 px-12 my-2 border-b-4 border-white hover:border-lime-400 rounded-full shadow-lg shadow-slate-700">Lower&emsp;▼</button>
                </div>
            </div>
        );
    }

}
