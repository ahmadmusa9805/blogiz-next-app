import React from 'react';
import {Blog} from '@/Types'
import LatestBlogCard from '../ui/LatestBlogCard';
import BlogCard from '../ui/BlogCard';

const LatestBlogs = ({Blogs}:{Blogs: Blog[]}) => {
  return (
    <div className='w-[90%] mx-auto'>
      <h1 className='text-center my-5'>Latest Blogs From <span className='text-accent'> Blogiz </span> </h1>
      <p className='text-gray-400 text-xl mt-3 w-2/4 mx-auto'> <i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i> </p>
      <div className='grid grid-cols-2 md:grid-cols-2 gap-4 my-5'>{Blogs.slice(0, 2).map(blog => <LatestBlogCard key={blog.id} blog={blog} />)}</div>
      <div className='grid grid-cols-3 md:grid-cols-3 gap-4 my-5'>{Blogs.slice(2, 5).map(blog => <BlogCard key={blog.id} blog={blog} />)}</div>
    </div>
  );
};

export default LatestBlogs;