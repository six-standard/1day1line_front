import { List } from "./List";
import { Write } from "./Write";

export const Home = () => {
  return (
    <div className="w-[100%] h-[100vh] inline-flex overflow-x-hidden">
      <Write />
      <List />
    </div>
  );
};
