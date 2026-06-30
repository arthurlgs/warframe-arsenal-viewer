import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Loading } from "../components/loading";

const Home = lazy(() => import("../pages/Home"));
const WarframeDetails = lazy(() => import("../pages/WarframeDetails"));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading message="Initializing navigation..." />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/frame/:name" element={<WarframeDetails />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
