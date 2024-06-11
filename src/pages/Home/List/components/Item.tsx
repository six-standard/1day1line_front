import { Detail } from "../../../../components/common/modal/modals/Detail";
import { useModal } from "../../../../hooks/useModal";

interface PropType {
  date: number[];
  day: string;
  content: string;
  share?: boolean;
}

export const Item = ({ date, day, content, share }: PropType) => {
  const { setModal } = useModal();

  return (
    <div
      className="cursor-pointer w-[70%] h-[75px] flex items-center border-[3px] border-[#2C2C2C]"
      onClick={() => setModal(<Detail share={share} date={date} />)}
    >
      <div className="text-center content-center border-r-[3px] border-r-[#2C2C2C] h-full w-[100px] font-[WantedSansEB] text-[20px]">
        {date[2] + ". " + day}
      </div>
      <div className="w-full px-5 font-[WantedSansM] text-[20px] text-ellipsis whitespace-nowrap overflow-hidden">
        {content}
      </div>
    </div>
  );
};
