import { Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import GradientLine from "./GradientLine";


export default function PerformanceSection() {
    const [coinInfo, setCoinInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=daily&precision=2`);
                setCoinInfo(response.data);
            } catch (error) {
                console.error('Error fetching coin data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-full h-full flex flex-col space-y-5">
        <div className="mt-5 ml-10 mb-10">
          <Typography style={{ fontSize: "34px", fontWeight: "bold", color: "black" }}>Performance</Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-2 items-center justify-center w-full">
          <div className="md:flex md:flex-col md:items-center md:col-span-1 space-y-2">
            <Typography style={{ fontSize: "18px", fontWeight: "medium", color: "black" }}>Today's Low</Typography>
            <Typography style={{ fontSize: "18px", fontWeight: "medium", color: "darkgray" }}>{coinInfo?.prices[0][1]}</Typography>
          </div>
          <div className="flex justify-center md:col-span-3">
            <GradientLine value={coinInfo?.prices[1][1]} />
          </div>
          <div className="md:flex md:flex-col md:items-center md:col-span-1">
            <Typography style={{ fontSize: "18px", fontWeight: "medium", color: "black" }}>Today's High</Typography>
            <Typography style={{ fontSize: "18px", fontWeight: "medium", color: "darkgray" }}>{coinInfo?.prices[1][1]}</Typography>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-2 items-center justify-center w-full">
          <div className="md:flex md:flex-col md:items-center md:col-span-1 space-y-2">
            <Typography style={{ fontSize: "18px", fontWeight: "medium", color: "black" }}>4W_Low</Typography>
            <Typography style={{ fontSize: "18px", fontWeight: "medium", color: "darkgray" }}>60,232.32</Typography>
          </div>
          <div className="flex justify-center md:col-span-3">
            <GradientLine value="74,344.99" />
          </div>
          <div className="md:flex md:flex-col md:items-center md:col-span-1">
            <Typography style={{ fontSize: "18px", fontWeight: "medium", color: "black" }}>4W_High</Typography>
            <Typography style={{ fontSize: "18px", fontWeight: "medium", color: "darkgray" }}>78,344.99</Typography>
          </div>
        </div>
      </div>
    )

}