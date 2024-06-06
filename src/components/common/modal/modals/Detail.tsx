import dayjs from "dayjs";
import { ModalLayout } from "../ModalLayout";
import { days } from "../../../../utils/date";
import { Icon } from "@iconify/react";
import { useModal } from "../../../../hooks/useModal";
import { data } from "../../../../pages/Home/List/constants";

interface PropType {
  date: number[];
}

export const Detail = ({ date }: PropType) => {
  const { removeModal } = useModal();
  const datas = data.find((i) => i.date === date[2]);

  console.log(datas);

  return (
    <ModalLayout>
      <div className="w-[75vw] h-[60vh] flex flex-col gap-3">
        <div className="w-full flex justify-between items-center">
          <span className="font-[WantedSansB] text-[24px]">
            {date[1]}월 {date[2]}일({days[dayjs(date.join("-")).day()]})의 일기
          </span>
          <Icon
            icon="ph:x-bold"
            width={35}
            onClick={() => removeModal()}
            className="cursor-pointer hover:opacity-50 transition-all duration-150"
          />
        </div>
        {datas?.texts.map((i, index) => (
          <div className="font-[WantedSansR] text-[20px] border-[3px] border-[#2C2C2C] w-full px-3 py-2 flex justify-between items-center">
            <span>{i}</span>
            <Icon
              icon="mdi:crown"
              width={30}
              color={datas?.first === index ? "#2C2C2C" : "#A8A8A8"}
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>
    </ModalLayout>
  );
};
