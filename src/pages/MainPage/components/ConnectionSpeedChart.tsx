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

  const downloadData = [10, 5, 15, 0, 15, 12, 29, 29, 29, 12, 15, 5];
  const uploadData = [5, 3, 10, 2, 10, 8, 20, 18, 22, 10, 12, 4];

  const series = [
    { name: "Speed", data: downloadData},
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
      tooltip: {
      shared: true,
      custom: ({ dataPointIndex }) => {
        const download = downloadData[dataPointIndex];
        const upload = uploadData[dataPointIndex];

        return `
          <div style="
            padding:6px;
            background:#333;
            color:#fff;
            font-size:12px;
            border-radius:4px;
          ">
            <div style="display:flex; align-items:center; gap:4px;">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#00E396">
                <path d="M12 2 L12 20 M12 20 L8 16 M12 20 L16 16" stroke="#00E396" stroke-width="2" fill="none"/>
              </svg>
              Download: ${download} мб/c
            </div>
            <div style="display:flex; align-items:center; gap:4px;">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#FF4560">
                <path d="M12 22 L12 4 M12 4 L8 8 M12 4 L16 8" stroke="#FF4560" stroke-width="2" fill="none"/>
              </svg>
              Upload: ${upload} мб/c
            </div>
          </div>
        `;
      },
    },
  };

  return (
    <Card className="flex flex-col gap-4 sm:max-w-lg w-full">
      <span className="text-[20px] text-[#ffffff99] font-medium">
        {title}
      </span>
      <div className="mt-[-54px] mb-[-25px] max-sm:-mt-4 max-sm:-mb-10">
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
