import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dota2API(props) {
    const [averageWinRate, setAverageWinRate] = useState(null);
    const [heroName, setHeroName] = useState(null);
    const [heroImg, setHeroImg] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get('https://api.opendota.com/api/heroStats/', {
                params: {
                    api_key: '5234a13e-308e-4f90-a344-1565292974e3'
                }
            })
            .then(response => {
                const heroData = response.data[0];
                setHeroName(heroData.localized_name);
                setHeroImg(heroData.img);
                console.log(heroData.img)
                let totalPicks = 0;
                let totalWins = 0;
                for (let key in heroData) {
                    if (key.endsWith('pick') && !(key === 'turbo_pick')) {
                        totalPicks += heroData[key];
                    } else if (key.endsWith('win') && !(key === 'turbo_win')) {
                        totalWins += heroData[key];
                    }
                }
                const averageWinRate = totalPicks / totalWins;
                setAverageWinRate(averageWinRate.toFixed(2));
            })
            .catch(error => {
                setError(error);
            });
    }, [props.heroId]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        < div className="flex flex-col justify-center items-center h-full" >
            <img className="z-0 fixed scale-125 pr-32 h-screen w-1/2 object-cover blur-3xl rotate-6" src="https://api.opendota.com/apps/dota2/images/dota_react/heroes/antimage.png" alt="hero" />
            <div className="z-10 flex flex-col rounded-xl border border-gray-800 bg-black bg-opacity-60 shadow-2xl shadow-black px-5 py-10 w-1/2 h-full">
                <img src="https://api.opendota.com/apps/dota2/images/dota_react/heroes/antimage.png" alt="hero" />
                <h1 className="text-4xl tracking-wider text-slate-50 text-center font-bold pt-5">
                    {heroName}
                </h1>
                <p className="text-center text-white text-lg font-semibold pt-1">has a</p>
                <p className="text-center text-amber-400 text-8xl font-semibold pt-8">{averageWinRate}%</p>
                <p className="text-center text-amber-400 text-3xl font-semibold pt-4">Win Rate</p>
            </div>
        </div >
    );

}

export default Dota2API;
