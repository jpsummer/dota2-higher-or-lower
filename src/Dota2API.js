import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card.js';

function Dota2API() {
    const [error, setError] = useState(null);
    const [heroInfo, setHeroInfo] = useState({});
    const [loading, setLoading] = useState(true);

    const API_URL = "https://api.opendota.com";

    useEffect(() => {
        axios
            .get(`${API_URL}/api/heroStats/`)
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
                const heroInfo = {
                    name: heroData.localized_name,
                    img: `${API_URL}${heroData.img}`,
                    winRate: averageWinRate.toFixed(2)
                };
                setHeroInfo(heroInfo);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return <Card heroInfo={heroInfo} />;
}

export default Dota2API;
