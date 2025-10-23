import Card from "../../../components/Card";

const TotalBalance = () => {
  return (
    <Card className="flex flex-col gap-4 sm:max-w-lg w-full">
      <span className="text-[20px] text-[#ffffff99] font-medium">
        Total Balance
      </span>
      <ul className="two-column-list">
        <li className="flex gap-2.5 items-center max-sm:flex-wrap">
          <div className="rounded-full border border-[#7366ff]">
            <div className="bg-[#e8e6ff] m-[3px] rounded-full size-[50px] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#7366ff"
              >
                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-7-.5-14.5T799-507q-5 29-27 48t-52 19h-80q-33 0-56.5-23.5T560-520v-40H400v-80q0-33 23.5-56.5T480-720h40q0-23 12.5-40.5T563-789q-20-5-40.5-8t-42.5-3q-134 0-227 93t-93 227h200q66 0 113 47t47 113v40H400v110q20 5 39.5 7.5T480-160Z" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-medium">
            <span className="text-[20px] text-[#a8a9ad]">178,25</span>
            <span className="text-red-600">Offline</span>
          </div>
        </li>
        <li className="flex gap-2.5 items-center max-sm:flex-wrap">
            <div className="rounded-full border border-[#54ba4a]">
            <div className="bg-[#e0f2de] m-[3px] rounded-full size-[50px] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#54ba4a"
              >
                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-7-.5-14.5T799-507q-5 29-27 48t-52 19h-80q-33 0-56.5-23.5T560-520v-40H400v-80q0-33 23.5-56.5T480-720h40q0-23 12.5-40.5T563-789q-20-5-40.5-8t-42.5-3q-134 0-227 93t-93 227h200q66 0 113 47t47 113v40H400v110q20 5 39.5 7.5T480-160Z" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-medium">
            <span className="text-[20px] text-[#a8a9ad]">152,74</span>
            <span className="text-green-600">Online</span>
          </div>
        
        </li>
      </ul>
    </Card>
  );
};

export default TotalBalance;
