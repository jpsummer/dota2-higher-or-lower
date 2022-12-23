import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dota2API(props) {
    const [heroInfo, setHeroInfo] = useState({});
    const [error, setError] = useState(null);

    const API_URL = "https://api.opendota.com"


    useEffect(() => {
        const updateHeroInfo = (newHeroInfo) => {
            setHeroInfo({ ...heroInfo, ...newHeroInfo });
        }

        axios
            .get(`${API_URL}/api/heroStats/`, {
                params: {
                    api_key: '5234a13e-308e-4f90-a344-1565292974e3'
                }
            })
            .then(response => {
                const heroData = response.data[121];
                let totalPicks = 0;
                let totalWins = 0;
                for (const key in heroData) {
                    if (key.endsWith('pick') && !(key === 'null_pick')) {
                        totalPicks += heroData[key];
                    } else if (key.endsWith('win') && !(key === 'null_win')) {
                        totalWins += heroData[key];
                    }
                }
                const averageWinRate = (totalWins / totalPicks) * 100;
                updateHeroInfo({
                    name: heroData.localized_name,
                    img: `${API_URL}${heroData.img}`,
                    winRate: averageWinRate.toFixed(2)
                });
            })
            .catch(error => {
                setError(error);
            });
    }, [heroInfo]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div className="flex flex-col justify-center items-center h-full" >
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
        </div >
    );

}

export default Dota2API;
