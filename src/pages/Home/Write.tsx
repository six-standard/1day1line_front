import { Button } from "../../components/common";
import { days } from "../../utils/date";
import dayjs from "dayjs";
const date = dayjs();

export const Write = () => {
  return (
    <main className="w-full h-[100vh] flex justify-center items-center relative shrink-0">
      <div className="flex flex-col gap-3 w-[70%] max-w-[1020px]">
        <input
          placeholder="일기를 작성해주세요..."
          className="bg-transparent outline-none border-[3px] border-[#2c2c2c] w-full p-3 px-5 text-[20px]"
        />
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3 select-none">
            <Button icon="mingcute:time-fill">타임스탬프</Button>
            <Button icon="material-symbols:check">작성 완료</Button>
          </div>
          <div className="flex items-center gap-1 border-[3px] px-2 py-1 border-[#2c2c2c]">
            <span className="font-['WantedSansB'] text-[#2c2c2c]">
              오늘은 {date.format("YYYY년 MM월 DD일")} ({days[date.day()]})
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};
