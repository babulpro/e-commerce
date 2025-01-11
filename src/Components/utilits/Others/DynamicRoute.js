"use client"
import React,{ useEffect, useState } from "react";

 
const DynamicRoute =async (id) => {
    const [Data, setData] = useState([]);

    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const config = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(id),
                };
                const response = await fetch(`/api/getData/AccomodationData/ById`,config, { cache: "force-cache" });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setData(data); // Ensure data has correct structure
            } catch (err) {
                setError(err.message);
            }
        };

        fetchHeroData();
    }, []);

    return Data
   

}

export default DynamicRoute