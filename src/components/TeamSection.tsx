import { Typography } from "@mui/material";


export default function TeamSection() {
    return (
        <div>
            <div className="m-5 ml-10 mb-10 flex flex-col gap-y-5">
                <Typography style={{ fontSize: "34px", fontWeight: "bold", color: "black" }}>Team</Typography>
                <p className="line-clamp-6 text-lg font-medium text-slate-700 text-wrap">
                    consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                </p>
                <div className="flex flex-col gap-y-7 divide-y">
                    <div className="flex flex-row flex-wrap justify-center gap-x-5 bg-blue-100 p-5 rounded-lg">
                        <div className="flex flex-col gap-y-3 items-center">
                            <img
                                className="w-[10rem] h-[10rem] object-cover rounded-lg"
                                src={"https://i0.wp.com/beneaththetangles.com/wp-content/uploads/2016/10/tumblr_ljrzw8nmrg1qdkdwfo1_500.png?resize=480%2C356&ssl=1"}
                                alt="Box Image"
                            />
                            <div className="flex flex-col items-center">
                                <Typography style={{ fontSize: "22px", fontWeight: "bold", color: "black" }}>Goku Chauhan</Typography>
                                <Typography style={{ fontSize: "16px", fontWeight: "medium", color: "GrayText" }}>Frontend devloper</Typography>
                            </div>
                        </div>
                        <div className="flex flex-col w-4/5 justify-center">
                            <p className="line-clamp-6 text-lg font-medium text-slate-700 text-wrap">
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,Aenean vulputate eleifend tellus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,Aenean Donec quam felis, ultricies nec, pellentesque eu, pretium quis,Aenean Aenean leo ligula, Donec quam felis, ultricies nec, pellentesque eu, pretium quis,Aenean porttitor eu, consequat vitae, efeugiat a, tellus sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center gap-x-5 bg-blue-100 p-5 rounded-lg">
                        <div className="flex flex-col gap-y-3 items-center">
                            <img
                                className="w-[10rem] h-[10rem] object-cover rounded-lg"
                                src={"https://e0.pxfuel.com/wallpapers/770/163/desktop-wallpaper-bleach-anime-character-evil-smile-background.jpg"}
                                alt="Box Image"
                            />
                            <div className="flex flex-col items-center">
                                <Typography style={{ fontSize: "22px", fontWeight: "bold", color: "black" }}>Bleach Rathore</Typography>
                                <Typography style={{ fontSize: "16px", fontWeight: "medium", color: "GrayText" }}>Frontend devloper</Typography>
                            </div>
                        </div>
                        <div className="flex flex-col w-4/5 justify-center">
                            <p className="line-clamp-6 text-lg font-medium text-slate-700 text-wrap">
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,Aenean vulputate eleifend tellus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis,Aenean Aenean leo Donec quam felis, ultricies nec, pellentesque eu, pretium quis,Aenean ligula, porttitor eu, consequat vitae, efeugiat a, tellus sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center gap-x-5 bg-blue-100 p-5 rounded-lg">
                        <div className="flex flex-col gap-y-3 items-center">
                            <img
                                className="w-[10rem] h-[10rem] object-cover rounded-lg"
                                src={"https://i.pinimg.com/736x/ba/29/da/ba29da71ae5e15cb7cca628b3439db5b.jpg"}
                                alt="Box Image"
                            />
                            <div className="flex flex-col items-center">
                                <Typography style={{ fontSize: "22px", fontWeight: "bold", color: "black" }}>Naruto Smith</Typography>
                                <Typography style={{ fontSize: "16px", fontWeight: "medium", color: "GrayText" }}>Frontend devloper</Typography>
                            </div>
                        </div>
                        <div className="flex flex-col w-4/5 justify-center">
                            <p className="line-clamp-6 text-lg font-medium text-slate-700 text-wrap">
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, efeugiat a, tellus sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}