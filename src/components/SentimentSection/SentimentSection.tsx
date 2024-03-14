import { Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import { SentimentCarousel } from "./SentimentCarousel";

// DAMN this one took lots of time

export default function SentimentSection() {
    return (

        <div className="w-full h-full">
            <div className="mt-5 ml-10 mb-10 flex flex-col space-y-5">
                <Typography style={{ fontSize: "34px", fontWeight: "bold", color: "black" }}>Sentiments</Typography>
                <div className="flex items-center">
                    <Typography style={{ fontSize: "26px", fontWeight: "medium", color: "#5A5A5A" }}>Key Events</Typography>
                    <InfoIcon color="action" />
                </div>
                <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
                    <SentimentCarousel
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
                <div className="flex items-center">
                    <Typography style={{ fontSize: "26px", fontWeight: "medium", color: "#5A5A5A" }}>Analysts Estimates</Typography>
                    <InfoIcon color="action" />
                </div>
                <div className="p-2 border-2">
                    <div className="flex flex-col items-center md:flex-row md:gap-x-9 gap-y-9 border-2 ">
                        <div className=" rounded-full w-[10rem] h-[10rem] bg-green-100 flex items-center justify-center">
                            <Typography style={{ fontSize: "36px", fontWeight: "bold", color: "#50C878" }}>76</Typography>%
                        </div>
                        <div className="flex flex-col w-full justify-center gap-y-7 flex-grow border-2">
                            <div className="flex space-x-7">
                                <div className="w-11">
                                    <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "grey" }}>
                                        {"Buy"}
                                    </Typography>
                                </div>
                                <div className="flex items-center gap-x-3 w-full">
                                    <div className="h-2  w-full bg-green-500 rounded-sm" />
                                    <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "grey" }}>{"76%"}</Typography>
                                </div>
                            </div>
                            <div className="flex gap-x-7">
                                <div className="w-11">
                                    <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "grey" }}>
                                        {"Hold"}
                                    </Typography>
                                </div>
                                <div className="flex items-center gap-x-3 w-full">
                                    <div className="h-2  w-1/6 bg-gray-400 rounded-sm" />
                                    <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "grey" }}>{"8%"}</Typography>
                                </div>
                            </div>
                            <div className="flex gap-x-7">
                                <div className="w-11">
                                    <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "grey" }}>
                                        {"Sell"}
                                    </Typography>
                                </div>
                                <div className="flex items-center gap-x-3 w-full">
                                    <div className="h-2  w-1/3 bg-red-500 rounded-sm" />
                                    <Typography style={{ fontSize: "20px", fontWeight: "medium", color: "grey" }}>{"16%"}</Typography>
                                </div>
                            </div>
                        </div>
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