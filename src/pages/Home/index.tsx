import { List } from "./List";
import { Write } from "./Write";

export const Home = () => {
  return (
    <div className="w-[200%] transition-all duration-200 ease-in-out overflow-hidden relative h-[100vh] flex-1 inline-flex">
      <Write />
      <List />
    </div>
  );
};
