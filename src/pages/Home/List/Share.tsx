import { Button } from "../../../components/common";
import { days } from "../../../utils/date";
import { Icon } from "@iconify/react";
import { data } from "./constants";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useSearchParams } from "react-router-dom";
import { useModal } from "../../../hooks/useModal";
import { Password } from "../../../components/common/modal/modals/Password";
import { Item } from "./components";

export const Share = () => {
  const [opened, setOpened] = useState(undefined);
  const [date, setDate] = useState([dayjs().year(), dayjs().month() + 1]);
  const [item] = useSearchParams();
  const { setModal } = useModal();
  const [[key, uuid], _] = [...item];

  useEffect(() => {
    setModal(<Password />);
  }, []);

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
    <main className="w-[100%] relative overflow-y-scroll h-[100vh] bg-[#ebebeb] transition-[margin-left] duration-500 flex justify-center">
      <div className="w-full items-center pt-[calc(50vh)] pb-[50vh] flex absolute flex-col gap-10">
        {Array.from({
          length: dayjs(`${date.join("-")}-1`).daysInMonth(),
        }).map((_, index: number) => {
          const tmp = data.find((i) => i.date === index + 1);
          if (tmp) {
            return (
              <Item
                date={[...date, index + 1]}
                day={days[dayjs(`${date.join("-")}-${index + 1}`).day()]}
                content={tmp.texts[tmp.first]}
              />
            );
          } else {
            return <div className="w-3 h-3 bg-[#2C2C2C]" />;
          }
        })}
      </div>
      <div
        className="left-20 fixed transition-all duration-[500ms]
        bottom-20 flex gap-2 flex-col items-start"
      >
        <div className="relative">
          {opened === "date" && (
            <div className=" w-max bottom-8 bg-[#ebebeb] absolute flex gap-[1px] items-center flex-col mb-3 px-4 py-3 border-[3px] border-[#2c2c2c]">
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
            </div>
          )}
          <Button
            selected={opened === "date"}
            onClick={handleClick}
            id="date"
            icon="mingcute:calendar-fill"
          >
            기간 선택
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
