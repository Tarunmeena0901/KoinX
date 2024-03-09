import { Typography } from "@mui/material";
import { TrendingCarousel } from "./TrendingCarousel";
import { useEffect, useState } from "react";
import axios from "axios";


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


const testimonials = [
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Solana up by 20%",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "Crypto security threat",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "ledger vulnerability found",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Metamask new update",
    },
];