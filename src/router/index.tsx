import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layouts";
import { Onboard } from "../pages/Onboard";
import { Home } from "../pages/Home";
import { Share } from "../pages/Home/List/Share";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="share" element={<Share />} />
        </Route>
        <Route path="/onboard" element={<Onboard />} />
      </Routes>
    </BrowserRouter>
  );
};
