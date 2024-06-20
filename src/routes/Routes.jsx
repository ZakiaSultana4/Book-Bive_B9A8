import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../components/ErrorPage";
import Books from "../pages/Books";
import BookDeails from "../pages/BookDeails";
import Pages from "../pages/Pages";
import Lis from "../pages/Lis";
import Blogs from "../pages/Blogs";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/Pages",
        element: <Pages />,
      },
      {
        path: "/bookdeails/:id",
        element: <BookDeails />,
        loader: () => fetch(`/books.json`),
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/List",
        element: <Lis />,
      },
      {
        path: "/Blogs",
        element: <Blogs/>,
      },
      {
        path: "/About",
        element: <About/>,
      },
    ],
  },
]);
