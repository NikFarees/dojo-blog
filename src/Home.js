import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'Mario', id: 1 },
        { title: 'Welcome Party', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'Yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'Mario', id: 3 },
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // This effect runs every time the component renders
    // If you want it to run only once, pass an empty array as the second argument
    // If you want it to run when specific variables change, include them in the array
    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            <button onClick={() => setName('luigi')}>Change name</button>
            <p>{ name }</p>
        </div>
    );
}

export default Home;