import { useSection } from "../../hooks/useSection";
import { Button } from "../../components/common";
import { Icon } from "@iconify/react";
import { useState } from "react";
import dayjs from "dayjs";
import { days } from "../../utils/date";

interface PropType {
  children: string;
  bold?: boolean;
  red?: boolean;
}

const TextBox = ({ children, bold, red }: PropType) => {
  return (
    <span
      className={`${
        bold ? "font-[WantedSansSB]" : "font-[WantedSansR]"
      } text-[18px] inline-block w-10 h-10 text-center content-center ${
        red ? "text-[#D60000]" : "text-[#2C2C2C]"
      }`}
    >
      {children}
    </span>
  );
};

export const List = () => {
  const { section } = useSection();
  const [opened, setOpened] = useState(undefined);
  const [date, setDate] = useState([dayjs().year(), 5]);

  const getDateList = () => {
    const _date = dayjs(`${date.join("-")}-01`);
    const start = _date.startOf("month").day();
    const end = _date.daysInMonth();
    const len = start + end;
    let cals = Array.from(
      { length: len % 7 === 0 ? len : len + (7 - (len % 7)) },
      (_, j) => (j < start || j - start + 1 > end ? 0 : j - start + 1)
    );
    let dates = [];

    for (let i = 0; i < cals.length / 7; i++) {
      let tmp: number[] = [];
      for (let j = 7 * i; j < 7 * (i + 1); j++) {
        tmp.push(cals[j]);
      }
      dates.push(tmp);
    }

    return dates;
  };

  const handleClick = (e: any) =>
    setOpened(!(opened === e.target.id) ? e.target.id : undefined);

  const handleMoveDate = (to: boolean) => {
    //false: 왼, true: 오
    let arr = date;
    if (!to) {
      if (arr[1] === 1) setDate([arr[0] - 1, 12]);
      else setDate([arr[0], arr[1] - 1]);
    } else {
      if (arr[1] === 12) setDate([arr[0] + 1, 1]);
      else setDate([arr[0], arr[1] + 1]);
    }
  };

  return (
    <main
      className={`w-full h-[100vh] ${
        section === true ? "translate-x-[-100%]" : ""
      } bg-[#ebebeb] flex justify-center relative shrink-0 transition-all duration-500 ease-in-out`}
    >
      <div className="absolute left-20 bottom-20 flex gap-3 flex-col items-start">
        <div className="relative">
          {opened === "share" && (
            <div className="absolute w-max bottom-8 flex gap-2 items-center mb-3 px-4 py-3 border-[3px] border-[#2c2c2c]">
              <Icon
                icon="material-symbols:link"
                width={25}
                className="cursor-pointer"
              />
              <span>
                http://www.1day1line.kro.kr/share?uuid=111111-111111-111111-111111-11111
              </span>
            </div>
          )}
          <Button
            selected={opened === "share"}
            onClick={handleClick}
            id="share"
            icon="mdi:share"
          >
            공유
          </Button>
        </div>
        <div className="relative">
          {opened === "date" && (
            <div className=" w-max bottom-8 bg-[#ebebeb] absolute flex gap-1 items-center flex-col mb-3 px-4 py-3 border-[3px] border-[#2c2c2c]">
              <div className="flex items-center gap-7">
                <Icon
                  icon="ep:arrow-up-bold"
                  className="cursor-pointer"
                  onClick={() => handleMoveDate(false)}
                  rotate={-45}
                  width={15}
                />
                <span className="font-['WantedSansB'] text-[20px]">
                  {date[0]}. {date[1].toString().padStart(2, "0")}
                </span>
                <Icon
                  icon="ep:arrow-up-bold"
                  className="cursor-pointer"
                  onClick={() => handleMoveDate(true)}
                  rotate={45}
                  width={15}
                />
              </div>
              <div>
                {days.map((i, j) => (
                  <TextBox bold key={j} red={j === 0}>
                    {i}
                  </TextBox>
                ))}
                {getDateList().map((i, j) => {
                  return (
                    <div key={j}>
                      {i.map((n, m) => (
                        <TextBox key={m} red={m === 0}>
                          {n === 0 ? "ㅤ" : n.toString()}
                        </TextBox>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <Button
            selected={opened === "date"}
            onClick={handleClick}
            id="date"
            icon="mingcute:calendar-fill"
          >
            날짜로 검색
          </Button>
        </div>

        <div className="relative">
          {opened === "content" && (
            <div className="bottom-8 bg-[#ebebeb] absolute flex gap-2 items-center mb-3 px-4 py-3 border-[3px] border-[#2c2c2c]">
              <Icon icon="material-symbols:search" width={23} />
              <input
                placeholder="내용으로 검색"
                className="bg-transparent outline-none w-[500px]"
              />
            </div>
          )}
          <Button
            selected={opened === "content"}
            onClick={handleClick}
            id="content"
            icon="material-symbols:search"
          >
            내용으로 검색
          </Button>
        </div>
      </div>
    </main>
  );
};
