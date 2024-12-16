import React from 'react';
import { FaUserAlt, FaRegCalendarAlt } from 'react-icons/fa';

const BlogCard = ({ title, date, author, content, imageUrl }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md mx-auto">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-t-md"
      />
      <div className="flex items-center mt-4">
        <h2 className="text-2xl font-bold text-gray-800 flex-grow">{title}</h2>
      </div>
      <div className="flex items-center text-sm text-gray-500 mt-2">
        <FaUserAlt className="mr-2" />
        <span className="mr-2">{author}</span> | <FaRegCalendarAlt className="ml-2" /> {date}
      </div>
      <p className="text-gray-700 mt-4">{content}</p>
      <a
        href="#"
        className="inline-block mt-4 text-blue-500 font-semibold hover:underline"
      >
        Read more
      </a>
    </div>
  );
};

const BlogList = () => {
  return (
    <div className="container mx-auto px-4 mb-5 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard 
          title="Unleashing the Power of Node.js" 
          date="13 Feb 2024" 
          author="Pooja Kumawat" 
          content="In the digital age, content creation is at the forefront of online engagement. Among the myriad tools available to developers and content creators, Node.js stands out as a game-changer, offering..."
          imageUrl="https://via.placeholder.com/400x250"
        />
        <BlogCard 
          title="Revolutionizing Web Development with Node.js"
          date="14 Feb 2024" 
          author="Pooja Kumawat" 
          content="Node.js has quickly become one of the most popular technologies for building web applications, known for its non-blocking architecture and ability to handle concurrent requests efficiently..."
          imageUrl="https://via.placeholder.com/400x250"
        />
        <BlogCard 
          title="Mastering the Art of Backend Development"
          date="15 Feb 2024" 
          author="Pooja Kumawat" 
          content="Backend development is the backbone of most modern applications, and Node.js offers a simple yet powerful environment for creating scalable and performant server-side code..."
          imageUrl="https://via.placeholder.com/400x250"
        />
      </div>
    </div>
  );
};

export default BlogList;
