import { Typography } from "@mui/material";
import DoughnutChart from "./DoughnutChart";



export default function TokenomicSection() {
    return (
        <div>
            <div className="m-5 ml-10 mb-10 flex flex-col gap-y-5">
                <Typography style={{ fontSize: "34px", fontWeight: "bold", color: "black" }}>Tokenomics</Typography>
                <div className="flex flex-col gap-y-3 divide-y">
                    <div>
                        <Typography style={{ fontSize: "24px", fontWeight: "bold", color: "black" }}>Initial Distribution</Typography>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <DoughnutChart />
                        <p className="line-clamp-6 text-lg font-medium text-slate-700 text-wrap">
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet..
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}