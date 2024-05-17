import { Icon } from "@iconify/react";

interface PropType
  extends Partial<Omit<HTMLButtonElement, "children" | "onClick">> {
  children: string;
  icon: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  icon,
  onClick = () => console.log("click!"),
}: PropType) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-2 border-[#2c2c2c] border-[3px] hover:opacity-50 transition-all duration-200 ease-in-out"
    >
      <Icon icon={icon} width={20} color="#2c2c2c" />
      <span className="font-['WantedSansB'] text-[20px] text-[#2c2c2c]">
        {children}
      </span>
    </button>
  );
};
