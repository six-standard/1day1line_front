import { Icon } from "@iconify/react";
import { useSection } from "../../hooks/useSection";

export const List = () => {
  const { section } = useSection();

  return (
    <main
      className={`w-full h-[100vh] ${
        section === true ? "translate-x-[-100%]" : ""
      } bg-[#ebebeb] flex justify-center relative shrink-0 transition-all duration-500 ease-in-out`}
    >
      <div className="absolute left-20 bottom-20 flex gap-3 flex-col items-start">
        <button className="flex items-center gap-1 border-[3px] px-2 py-1 border-[#2c2c2c] hover:opacity-50 transition-all duration-200 ease-in-out">
          <Icon icon="mdi:share" color="#2c2c2c" width={20} />
          <span className="font-['WantedSansB'] text-[#2c2c2c]">공유</span>
        </button>
        <button className="flex items-center gap-1 border-[3px] px-2 py-1 border-[#2c2c2c] hover:opacity-50 transition-all duration-200 ease-in-out">
          <Icon icon="mingcute:calendar-fill" color="#2c2c2c" width={20} />
          <span className="font-['WantedSansB'] text-[#2c2c2c]">
            날짜로 검색
          </span>
        </button>
        <button className="flex items-center gap-1 border-[3px] px-2 py-1 border-[#2c2c2c] hover:opacity-50 transition-all duration-200 ease-in-out">
          <Icon icon="mingcute:time-fill" color="#2c2c2c" width={20} />
          <span className="font-['WantedSansB'] text-[#2c2c2c]">
            내용으로 검색
          </span>
        </button>
      </div>
    </main>
  );
};
