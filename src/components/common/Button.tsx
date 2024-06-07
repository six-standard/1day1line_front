import { Icon } from "@iconify/react";

interface PropType
  extends Partial<Omit<HTMLButtonElement, "children" | "onClick" | "onClick">> {
  children: string;
  icon: string;
  size?: {
    px: number;
    py: number;
    text: number;
    icon: number;
    gap: number;
  };
  onClick?: (e?: any) => void;
  selected?: boolean;
  disabled?: boolean;
}

export const Button = ({
  children,
  icon,
  size = { px: 2, py: 1, icon: 20, text: 15, gap: 1 },
  onClick = () => console.log("click!"),
  selected,
  disabled,
  className,
  ...props
}: PropType) => {
  return (
    <button
      onClick={onClick}
      className={
        `font-['WantedSansB'] ${`text-[${size.text}px]`} text-[#2c2c2c] flex items-center ${`gap-${size.gap}`} ${`px-${size.px}`} ${`py-${size.py}`} border-[#2c2c2c] border-[3px] ${
          (selected || disabled) && "opacity-50"
        } hover:opacity-50 transition-all duration-200 ease-in-out ` + className
      }
      {...(props as any)}
    >
      <Icon icon={icon} width={size.icon} color="#2c2c2c" />
      {children}
    </button>
  );
};
