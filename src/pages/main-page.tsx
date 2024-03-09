import { Card, Typography } from "@mui/material"
import CoinInfo from "../components/CoinInfo"
import TradingViewWidget from '../components/TradingViewChart'
import TabSection from "../components/Tabs"
import PerformanceSection from "../components/PerformanceSection"
import FundamentalSection from "../components/FundamentalSection"
import ChartRange from "../components/ChartRange"
import SentimentSection from "../components/SentimentSection/SentimentSection"
import AboutSection from "../components/AboutSection"
import TokenomicSection from "../components/TokenomicSection/TokenomicSection"
import TeamSection from "../components/TeamSection"
import BottomSection from "../components/BottomSection/BottomSection"
import SideBox from "../components/SideBox"
import TrendingBox from "../components/TrendingBox"

function MainPage() {
    return (
        <div>
        <div className="p-4 lg:p-12 bg-gray-100">
            <div className="container mx-auto bg-gray-100 lg:max-w-full">
                <Typography color={"GrayText"}>{"Cryptocurrencies >>"}<b>Bitcoin</b></Typography>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
                    <div className="lg:col-span-3 space-y-10">
                        <div className="lg:w-full bg-white rounded-lg">
                            <CoinInfo />
                            <div className="lg:w-full rounded-lg bg-white overflow-hidden">
                                <ChartRange />
                                <TradingViewWidget />
                            </div>
                        </div>
                        <div className="lg:space-y-2">
                            <div className="lg:w-full m-5 h-10">
                                <TabSection />
                            </div>
                            <div className="lg:w-full bg-white border-2 flex flex-col space-y-12">
                                <PerformanceSection />
                                <FundamentalSection />
                            </div>
                        </div>
                        <div className="lg:w-full h-auto bg-white border-2 flex flex-col">
                            <SentimentSection />
                        </div>
                        <div className="lg:w-full h-auto bg-white border-2 flex flex-col">
                            <AboutSection />
                        </div>
                        <div className="lg:w-full h-auto bg-white border-2 flex flex-col">
                            <TokenomicSection />
                        </div>
                        <div className="lg:w-full h-auto bg-white border-2 flex flex-col">
                            <TeamSection/>
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                        <div className="grid grid-rows-2 gap-4">
                            <div className="h-auto">
                                <SideBox/>
                            </div>
                            <div className="h-auto">
                                <TrendingBox/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-10">
            <BottomSection/>
        </div>
        </div>

    )
}

export default MainPage