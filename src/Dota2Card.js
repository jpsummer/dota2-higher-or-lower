import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card.js';

function Dota2Card(props) {
    const [error, setError] = useState(null);
    const [heroInfo, setHeroInfo] = useState({});

    const API_URL = "https://api.opendota.com";

    useEffect(() => {
        console.log("API Called")
        axios
            .get(`${API_URL}/api/heroStats/`)
            .then(response => {
                if (props.guess === 'true') {
                    const heroData = response.data[114];
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
                } else {
                    const heroData = response.data[50];
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
                }
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (props.guess === 'true') {
        return <Card heroInfo={heroInfo} guess='true' />;
    }
    return <Card heroInfo={heroInfo} guess='false' />;
}

export default Dota2Card;
