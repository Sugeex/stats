import ConnectionSpeedChart from "./components/ConnectionSpeedChart";
import TotalBalance from "./components/TotalBalance";

const MainPage = () => {
    return (
        <div className="grid grid-cols-1 gap-4 p-6 justify-items-center">
            <TotalBalance />
            <ConnectionSpeedChart />
            <ConnectionSpeedChart colorType="blue" />
        </div>
    )
}

export default MainPage;