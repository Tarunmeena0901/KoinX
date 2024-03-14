import { Typography } from "@mui/material";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export default function AboutSection() {
    return (
        <div className="m-5 ml-10 mb-10 flex flex-col gap-y-5 ">
            <Typography style={{ fontSize: "34px", fontWeight: "bold", color: "black" }}>About Bitcoin</Typography>
            <div className="flex flex-col gap-y-3 divide-y">
                <div>
                    <Typography style={{ fontSize: "24px", fontWeight: "bold", color: "black" }}>What is Bitcoin</Typography>
                    <p className="line-clamp-6 text-lg font-medium text-slate-700 text-wrap">
                        Bitcoin is the first decentralized cryptocurrency. Nodes in the peer-to-peer bitcoin network verify transactions through cryptography and record them in a public distributed ledger, called a blockchain, without central oversight. Consensus between nodes is achieved using a computationally intensive process based on proof of work, called mining, that requires increasing quantities of electricity and guarantees the security of the bitcoin blockchain.[5]
                    </p>
                </div>
                <div className="flex flex-col gap-y-5">
                    <div className="flex flex-col gap-y-3">
                        <Typography style={{ fontSize: "24px", fontWeight: "bold", color: "black" }}>Lorem ipsum dolor</Typography>
                        <p className="line-clamp-6 text-lg font-medium text-slate-700 text-wrap">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                        </p>
                        <p className="line-clamp-6 text-lg font-medium text-slate-700 text-wrap">
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                        </p>
                        <p className="line-clamp-6 text-lg font-medium text-slate-700 text-wrap">
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <Typography style={{ fontSize: "34px", fontWeight: "bold", color: "black", textAlign: "center" }}>Already Holding Bitcoin ?</Typography>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 mr-7 inline-block overflow-auto">
                            <div className="flex items-center bg-gradient-to-br from-emerald-300 to-indigo-600 rounded-lg">
                                <div className="ml-5 flex items-center gap-x-5 md:gap-x-10 p-5">
                                    <img
                                        className="w-20 h-20 md:w-[10rem] md:h-[10rem] object-cover mr-4 md:mr-0 rounded-lg"
                                        src={"https://4kwallpapers.com/images/walls/thumbs_2t/13812.png"}
                                        alt="Box Image"
                                    />
                                    <div className="flex flex-col justify-center gap-y-3">
                                        <div className="md:w-[12rem]">
                                            <Typography style={{ fontSize: "26px", fontWeight: "bold", color: "white" }}>Calculate Your Profits</Typography>
                                        </div>
                                        <div className="bg-white rounded-lg h-12 md:h-[3rem] flex items-center justify-center gap-x-3 cursor-pointer hover:bg-gray-100">
                                            <Typography style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}>Check Now</Typography>
                                            <ArrowForwardIosOutlinedIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center bg-gradient-to-br from-orange-200 to-red-600 rounded-lg">
                                <div className="ml-5 flex items-center gap-x-5 md:gap-x-10 p-5">
                                    <img
                                        className="w-20 h-20 md:w-[10rem] md:h-[10rem] object-cover mr-4 md:mr-0 rounded-lg"
                                        src={"https://static.vecteezy.com/system/resources/thumbnails/021/184/001/original/filing-income-tax-return-neon-yellow-blue-fluorescent-text-animation-on-black-background-free-video.jpg"}
                                        alt="Box Image"
                                    />
                                    <div className="flex flex-col justify-center gap-y-3">
                                        <div className="md:w-[12rem]">
                                            <Typography style={{ fontSize: "26px", fontWeight: "bold", color: "white" }}>Calculate Your tax liability</Typography>
                                        </div>
                                        <div className="bg-white rounded-lg h-12 md:h-[3rem] flex items-center justify-center gap-x-3 cursor-pointer hover:bg-gray-100">
                                            <Typography style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}>Check Now</Typography>
                                            <ArrowForwardIosOutlinedIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}