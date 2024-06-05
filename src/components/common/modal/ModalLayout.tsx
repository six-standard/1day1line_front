interface PropType {
  children: React.ReactElement[] | React.ReactElement;
}

export const ModalLayout = ({ children }: PropType) => {
  return (
    <div className="flex flex-col gap-3 items-center px-4 py-3 bg-[#EBEBEB] border-[3px] border-[#2C2C2C]">
      {children}
    </div>
  );
};
