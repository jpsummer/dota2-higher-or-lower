import React from 'react';

function Card(props) {
    const { heroInfo } = props;

    console.log("Component Rendered")
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <img className="z-0 fixed scale-125 pr-32 h-screen w-1/2 object-cover blur-3xl rotate-6" src={heroInfo.img} alt="hero" />
            <div className="z-10 flex flex-col rounded-xl border border-gray-800 bg-black bg-opacity-60 shadow-2xl shadow-black px-5 py-10 w-1/2 h-full">
                <img src={heroInfo.img} alt="hero" />
                <h1 className="text-4xl tracking-wider text-slate-50 text-center font-bold pt-5">
                    {heroInfo.name}
                </h1>
                <p className="text-center text-white text-lg font-semibold pt-1">has a</p>
                <p className="text-center text-amber-400 text-8xl font-semibold pt-8">{heroInfo.winRate}%</p>
                <p className="text-center text-amber-400 text-3xl font-semibold pt-4">Win Rate</p>
            </div>
        </div>
    );
}

export default Card;
