import { useSection } from "../../hooks/useSection";
import { Button } from "../../components/common";
import { Icon } from "@iconify/react";
import { useState } from "react";

const size = {
  px: 2,
  py: 1,
  icon: 20,
  text: 10,
  gap: 1,
};

export const List = () => {
  const { section } = useSection();
  const [opened, setOpened] = useState(undefined);

  const handleClick = (e: ) => {
    console.log(e.target.id);
  }

  return (
    <main
      className={`w-full h-[100vh] ${
        section === true ? "translate-x-[-100%]" : ""
      } bg-[#ebebeb] flex justify-center relative shrink-0 transition-all duration-500 ease-in-out`}
    >
      <div className="absolute left-20 bottom-20 flex gap-3 flex-col items-start">
        <div>
          <div className="flex gap-2 items-center mb-3 px-4 py-3 border-[3px] border-[#2c2c2c]">
            <Icon icon="material-symbols:link" width={25} />
            <span>
              http://www.1day1line.kro.kr/share?uuid=111111-111111-111111-111111-11111
            </span>
          </div>
          <Button selected={!!opened} id="share" icon="mdi:share" size={size}>
            공유
          </Button>
        </div>

        <Button selected={!!opened} id="date" icon="mingcute:calendar-fill" size={size}>
          날짜로 검색
        </Button>
        <Button selected={!!opened} id="value" icon="mingcute:time-fill" size={size}>
          내용으로 검색
        </Button>
      </div>
    </main>
  );
};
