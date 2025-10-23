import ReactApexChart from "react-apexcharts";
import Card from "../../../components/Card";
import type { ApexOptions } from "apexcharts";

interface ChartProps {
  colorType?: "green" | "blue";
  title?: string;
}

const ConnectionSpeedChart = ({
  colorType = "green",
  title = "Connection Speed",
}: ChartProps) => {
  const isGreen = colorType === "green";

  const lineColor = isGreen ? "#00E396" : "#7366ff";
  const gradientColor = isGreen ? "#A3E635" : "#e8e6ff";

  const series = [
    { name: "Speed", data: [10, 5, 15, 0, 15, 12, 29, 29, 29, 12, 15, 5] },
  ];

  const options: ApexOptions = {
    chart: {
      height: 200,
      type: "line",
      toolbar: {
        show: false,
      },
      zoom: { enabled: false },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 5,
        left: 0,
        blur: 4,
        color: "#7366ff",
        opacity: 0.22,
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    colors: [lineColor],
    stroke: {
      width: 3,
      curve: "smooth",
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
      ],
      tickAmount: 10,
      labels: {
        style: {
          fontFamily: "Rubik, sans-serif",
          colors: "#FFFFFF",
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: [gradientColor],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        colorStops: [
          {
            offset: 0,
            color: lineColor,
            opacity: 1,
          },
          {
            offset: 100,
            color: gradientColor,
            opacity: 1,
          },
        ],
      },
    },
    yaxis: {
      min: -10,
      max: 40,
      labels: {
        show: false,
      },
    },
  };

  return (
    <Card className="flex flex-col gap-4 sm:max-w-lg w-full">
      <span className="text-[20px] text-[#ffffff99] font-medium">
        {title}
      </span>
      <div className="mt-[-54px] mb-[-25px]">
        <ReactApexChart
          height={135}
          type="line"
          options={options}
          series={series}
        />
      </div>
    </Card>
  );
};

export default ConnectionSpeedChart;
