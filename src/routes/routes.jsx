import { createBrowserRouter } from "react-router";
import Home from "../page/Home";
import Blogs from "../page/Blogs";
import Blog from "../page/Blog";
import BookMark from "../page/BookMark";
import MainLayout from "../layout/MainLayout";
import Content from "../component/Content";
import Author from "../component/Author";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=5"),
      },
      {
        path: "/blog/:id",
        element: <Blog />,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        children:[
            {
                index: true,
                element: <Content/>,
                loader: ({ params }) =>
                  fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path:'author',
                element: <Author/>,
                loader: ({ params }) =>
                  fetch(`https://dev.to/api/articles/${params.id}`),
            }
        ]
      },
      { path: "/bookmarks", element: <BookMark /> },
    ],
  },
]);
