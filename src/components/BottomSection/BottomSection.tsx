import { Typography } from "@mui/material";
import { TrendingCarousel } from "./TrendingCarousel";
import { useEffect, useState } from "react";
import axios from "axios";
import CoinInfo from "../CoinInfo";


export default function BottomSection() {
    const [coinInfo, setCoinInfo] = useState<Array<Object> | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/search/trending`);
                setCoinInfo(response.data.coins);
            } catch (error) {
                console.error('Error fetching coin data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-full h-full mt-10 flex flex-col gap-y-10">
            <div className=" flex flex-col">
                <Typography style={{ fontSize: "34px", fontWeight: "bold", color: "black" }}>You May Also Like</Typography>
                <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
                    <TrendingCarousel
                        items= {coinInfo}
                        direction="right"
                        speed="slow"
                    />
                </div>
                <div className=" flex flex-col gap-y-5">
                    <Typography style={{ fontSize: "34px", fontWeight: "bold", color: "black" }}>Trending Coins</Typography>
                    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
                        <TrendingCarousel
                            items={coinInfo}
                            direction="left"
                            speed="slow"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
