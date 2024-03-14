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
    <div className="w-full h-full flex flex-col space-y-5 p-5">
      <div className="mt-5 mb-10">
        <Typography style={{ fontSize: "34px", fontWeight: "bold", color: "black" }}>Performance</Typography>
      </div>
      <div className="grid grid-cols-5 gap-y-5">
        <div className="col-span-1 flex flex-col items-center">
          <Typography style={{ fontSize: "18px", fontWeight: "medium", color: "black", textAlign: "center"}}>Today's Low</Typography>
          <Typography style={{ fontSize: "18px", fontWeight: "medium", color: "darkgray", textAlign: "center" }}>{coinInfo?.prices[0][1]}</Typography>
        </div>
        <div className="col-span-3 flex items-center">
          <GradientLine value={coinInfo?.prices[1][1]} />
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <Typography style={{ fontSize: "18px", fontWeight: "medium", color: "black", textAlign: "center" }}>Today's High</Typography>
          <Typography style={{ fontSize: "18px", fontWeight: "medium", color: "darkgray" , textAlign: "center"}}>{coinInfo?.prices[1][1]}</Typography>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-y-5">
      <div className="col-span-1 flex flex-col items-center">
          <Typography style={{ fontSize: "18px", fontWeight: "medium", color: "black", textAlign: "center" }}>4W_Low</Typography>
          <Typography style={{ fontSize: "18px", fontWeight: "medium", color: "darkgray", textAlign: "center" }}>60,232.32</Typography>
        </div>
        <div className="col-span-3 flex items-center">
          <GradientLine value="74,344.99" />
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <Typography style={{ fontSize: "18px", fontWeight: "medium", color: "black", textAlign: "center"  }}>4W_High</Typography>
          <Typography style={{ fontSize: "18px", fontWeight: "medium", color: "darkgray", textAlign: "center"  }}>78,344.99</Typography>
        </div>
      </div>
    </div>
  )

}