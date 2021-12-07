import React from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import BlogCard from './components/BlogCard/BlogCard';
import { getBlogs } from './services/blog';

import { useState, useEffect } from 'react';

function App() {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogs();
      setBlog(data);
    };
    fetchData();
  }, []);

  return (
    <section className="main">
      <Header />

      {blog.map((post) => {
        return <BlogCard key={post.id} {...post} />;
      })}

      <Footer />
    </section>
  );
}

export default App;
