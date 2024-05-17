import { Icon } from "@iconify/react";
import { Button } from "../components/common";

export const Onboard = () => {
  return (
    <main className="w-full h-[100vh] flex justify-center items-center flex-col gap-3">
      <h1 className="text-[#2C2C2C] text-[35px] font-['WantedSansB']">
        Google로 로그인하고 시작
      </h1>
      <Button icon="ic:sharp-login">로그인</Button>
      {/* <button
        onClick={() => console.log("click")}
        className="flex items-center gap-3 px-4 py-2 border-[#2c2c2c] border-[3px] hover:opacity-50 transition-all duration-200 ease-in-out"
      >
        <Icon icon="ic:sharp-login" width={20} color="#2c2c2c" />
        <span className="font-['WantedSansB'] text-[20px] text-[#2c2c2c]">
          로그인
        </span>
      </button> */}
    </main>
  );
};
