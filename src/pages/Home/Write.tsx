import { Button } from "../../components/common";

const days = ["일", "월", "화", "수", "목", "금", "토"];
const size = {
  px: 2,
  py: 1,
  icon: 20,
  text: 10,
  gap: 1,
};

export const Write = () => {
  const _date = new Date();
  const [year, month, date, day] = [
    _date.getFullYear(),
    _date.getMonth() + 1,
    _date.getDate(),
    days[_date.getDay()],
  ];

  return (
    <main className="w-full h-[100vh] flex justify-center items-center relative shrink-0">
      <div className="flex flex-col gap-3 w-[70%] max-w-[1020px]">
        <input
          placeholder="일기를 작성해주세요..."
          className="bg-transparent outline-none border-[3px] border-[#2c2c2c] w-full p-3 px-5 text-[20px]"
        />
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3 select-none">
            <Button icon="mingcute:time-fill" size={size}>
              타임스탬프
            </Button>
            <Button icon="material-symbols:check" size={size}>
              작성 완료
            </Button>
          </div>
          <div className="flex items-center gap-1 border-[3px] px-2 py-1 border-[#2c2c2c]">
            <span className="font-['WantedSansB'] text-[#2c2c2c]">
              오늘은 {year}년 {month}월 {date}일 ({day})
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};
