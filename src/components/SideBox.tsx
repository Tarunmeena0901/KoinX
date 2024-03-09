import { Typography } from "@mui/material";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export default function SideBox() {
    return (
        <div className="flex flex-col p-7 gap-y-5 items-center justify-center bg-gradient-to-br from-emerald-300 to-indigo-600 rounded-lg ">
            <div className="w-3/4">
                <p className="break-words text-center text-white text-semibold text-2xl">Get Started With KoinX for Free</p>
            </div>
            <div className="w-auto flex">
                <p className="break-words text-center text-white text-semibold text-sm">With our range of features that you can equip for free,
                    KoinX allows you to be more educated and aware of your tax reports.</p>
            </div>
            <div className="rounded-full bg-white">
                <img
                    className="w-[10rem] h-[10rem] object-cover rounded-lg"
                    src={"https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.svg?v=029"}
                    alt="Box Image"
                />
            </div>
            <div className="bg-white p-3 rounded-lg h-[3rem] flex items-center justify-center gap-x-3 cursor-pointer hover:bg-gray-100">
                <Typography style={{ fontSize: "15px", fontWeight: "bold", color: "black" }}>Get started for FREE</Typography>
                <ArrowForwardIosOutlinedIcon />
            </div>
        </div>
    )
}