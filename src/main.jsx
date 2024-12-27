import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./page/Home";
import MainLayout from "./layout/MainLayout";
import Blog from "./page/Blog";
import BookMark from "./page/BookMark";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { 
        path: "/blogs",
         element: <Blog />,
         loader: () => fetch('https://dev.to/api/articles?per_page=20&top=5')

       },
      { path: "/bookmarks", element: <BookMark /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
