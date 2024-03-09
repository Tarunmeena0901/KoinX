import { ArrowUpwardRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

export default function TrendingBox() {

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
        <div className="flex flex-col p-7 gap-y-5 rounded-lg bg-white">
            <div>
                <Typography style={{ fontSize: "24px", fontWeight: "bold", color: "black" }}>Trending Coins (24h)</Typography>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-y-7">
                {coinInfo?.slice(0, 3).map((coin, index) => (
                    <div key={index} className="flex">
                        {coin?.item?.name && (
                            <div className="flex gap-x-3">
                                <img
                                    className="w-5 h-5 object-cover rounded-full"
                                    src={coin?.item?.small}
                                    alt="Box Image"
                                />
                                <Typography style={{ fontSize: "15px", fontWeight: "bold", color: "black" }}>
                                    {coin.item.name}
                                </Typography>
                            </div>
                        )}
                    </div>
                ))}
                </div>
                <div className="flex flex-col gap-y-9">
                {coinInfo?.slice(0, 3).map((coin, index) => (
                    <div key={index} className="flex ">
                        {coin?.item?.data && (
                            <div className="bg-green-100 w-20 h-5 flex items-center justify-center rounded-sm">
                                <ArrowUpwardRounded style={{ color: "green", fontSize: "small", marginRight: 5 }} />
                                <Typography fontSize={"12px"} fontWeight={"medium"} style={{ color: "#00D100" }}>{coin?.item?.data?.price_change_percentage_24h.usd.toFixed(2)}%</Typography>
                            </div>
                        )}
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}