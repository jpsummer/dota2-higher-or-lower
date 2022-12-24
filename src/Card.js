import React from 'react';

function Card(props) {
    const { heroInfo } = props;

    console.log("Component Rendered")
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <img className="z-0 fixed scale-125 pl-32 h-screen w-1/2 object-cover blur-3xl rotate-6" src={heroInfo.img} alt="hero" />
            <div className="z-10 flex flex-col rounded-xl border border-gray-800 bg-black bg-opacity-60 shadow-2xl shadow-black px-5 py-10 w-1/2 h-full">
                <img src={heroInfo.img} alt="hero" />
                <h1 className="text-4xl tracking-wider text-slate-50 text-center font-bold pt-5">
                    {heroInfo.name}
                </h1>
                <p className="text-center text-white text-lg font-semibold">has a</p>
                {props.guess === 'true' ? (
                    <div className="z-10 flex flex-col justify-center mt-4">
                        <button className="border-2 hover:bg-black hover:bg-opacity-40 text-2xl text-white font-bold py-4 px-12 mb-4 mx-auto border-b-4 border-white hover:border-lime-400 rounded-full shadow-md shadow-slate-700 hover:shadow-lime-300">Higher&ensp;<b className="text-lime-500">▲</b></button>
                        <button className="border-2 hover:bg-black hover:bg-opacity-40 text-2xl text-white font-bold py-4 px-12 mb-4 mx-auto border-b-4 border-white hover:border-red-500 rounded-full shadow-md shadow-slate-700 hover:shadow-red-400">Lower&ensp;<b className="text-red-500">▼</b></button>
                    </div>
                ) : (
                    <p className="text-center text-amber-400 text-8xl font-semibold pt-8">{heroInfo.winRate}%</p>
                )}
                <p className="text-center text-amber-400 text-2xl font-semibold">Win Rate</p>
            </div>
        </div>
    );
}

export default Card;
