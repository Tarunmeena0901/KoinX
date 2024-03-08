import { Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import InfoIcon from '@mui/icons-material/Info';


export default function FundamentalSection() {
    const [coinInfo, setCoinInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false');
                setCoinInfo(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-full h-full">
            <div className="ml-5 sm:ml-10 flex flex-col sm:flex-row items-center">
                <Typography style={{ fontSize: "26px", fontWeight: "medium", color: "#5A5A5A" }}>Fundamentals</Typography>
                <InfoIcon color="action" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center h-full w-full gap-x-12 p-2 sm:p-5">
                <div className="flex flex-col items-center grid grid-cols-1 divide-y">
                    <div className="flex justify-between p-2 sm:p-5">
                        <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "grey" }}>
                            {coinInfo?.name + " Price"}
                        </Typography>
                        <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "black" }}>
                            {`$ ${coinInfo?.market_data.current_price.usd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                        </Typography>
                    </div>
                    <div className="flex justify-between p-2 sm:p-5">
                        <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "grey" }}>
                            {"24h_Low / 24h_High"}
                        </Typography>
                        <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "black" }}>
                            {`$ ${coinInfo?.market_data.low_24h.usd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / $ ${coinInfo?.market_data.high_24h.usd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                        </Typography>
                    </div>
                    <div className="flex justify-between p-2 sm:p-5">
                        <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "grey" }}>
                            {"7d_Price_Change"}
                        </Typography>
                        <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "black" }}>
                            {`${coinInfo?.market_data.price_change_percentage_7d_in_currency.usd}%`}
                        </Typography>
                    </div>
                    <div className="flex justify-between p-2 sm:p-5">
                        <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "grey" }}>
                            {"Trading Volume"}
                        </Typography>
                        <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "black" }}>
                            {`$ ${coinInfo?.market_data.total_volume.usd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                        </Typography>
                    </div>
                    <div className="flex justify-between p-2 sm:p-5">
                        <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "grey" }}>
                            {"Market Cap Rank"}
                        </Typography>
                        <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "black" }}>
                            {`# ${coinInfo?.market_data.market_cap_rank}`}
                        </Typography>
                    </div>
                </div>
                <div className="flex flex-col items-center grid grid-cols-1 divide-y">
                    <div className="flex justify-between p-2 sm:p-5">
                        <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "grey" }}>
                            {"Market Cap"}
                        </Typography>
                        <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "black" }}>
                            {`$ ${coinInfo?.market_data.market_cap.usd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                        </Typography>
                    </div>
                    <div className="flex justify-between p-2 sm:p-5">
                        <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "grey" }}>
                            {"Market Cap Dominance"}
                        </Typography>
                        <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "black" }}>
                            {`${coinInfo?.market_data.market_cap_fdv_ratio * 100}%`}
                        </Typography>
                    </div>
                    <div className="flex justify-between p-2 sm:p-5">
                        <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "grey" }}>
                            {"Volume"}
                        </Typography>
                        <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "black" }}>
                            {`$ ${coinInfo?.market_data.market_cap.usd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                        </Typography>
                    </div>
                    <div className="flex justify-between p-2 sm:p-5">
                        <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "grey" }}>
                            {"All-Time High"}
                        </Typography>
                        <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "black" }}>
                            {"$74,800"}  {/* all data which is not available in api is hardcoded */}
                        </Typography>
                    </div>
                    <div className="flex justify-between p-2 sm:p-5">
                        <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "grey" }}>
                            {"All-Time Low"}
                        </Typography>
                        <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "black" }}>
                            {"$67.81"}
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}