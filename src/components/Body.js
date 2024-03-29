import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import ErrorPage from "./Error";
import TrailerPlayer from "./BrowseComponent/TrailerPlayer";
import AuthGuard from "../utils/AuhGuard";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/player",
      element: <AuthGuard><TrailerPlayer /></AuthGuard>,
    },
    // {
    //   path: "/player",
    //   element: <TrailerPlayer />,
    // },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/error",
      element: <ErrorPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
