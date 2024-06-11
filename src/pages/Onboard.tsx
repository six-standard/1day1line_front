import { useEffect } from "react";
import { Button } from "../components/common";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const size = { px: 4, py: 2, text: 20, icon: 20, gap: 3 };
const cookie = new Cookies();

export const Onboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (cookie.get("uuid")) {
      navigate("/");
    }
  }, []);

  return (
    <main className="w-full h-[100vh] flex justify-center items-center flex-col gap-3">
      <h1 className="text-[#2C2C2C] text-[35px] font-['WantedSansB']">
        Google로 로그인하고 시작
      </h1>
      <Button
        icon="ic:sharp-login"
        size={size}
        onClick={() =>
          window.location.replace("http://localhost:3000/auth/google")
        }
      >
        로그인
      </Button>
    </main>
  );
};
