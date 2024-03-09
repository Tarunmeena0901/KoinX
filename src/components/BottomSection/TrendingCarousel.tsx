"use client";

import { Typography } from "@mui/material";
import { cn } from "../../utils/cn";
import React, { useEffect, useState } from "react";
import { ArrowUpwardRounded } from "@mui/icons-material";

export const TrendingCarousel = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: Array<Object> | null;
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    console.log(items);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);
    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "100s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden",
                className
            )}
            style={{
                maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)"
            }}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:animation-play-state:paused"
                )}
            >
                {items?.map((coin, idx) => (
                    <li
                        className={`w-[350px] max-w-full relative rounded-2xl flex-shrink-0 px-8 py-6 md:w-[450px]'
              }`}
                        key={idx}
                    >
                        <div className="relative border-2 p-3 rounded-lg">
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            ></div>
                            <div className="flex items-center">
                                <img
                                    className="w-12 h-12 object-cover mr-4"
                                    src={coin?.item?.small}
                                    alt="Box Image"
                                />
                                <span className="text-lg leading-[1.6] text-black font-normal">
                                    {coin?.item?.name}
                                </span>
                                <div className="bg-green-100 ml-5 p-2 w-30 flex items-center">
                                    <ArrowUpwardRounded style={{ color: "green", fontSize: "small", marginRight: 5 }} />
                                    <Typography fontSize={"12px"} fontWeight={"medium"} style={{ color: "#00D100" }}>{coin?.item?.data?.price_change_percentage_24h.usd.toFixed(2)}%</Typography>
                                </div>
                            </div>
                            <Typography fontSize={"32px"} fontWeight={"bold"}>{`${coin?.item?.data?.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 })}`}</Typography>
                            <div className=" flex items-center justify-center p-5">
                                    <img
                                        className="w-30 h-20 object-cover"
                                        src={coin?.item?.data?.sparkline}
                                        alt="Box Image"
                                    />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
