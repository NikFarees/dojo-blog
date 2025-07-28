import { useState } from 'react';

const Home = () => {

    // Hooks for state management
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    // Function to handle button click
    const handleClick = () => {
        setName('luigi');
        setAge(30);
    }

    return (
        <div className="Home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;