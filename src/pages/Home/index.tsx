import { useEffect } from "react";
import { Write } from "./Write";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { List } from "./List";

const cookie = new Cookies();

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookie.get("email")) {
      navigate("/onboard");
    }
  }, []);

  return (
    <div className="w-[100%] h-[100vh] inline-flex overflow-hidden">
      <Write />
      <List />
    </div>
  );
};
