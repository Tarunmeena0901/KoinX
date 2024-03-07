import { Card, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { ArrowUpwardRounded } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

function CoinInfo() {
    const [coinInfo, setCoinInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=%20%2Cinr%2Cusd&include_24hr_change=true`);
                setCoinInfo(response.data);
            } catch (error) {
                console.error('Error fetching coin data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="h-56">
            <div className=" p-2">
                {coinInfo ? (
                    <div className="h-full">
                        <div className="flex items-center m-5">
                            <div>
                                <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=029" alt="Bitcoin Logo" className="h-8 w-8 mr-2" />
                            </div>
                            <div className="mr-2">
                                <Typography fontSize={"34px"} fontWeight={"bold"}>Bitcoin</Typography>
                            </div>
                            <div>
                                <Typography fontSize={"24px"} fontWeight={"medium"} color={"grey"}>BTC</Typography>
                            </div>
                            <Card style={{
                                backgroundColor: "grey",
                                marginLeft: 30,
                                padding: 5,
                                width: 90,
                                height: 40,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Typography fontSize={"16px"} style={{ color: "white" }}> Rank #1</Typography>
                            </Card>
                        </div>
                        <div className=" ml-7">
                            <div className="flex items-center">
                                <Typography fontSize={"32px"} fontWeight={"bold"}>{`$ ${coinInfo.bitcoin.usd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</Typography>
                                <div className="bg-green-100 ml-10 p-2 w-30 flex items-center">
                                    <ArrowUpwardRounded style={{ color: "green", fontSize: "small", marginRight: 5 }} />
                                    <Typography fontSize={"12px"} fontWeight={"medium"} style={{ color: "#00D100" }}>{coinInfo.bitcoin.usd_24h_change.toFixed(2)}%</Typography>
                                </div>
                            </div>
                            <Typography>{`\u20B9${coinInfo.bitcoin.inr.toLocaleString()}`}</Typography>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default CoinInfo;
