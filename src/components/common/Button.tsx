import { Icon } from "@iconify/react";

interface PropType
  extends Partial<Omit<HTMLButtonElement, "children" | "onClick">> {
  children: string;
  icon: string;
  size?: {
    px: number;
    py: number;
    text: number;
    icon: number;
    gap: number;
  };
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
}

export const Button = ({
  children,
  icon,
  size = { px: 4, py: 2, text: 20, icon: 20, gap: 3 },
  onClick = () => console.log("click!"),
  selected,
  disabled,
}: PropType) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center ${`gap-${size.gap}`} ${`px-${size.px}`} ${`py-${size.py}`} border-[#2c2c2c] border-[3px] ${
        selected || (disabled && "opacity-50")
      } hover:opacity-50 transition-all duration-200 ease-in-out`}
    >
      <Icon icon={icon} width={size.icon} color="#2c2c2c" />
      <span
        className={`font-['WantedSansB'] ${`text-[${size.text}px]`} text-[#2c2c2c]`}
      >
        {children}
      </span>
    </button>
  );
};
