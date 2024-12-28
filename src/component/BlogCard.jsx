import React from 'react'
import { Link } from 'react-router'
import bannerImg from "../assets/hero1.jpg";


const BlogCard = ({blog}) => {
    const{cover_image, id, title, published_at, description} = blog;
  return (
    <Link
            to={`/blog/${id}`}
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto  group border-2 border-primary transition hover:scale-105 border-opacity-30 rounded-md hover:border-red-500 hover:no-underline focus:no-underline dark:bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={cover_image || bannerImg}
                alt={title}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {title}
                </h3>
                <span className="text-xs dark:text-gray-600">
                  {new Date(published_at).toDateString()}
                </span>
                <p>{description}</p>
              </div>
            </Link>
  )
}

export default BlogCard