import { Card, Typography } from "@mui/material"
import CoinInfo from "../components/CoinInfo"
import TradingViewWidget from '../components/TradingViewChart'
import TabSection from "../components/Tabs"

function MainPage() {
    return (
        <div className="p-10 bg-gray-100">
            <div className="ml-7">
                <Typography color={"GrayText"}>{"Cryptocurrencies >>"}<b>Bitcoin</b></Typography>
            </div>

            <div className="container mx-auto bg-gray-100 rounded-md">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-3">
                        <div className="h-56 w-full">
                            <CoinInfo />
                        </div>
                        <div className="h-610 w-full rounded-md bg-white p-4">
                            <TradingViewWidget />
                        </div>
                        <div className="p-4 h-56 space-y-2">
                            <TabSection/>
                            <Card className="bg-gray-300 p-4 h-35">tabs</Card>
                        </div>
                        <div className="bg-gray-400 p-4 h-56">
                            <Card className="bg-gray-200 p-4 h-100">Sentiments</Card>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="grid grid-rows-2 gap-4">
                            <div className="bg-gray-200 p-4 h-56">
                                <Card className="bg-gray-300 p-4 h-24 w-auto">get started with koinx box</Card>
                            </div>
                            <div className="bg-gray-200 p-4 h-56">
                                <Card className="bg-gray-300 p-4 h-24 w-auto">trending section</Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage