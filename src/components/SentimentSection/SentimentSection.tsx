import { Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import { SentimentCarousel } from "./SentimentCarousel";

// DAMN this one took lots of time

export default function SentimentSection() {
    return (

        <div className="w-full h-400 border-2 ">
            <div className="mt-5 ml-10 mb-10 flex flex-col space-y-5">
                <Typography style={{ fontSize: "34px", fontWeight: "bold", color: "black" }}>Sentiments</Typography>
                <div className="flex items-center">
                    <Typography style={{ fontSize: "26px", fontWeight: "medium", color: "#5A5A5A" }}>Key Events</Typography>
                    <InfoIcon color="action" />
                </div>
                <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                    <SentimentCarousel
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];