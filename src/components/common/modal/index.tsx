import { useModal } from "../../../hooks/useModal";

interface PropType {
  children: React.ReactElement[];
}

export const ModalProvider = ({ children }: PropType) => {
  const { element } = useModal();

  return (
    <div className="w-full h-[100vh]">
      {element && (
        <div className="absolute flex items-center justify-center w-full h-full backdrop-blur-md z-30">
          {element}
        </div>
      )}

      {children}
    </div>
  );
};
