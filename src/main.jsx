import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./page/Home";
import MainLayout from "./layout/MainLayout";
import BookMark from "./page/BookMark";
import Blogs from "./page/Blogs";
import Blog from "./page/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { 
        path: "/blogs",
        element: <Blogs/>,
         loader: () => fetch('https://dev.to/api/articles?per_page=20&top=5')

       },
       {
        path: "/blog/:id",
        element: <Blog/>,
        loader: ({params}) =>fetch( `https://dev.to/api/articles/${params.id}`)

       },
      { path: "/bookmarks", element: <BookMark /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
