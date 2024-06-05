import { Outlet } from "react-router-dom";
import { Header } from "../../components/static/Header";
import { ModalProvider } from "../../components/common/modal";

export const Layout = () => {
  return (
    <ModalProvider>
      <Header />
      <Outlet />
    </ModalProvider>
  );
};
