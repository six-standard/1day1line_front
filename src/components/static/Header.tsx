import { Icon } from "@iconify/react";
import { useSection } from "../../hooks/useSection";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const { section, move } = useSection();
  const { pathname } = useLocation();

  return (
    <header className="fixed w-full h-[100px] px-8 bg-[#EBEBEB] flex items-center z-10">
      <span className="inline w-32 text-[#2C2C2C] font-['WantedSansB'] text-[30px] select-none">
        하루한줄
      </span>
      {!pathname.split("/").includes("share") ? (
        <div className="w-[95%] flex justify-between items-center">
          <Icon
            icon="uiw:setting"
            width={20}
            className="cursor-pointer hover:opacity-50 transition-all duration-200 ease-in-out"
            color="#2c2c2c"
          />
          <div
            className="flex gap-1 hover:gap-3 items-center cursor-pointer select-none transition-all duration-200 ease-in-out"
            onClick={move}
          >
            <span className="font-[WantedSansB] text-[20px]">
              일기 {section ? "작성하기" : "돌아보기"}
            </span>
            <Icon
              icon="mingcute:arrow-up-fill"
              width={28}
              className={`${
                section ? "rotate-[270deg]" : "rotate-[90deg]"
              } transition-all duration-300`}
              color="#242424"
            />
          </div>
        </div>
      ) : (
        <span className="font-[WantedSansB] text-[20px] text-[#2C2C2C]">
          six-standard님의 일기
        </span>
      )}
    </header>
  );
};
