import axios from "axios";
import { Button } from "../components/common";

const size = { px: 4, py: 2, text: 20, icon: 20, gap: 3 };

export const Onboard = () => {
  return (
    <main className="w-full h-[100vh] flex justify-center items-center flex-col gap-3">
      <h1 className="text-[#2C2C2C] text-[35px] font-['WantedSansB']">
        Google로 로그인하고 시작
      </h1>
      <Button
        icon="ic:sharp-login"
        size={size}
        onClick={() => axios.get("http://localhost:3001/google")}
      >
        로그인
      </Button>
    </main>
  );
};
