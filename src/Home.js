import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'Mario', id: 1 },
        { title: 'Welcome Party', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'Yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'Mario', id: 3 },
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
    }, []);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
        </div>
    );
}

export default Home;