import { useSection } from "../../../hooks/useSection";
import { Button } from "../../../components/common";
import { days } from "../../../utils/date";
import { Item } from "./components";
import { Icon } from "@iconify/react";
import { ChangeEvent, useState } from "react";
import dayjs from "dayjs";
import { list, search, user } from "../../../apis";
import { Cookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";

let debounce: any = undefined;

interface itemType {
  date: number;
  content: string;
}

interface searchType {
  content: string;
  date: string;
  id: number;
  isTop: boolean;
  writerId: string;
}

const cookie = new Cookies();

export const List = () => {
  const { section } = useSection();
  const [opened, setOpened] = useState(undefined);
  const [date, setDate] = useState([dayjs().year(), dayjs().month() + 1]);
  const [searchData, setSearchData] = useState("");

  const { data } = useQuery({
    queryKey: ["list", date.join("-")],
    queryFn: () => list(date[0], date[1]),
    select: (res) => res.data,
  });

  const { data: password } = useQuery({
    queryKey: ["password"],
    queryFn: user,
    select: (res) => res.data.password,
  });

  const { data: find } = useQuery({
    queryKey: ["search", searchData],
    queryFn: () => search(searchData),
    select: (res) => res.data,
  });

  const handleClick = (e: any) => {
    setOpened(!(opened === e.target.id) ? e.target.id : undefined);
    setSearchData("");
  };

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
      className={`w-[100%] relative overflow-y-scroll h-[100vh] bg-[#ebebeb] transition-[margin-left] duration-500 flex justify-center shrink-0 ${
        section === true ? "ml-[-100%]" : "ml-0"
      }`}
    >
      <div className="w-full items-center pt-[50vh] pb-[50vh] flex absolute flex-col gap-10">
        {find === null ? (
          Array.from({
            length: dayjs(`${date.join("-")}-1`).daysInMonth(),
          }).map((_, index: number) => {
            const tmp = data?.find((i: itemType) => i.date === index + 1);
            if (tmp) {
              return (
                <Item
                  date={[...date, index + 1]}
                  day={days[dayjs(`${date.join("-")}-${index + 1}`).day()]}
                  content={tmp.content}
                />
              );
            } else {
              return <div className="w-3 h-3 bg-[#2C2C2C]" />;
            }
          })
        ) : find?.length === 0 ? (
          <span className="font-[wantedSansEB] text-[30px]">
            검색 결과가 없습니다
          </span>
        ) : (
          <div className="flex flex-col items-center gap-2  w-full ">
            {find?.map((i: searchType) => (
              <div className="px-4 py-3 border-[3px] border-[#2C2C2C] flex flex-col gap-1 w-[70%]">
                <span className="font-[WantedSansB] text-[20px]">
                  {dayjs(i.date).format("YYYY-MM-DD")}
                </span>
                <span className="font-[WantedSansM] text-[18px]">
                  {i.content}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className={`fixed transition-all duration-[500ms] ${
          section === true ? "left-20" : "left-[calc(100%+5rem)]"
        } bottom-20 flex gap-2 flex-col items-start`}
      >
        <div className="relative">
          {opened === "share" && (
            <div className="absolute bg-[#EBEBEB] w-max bottom-8 flex gap-2 mb-3 px-4 py-3 border-[3px] border-[#2c2c2c]">
              <Icon
                icon="material-symbols:link"
                width={25}
                className="cursor-pointer"
                onClick={async () => {
                  await navigator.clipboard.writeText(
                    `http://localhost:5173/share?uuid=${cookie.get("uuid")}`
                  );
                  alert("클립보드에 복사되었습니다");
                }}
              />
              <div className="flex flex-col gap-1">
                <span className="select-text font-[wantedSansM]">
                  http://localhost:5173/share?uuid={cookie.get("uuid")}
                </span>
                <span className="select-text font-[wantedSansM] text-[13px]">
                  비밀번호: {password}
                </span>
              </div>
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
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  clearTimeout(debounce);
                  debounce = setTimeout(() => {
                    setSearchData(e.target.value);
                  }, 600);
                }}
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
