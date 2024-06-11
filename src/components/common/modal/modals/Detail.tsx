import dayjs from "dayjs";
import { ModalLayout } from "../ModalLayout";
import { days } from "../../../../utils/date";
import { Icon } from "@iconify/react";
import { useModal } from "../../../../hooks/useModal";
import { detail, setTop } from "../../../../apis";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface PropType {
  date: number[];
  share?: boolean;
}

interface itemType {
  content: string;
  date: string;
  id: number;
  isTop: boolean;
  writerId: string;
}

export const Detail = ({ date, share }: PropType) => {
  const { removeModal } = useModal();
  const queryClient = useQueryClient();
  const dateInLine = date.map((i) => i.toString().padStart(2, "0")).join("");

  const { data } = useQuery({
    queryKey: ["Detail", dateInLine],
    queryFn: () => detail(dateInLine),
    select: (res) => res.data,
  });

  const { mutate } = useMutation({
    mutationFn: (id: number) => setTop(dateInLine, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["list", `${date[0]}-${date[1]}`],
      });
      queryClient.invalidateQueries({
        queryKey: ["Detail", dateInLine],
      });
    },
  });

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
        <div className="flex flex-col gap-2 h-full overflow-auto">
          {data?.map((i: itemType) => (
            <div className="font-[WantedSansR] text-[20px] border-[3px] border-[#2C2C2C] w-full px-3 py-2 flex justify-between items-center">
              <span>{i.content}</span>
              {!share && (
                <Icon
                  onClick={() => mutate(i.id)}
                  icon="mdi:crown"
                  width={30}
                  color={i.isTop ? "#2C2C2C" : "#A8A8A8"}
                  className="cursor-pointer"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </ModalLayout>
  );
};
