import React from "react";
import Markdown from "react-markdown";
import { useLoaderData } from "react-router";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  console.log(blog);
  const { cover_image, tags, id, title, body_html } = blog;

  return (
    <div className=" group transition border-opacity-30 rounded-md dark:bg-gray-50">
      <img
        role="presentation"
        className="object-cover border-2 border-primary border-opacity-30 w-full rounded h-60 dark:bg-gray-500"
        src={cover_image || bannerImg}
        alt={title}
      />
      <div className="flex flex-wrap justify-center py-6 gap-2 border-t border-dashed dark:border-gray-600">
        {tags.map((tag, i) => (
          <a
            key={i}
            href="#"
            className="px-3 py-1 font-medium rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
          >
            #{tag}
          </a>
        ))}
      </div>
      {/* whol article data */}
      <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
    </div>
  );
};

export default Content;
