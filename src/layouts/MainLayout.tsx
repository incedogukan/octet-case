import { useMemo } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import { MovieDetailProvider } from "../store";

function MainLayout() {
  const MemoizedHeader = () => {
    return useMemo(() => <Header />, []);
  };

  return (
    <>
      <MovieDetailProvider>{MemoizedHeader()}</MovieDetailProvider>
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
