import { Icon } from "@iconify/react";
import { ModalLayout } from "../ModalLayout";

export const Password = () => {
  return (
    <ModalLayout>
      <div className="w-[450px] flex flex-col gap-5 items-center px-6 py-10">
        <div className="text-center">
          <span className="block font-[WantedSansEB] text-[26px]">
            일기 잠김
          </span>
          <span className="block font-[WantedSansM] text-[20px]">
            해당 일기를 보려면 비밀번호가 필요합니다
          </span>
        </div>
        <div className="flex w-full items-center gap-2">
          <input
            type="password"
            className="px-2 py-1 outline-none w-full h-11 border-[3px] bg-[#EBEBEB] border-[#2C2C2C]"
          />
          <div className="hover:opacity-50 cursor-pointer transition-all duration-150 border-[3px] border-[#2C2C2C] flex items-center justify-center px-2 h-11">
            <Icon
              icon="mingcute:arrow-up-fill"
              width={25}
              color="2C2C2C"
              className="rotate-[90deg]"
            />
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};
