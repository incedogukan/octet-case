import { RouteObject } from "react-router-dom";
import {
  Login,
  MovieDetail,
  MovieList,
  NotFound,
  ProtectedRoute,
} from "./components";
import { MainLayout } from "./layouts";
import { MovieDetailProvider } from "./store";

const routes: RouteObject[] = [
  {
    path: "",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "list",
            element: <MovieList />,
          },
          {
            path: "detail/:id",
            element: (
              <MovieDetailProvider
                children={<MovieDetail />}
              ></MovieDetailProvider>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
